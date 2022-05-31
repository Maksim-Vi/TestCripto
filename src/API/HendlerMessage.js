import { addSubscribeMassage, deleteSubscribedMassageById, searchSubscribedMassageByChanId } from "../redux/reducers/Websocket/WebsocketReducer";
import { PONG } from "./messages/Server/PONG";
import { store } from '../redux/redux-store';
import { addCriptoTable, selectCriptoTableBySymbol, updateCriptoTable } from "../redux/reducers/CriptoTables/CriptoTablesReducer";

export const HendlerMessage = (data) =>{
    if(data && data.event){
        switch (data.event) {
            case 'info':
                console.log('INFO ->', data.event, data.version);
                break;
            case 'pong':
                new PONG(data)
                break;
            case 'subscribed':
                SubscribeMessage(data)
                break;
            case 'unsubscribed':
                UnsubscribedMessage(data)
                break;
            default:
                break;
        }
    } else {
        parseDataMessagesTiker(data)
    }
  
}

const parseDataMessagesTiker = (data) =>{
    if(!data) return 

    const chanId = data[0]
    const message = searchSubscribedMassageByChanId(chanId)(store.getState())

    if(message){
        if(data[1] !== 'hb'){
           const tableBySymbol = selectCriptoTableBySymbol(message.symbol)(store.getState())

           if(tableBySymbol){
            store.dispatch(updateCriptoTable({symbol: message.symbol,data: data[1]}))
           } else {
            store.dispatch(addCriptoTable({symbol: message.symbol,data: data[1]}))
           }
          
        }
    }

}

const SubscribeMessage = (data) =>{
    store.dispatch(addSubscribeMassage(data))
}

const UnsubscribedMessage = (data) =>{
    store.dispatch(deleteSubscribedMassageById(data.chanId))
}


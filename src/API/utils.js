import { store } from '../redux/redux-store';
import { searchSubscribedMassageBySymbol } from "../redux/reducers/Websocket/WebsocketReducer";
import { SUBSCRIBE_TICKER } from './messages/Client/SUBSCRIBE_TICKER';

export const getTickerCripto = (type) =>{
    switch (type) {
        case 'USD': return ['tBTCUSD', 'tETHUSD', 'tSOLUSD','tOMGUSD','tLTCUSD']
        case 'EUR': return ['tBTCEUR', 'tETHEUR']
        case 'GBP': return ['tBTCGBP', 'tETHGBP']
        default: return ['tBTCUSD', 'tETHUSD', 'tSOLUSD','tOMGUSD','tLTCUSD']
    }
}

export const checkIsSubscribedTickerBySymbol = (getPair) =>{
  
    getTickerCripto(getPair).forEach(tiketName => {
        const isSubscribed = searchSubscribedMassageBySymbol(tiketName)(store.getState())

        if(!isSubscribed){
            new SUBSCRIBE_TICKER(tiketName)
        }
    });
}

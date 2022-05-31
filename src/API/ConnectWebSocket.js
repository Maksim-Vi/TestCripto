import { setLoaded } from "../redux/reducers/Websocket/WebsocketReducer";
import { store } from "../redux/redux-store";
import { HendlerMessage } from "./HendlerMessage";
import { PING } from './messages/Client/PING'

export let websocket;

let reconnectTimeout = null;
let reconnecting = false;

let pingInterval = null;

export function openServerConnection() {
    if (websocket) {
        websocket.close();
        websocket.onopen = null;
        websocket.onerror = null;
        websocket.onclose = null;
        websocket.onmessage = null;
    }

    setUpPingInterval();

    websocket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
    websocket.binaryType = 'arraybuffer';

    websocket.onopen = openWSHandler;
    websocket.onerror = errorWSHandler;
    websocket.onclose = closeWSHandler;
    websocket.onmessage = messageWSHandler;

    window.killGameConnection = () => {
        websocket.onerror();
    }
}

function setUpPingInterval() {
    clearInterval(pingInterval);
    pingInterval = null;

    pingInterval = setInterval(() => {
        const ping = new Date().getTime() - window.wsPing;

        if(!ping && isNaN(ping)) return;

        if(ping >= 6000) {
            if(!reconnecting) {
                reconnecting = true;
                reconnectWebsocket();
            }
        }
    }, 1500);
}

function openWSHandler() {
    reconnecting = false;
    new PING()
//    getTickerCripto('USD').forEach(tiketName=>{
//     new SUBSCRIBE_TICKER(tiketName)
//    })
}

function errorWSHandler(error) {
    reconnecting = true;
    store.dispatch(setLoaded(false))
    reconnectWebsocket();
}

function closeWSHandler() {
    reconnecting = true;
    reconnectWebsocket();
}

function messageWSHandler(event) {
    const parseData = JSON.parse(event.data)
    HendlerMessage(parseData)
}


export function killWebsocket() {
    reconnecting = true;

    if (websocket) {
        store.dispatch(setLoaded(false))
        websocket.close();
    }
}

function reconnectWebsocket() {
    clearTimeout(reconnectTimeout);

    reconnectTimeout = setTimeout (() => {
        if (reconnecting) {
            websocket = null;
            openServerConnection();
        }
    }, 3500);
}

export const sendMessageWS = (message) =>{
    if(!websocket) return 
    
    websocket.send(JSON.stringify(message))
}


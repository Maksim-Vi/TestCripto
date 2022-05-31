import { sendMessageWS } from "../../ConnectWebSocket"

export class SUBSCRIBE_TICKER {
    constructor(symbol){

        this.MESSAG_ENAME = 'SUBSCRIBE_TICKER'
        this.showLog = false
        this.symbol = symbol

        this.init()
    }

    init() {
        this.getLogText()
        this.exec()
    }

    exec() {
        sendMessageWS({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: this.symbol
        })
    }

	getLogText() {
        if(this.showLog){
		    console.log(`${this.MESSAG_ENAME}`);
        }
    }

}
import { sendMessageWS } from "../../ConnectWebSocket"

export class PING {
    constructor(){

        this.MESSAG_ENAME = 'PING'
        this.showLog = true

        this.init()
    }

    init() {
        this.getLogText()
        this.exec()
    }

    exec() {
        sendMessageWS({ "event":"ping", "cid": 1234 })
    }

	getLogText() {
        if(this.showLog){
		    console.log(`${this.MESSAG_ENAME}`);
        }
    }

}
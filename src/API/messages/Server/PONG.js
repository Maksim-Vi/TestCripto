import { setLoaded } from "../../../redux/reducers/Websocket/WebsocketReducer"
import { store } from "../../../redux/redux-store"

export class PONG {
    constructor(data){

        this.MESSAG_ENAME = 'PONG'
        this.showLog = true

        this.data = data

        this.init()
    }

    init() {
        this.getLogText()
        this.exec()
        store.dispatch(setLoaded(true))
    }

    exec() {
        window.wsPing = this.data.ts;
    }

	getLogText() {
        if(this.showLog){
		    console.log(`${this.MESSAG_ENAME} data:`, this.data);
        }
    }

}
export class TICKER {
    constructor(){

        this.MESSAG_ENAME = 'TICKER'
        this.showLog = false

        this.init()
    }

    init() {
        this.getLogText()
        this.exec()
    }

    exec() {

    }

	getLogText() {
        if(this.showLog){
		    console.log(`${this.MESSAG_ENAME}`);
        }
    }

}
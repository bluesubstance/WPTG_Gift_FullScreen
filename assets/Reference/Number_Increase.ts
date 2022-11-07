// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NumberIncrease extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Float)
    delay = 0;
    
    @property({
        type: cc.Float,
        visible: true,
        min: 0,
    })
    _start:number = 100;

    @property({
        type: cc.Float,
        visible: true,
        min: 0,
    })
    _end:number = 980;

    @property(cc.Integer)
    digits = 2;

    @property({
        type: cc.Float,
        visible: true,
        min: 0,
    })
    _speed:number = 1000;

    startInitCount = this._start; // store start number
    countNow:Boolean = false;

    onLoad () {
        this.startInitCount = this._start;
    }

    //start () {
        //this.label.string = this._start.toFixed(2).toString();
    //}

    update(dt) {
        if(this.countNow == true) {
            if(this._start < this._end) {
                this._start += this._speed * dt;
                //console.log(dt);

                this.label.string = this._start.toFixed(this.digits).toString();
                //this.label.string = Math.round(this._start).toString();
                //console.log("STARTTT" + this._start);
            }else{
                this.countNow = false;
                this._start >= this._end;

                this.label.string = this._end.toString();
                //console.log("STOPPPP" + this._start);
            }
        }
    }

    numberIncrease() {
        this.label.string = this.startInitCount.toString();
        this._start = this.startInitCount;
        
        this.scheduleOnce(function() {
            this.countNow = true;
        }, this.delay);
    }
}

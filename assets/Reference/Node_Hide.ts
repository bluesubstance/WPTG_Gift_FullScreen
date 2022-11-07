// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NodeHide extends cc.Component {

    @property(cc.Node)
    nodeList: cc.Node[] = [null];

    @property(cc.Integer)
    DelaySec = 0;

    HideNode(){
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function() {
            for (let i = 0; i < this.nodeList.length; i++) {
                this.nodeList[i].active = false;            
            };
        }, this.DelaySec);
    }


    
    
}

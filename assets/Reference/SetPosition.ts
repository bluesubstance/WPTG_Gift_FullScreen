// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class SetPosition extends cc.Component {

    @property(cc.Node)
    nodeList: cc.Node[] = [null];

    @property(cc.Integer)
    x = 0;

    @property(cc.Integer)
    y = 0;

    SetPosition () {
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].setPosition(this.x,this.y,0);
        };
    }
}

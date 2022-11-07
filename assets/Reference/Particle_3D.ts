// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass

export default class Particle3D extends cc.Component {

    @property(cc.ParticleSystem3D)
    nodeList: cc.ParticleSystem3D[] = [null];
       
    playParticles3D() {
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].stop();
            this.nodeList[i].play();
        };
    }

    stopParticles3D() {
        for (let i = 0; i < this.nodeList.length; i++) {
            //this.nodeList[i].clear();
            this.nodeList[i].stop();
        };
    }
}

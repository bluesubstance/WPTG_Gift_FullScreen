// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property} = cc._decorator;

@ccclass
export default class PlayAnimAdditive extends cc.Component {

    @property(cc.Animation)
    nodeList: cc.Animation[] = [null];
    
    private _playAdditive = true;

    //get target() {
        //return this._target || (this._target = this.getComponent(cc.Animation));
    //}

    onLoad() {
        for (let i = 0; i < this.nodeList.length; i++) {
            if (this.nodeList[i] != null) this.nodeList[i].on(cc.Animation.EventType.FINISHED, this._onFinished, this)
        };
    }

    private _onFinished(...params: any[]) {
        //cc.log(`onFinished`);

        // const type: string = params[0];
        const state: cc.AnimationState = params[1];
        for (let i = 0; i < this.nodeList.length; i++) {
            const clips = this.nodeList[i].getClips();

            const index = clips.indexOf(state.clip);
            if (index > -1) {
                if (index + 1 < clips.length) {
                    this.PlayAdditive(index + 1);
                }
            }
        };
    }

    //onEnable() {
        // cc.log(`onEnable`);
        //this.PlayAdditive();
    //}

    PlayAdditive(value?: number) {
        for (let i = 0; i < this.nodeList.length; i++) {
            if (!this.nodeList.length) return;
            const clips = this.nodeList[i].getClips();
            if (this._playAdditive) {
                for (const clip of clips) {
                    if (clip) {
                        // cc.log(`playAdditive clip name(${clip.name})`);
                        this.nodeList[i].playAdditive(clip.name);
                    }
                }
            } else {
                const index = cc.js.isNumber(value) ? value : 0;
                const clips = this.nodeList[i].getClips();
                if (index >= 0 && index < clips.length) {
                    this.nodeList[i].play(clips[index].name);
                }
            }
        };
    }
}

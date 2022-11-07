// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaySpine_Skin_Animation extends cc.Component {

    //https://docs.cocos.com/creator/2.4/api/en/classes/Skeleton.html#setanimation

    @property(cc.Node)
    nodeList: cc.Node[] = [null];

    @property(sp.SkeletonData)
    SkeletonDataList: sp.SkeletonData[] = [null];

    @property(sp.Skeleton)
    Spine: sp.Skeleton = null;

    @property(cc.String)
    DefaultSkin = "";

    @property(cc.String)
    AnimationName = "";

    @property(cc.Float)
    SpineHideDelay = 0;

    @property({
        type: cc.Integer,
        visible: false,
        min: 0,
    })
    ShowAll: number = 0;

    @property(cc.Label)
    SpineName: cc.Label = null;

    PlaySpine_SkinAndAnim() {
        this.Spine.setSkin(this.DefaultSkin);
        this.Spine.animation = this.AnimationName;
        //this.SpineName.string = this.Spine.skeletonData.name;

        //console.log("PLAYING " +this.DefaultSkin + ", " + this.AnimationName);

        //Hide after finish animation, with delay
        this.Spine.setCompleteListener(() => {
            //console.log("FINISHED PLAYING " +this.DefaultSkin + ", " + this.AnimationName);

            this.scheduleOnce(function () {
                for (let i = 0; i < this.nodeList.length; i++) {
                    this.nodeList[i].active = false;
                };

            }, this.SpineHideDelay);

        });
    }

    SetNextSpineFile() {
        //Change Spine files 1 by 1
        if (this.ShowAll >= this.SkeletonDataList.length) {
            this.SpineName.string = "No More";
        } else {
            this.SpineName.string = this.ShowAll + ") " + this.SkeletonDataList[this.ShowAll].name;
            this.Spine.skeletonData = this.SkeletonDataList[this.ShowAll];
            this.ShowAll++;
        }
    }
}

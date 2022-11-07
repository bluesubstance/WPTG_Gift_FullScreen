// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property} = cc._decorator;

@ccclass
export default class PlayAnimName extends cc.Component {

    @property(cc.Animation)
    Animator: cc.Animation = null;

    //@property(cc.String)
    //LoopClipName = "";

    @property(cc.String)
    PlayClipName = "";

    @property(cc.Float)
    delay = 0;
    
    PlayAnimName() {
        //var animState = this.Animator.play(this.LoopClipName);
        //Stop looping, play it to the end
        //animState.repeatCount = 0;

        this.scheduleOnce(function() {
            //console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Boom!")
            this.Animator.play(this.PlayClipName);
        }, this.delay);
        

        //Reset Loop
        //this.scheduleOnce(function() {
        //    animState.repeatCount = Infinity;
        //    console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Loop Again")
        //}, 1);
        
    }

    PlayAdditive_AnimName() {
        //var animState = this.Animator.play(this.LoopClipName);
        //Stop looping, play it to the end
        //animState.repeatCount = 0;

        this.scheduleOnce(function () {
            //console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Boom!")
            this.Animator.playAdditive(this.PlayClipName);
        }, this.delay);


        //Reset Loop
        //this.scheduleOnce(function() {
        //    animState.repeatCount = Infinity;
        //    console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Loop Again")
        //}, 1);

    }
    
    

    //onEnable() {
        //this.playAnimation();
    //}

    
    
}

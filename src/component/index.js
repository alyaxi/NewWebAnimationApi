import React,{useEffect} from "react";
import "./style.css";
// import horse from "./img/e0baf858bbb9d4b918c5b6c0522b586e.gif"
import background from "./img/pngkey.com-grass-field-png-4418038.png"
import stone from './img/stones-png-clip-art.png'
import cloud from './img/198daeda14097d45e417e62ff283f10e.png'
import useWebAnimations from "@wellyshen/use-web-animations";

function HorseAnimation() {
  var playbackRateChar = 1;
  var playbackRateBg = 0;


  const charSpirit = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' },
  ];
  // const charMovement = document.getElementById("Char")
  const charMovementAnimation = useWebAnimations({
    keyframes:charSpirit,
    timing:{
    easing: 'steps(7, end)',
    direction: "reverse",
    duration: 600,
    playbackRate: playbackRateChar,
    iterations: Infinity}
  })
  
  
    // keyframes
    const cloudFrames = [
    { transform: 'translate(1200px,0)' },
    { transform: 'translate(-1400px,0)' },
  ];
  //  { 
  //   // timing options
  const cloudtTiming = {
    duration: 2000,
    iterations: Infinity,
    playbackRate:6
  }
  // });
  
  // const elementStone = document.getElementById("stone").animate([
  //   // keyframes
  const backgroundGrillFrame =[
    { transform: 'translate(0,0)' },
    { transform: 'translate(2000,0)' },
    { transform: 'translate(-1000px,0)' },
  ]
  // ], { 
  //   // timing options
  const backgroundGrillTime = {
    duration: 3000,
    iterations: Infinity,
    playbackRate: playbackRateBg,
    easing: 'steps(20, end)',
  }
  // });
  // const elementStone1 = document.getElementById("stone1").animate([
  //   // keyframes
  const backgroundGrillFrame2 = [
    { transform: 'translate(0,0)' }, 
    { transform: 'translate(-1000px,0)' },
  ]
  // ], { 
  //   // timing options
  const backgroundGrillTime2 = {
    duration: 3000,
    iterations: Infinity,
    playbackRate: playbackRateBg,
    easing: 'steps(20, end)',
  }
  // });
  
   const CloudMovment = useWebAnimations({
     keyframes:cloudFrames,
     timing:cloudtTiming
   })
   const BackgroundGrill = useWebAnimations({
     keyframes: backgroundGrillFrame,
     timing:backgroundGrillTime,

   });
   const BackgroundGrill2 = useWebAnimations({
    keyframes: backgroundGrillFrame2,
    timing:backgroundGrillTime2,

  })
  // const HorseMovement = document.getElementById("horse")
  // console.log(HorseMovement);
 
  const adjustPlayBack = () => {
    if (playbackRateChar < 0.8) {
      playbackRateBg = (playbackRateChar / 2) * -1;
    }
    else if (playbackRateChar > 1.2 ){
      playbackRateBg = playbackRateChar / 2
    }
    else {
      playbackRateBg = 0
    }
    BackgroundGrill.getAnimation().playbackRate = playbackRateBg;
    BackgroundGrill2.getAnimation().playbackRate = playbackRateBg;
    CloudMovment.getAnimation().playbackRate = playbackRateBg;
  }
  useEffect(() => {
    const bgAnimation = BackgroundGrill.getAnimation();
    bgAnimation.currentTime = bgAnimation.effect.getTiming().duration / 2;
    const bg2Animation = BackgroundGrill2.getAnimation();
    bg2Animation.currentTime = bg2Animation.effect.getTiming().duration / 2;
    const cloudAnimation = CloudMovment.getAnimation();
    cloudAnimation.currentTime = cloudAnimation.effect.getTiming().duration / 2;
    setInterval(() => {
      if (playbackRateChar > 0.4) {
        playbackRateChar *= 0.9;
        charMovementAnimation.getAnimation().playbackRate = playbackRateChar;

      }
      adjustPlayBack();
    }, 3000);
    document.addEventListener("click",() => {
      playbackRateChar  *= 1.1;
      charMovementAnimation.getAnimation().playbackRate = playbackRateChar;
      adjustPlayBack();
    })
  },[adjustPlayBack])

  return (
    <div>
      <div id="main-div">
        <div className="background">
          <img src={background} alt="" />
        </div>
        <div id="stone" ref={BackgroundGrill.ref}>
          <img src={stone} alt=""/>

          </div>
          <div id="stone1" ref={BackgroundGrill2.ref}>
            <img src={stone} alt=""/>

            </div>
            <div id="cloud" ref={CloudMovment.ref}>
              <img src={cloud} alt="" />
              <img src={cloud} alt="" />
              <img src={cloud} alt="" />
            </div>

            <div id="red-queen_and_alice">
      <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" ref={charMovementAnimation.ref} alt="Alice and the Red Queen running to stay in place." />
    </div>
          </div>
        </div>
  );
}

export default HorseAnimation;

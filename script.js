

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function homeAnimation(){
    var t=gsap.timeline();
    t.from(".nav",{
        y:"-100%", 
      duration:1.6,
        ease:Expo.easeInOut,
    })
    t.from(".content h1,h6",{
        y:"100%",
        ease:Expo.easeInOut,
        duration:1,
        opacity:0,
        stagger:0.5,
        delay:"-1"
  })
  t.from(".cheading h5",{
        y:"100%",
        ease:Expo.easeInOut,
        duration:1,
        opacity:0,
        stagger:1,
        delay:"-3.5",
  })
  
}
homeAnimation();
function circleMouseFollower(){
   window.addEventListener("mousemove",function(dets){
//    console.log(dets.clientX,dets.clientY)
   
       document.querySelector(".minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`
   }
        )
}
circleMouseFollower();

document.querySelectorAll(".elem").forEach((elem)=>{
    var rotate = 0;
    var rotx = 0;
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
          opacity:0,
          ease:Power3,
          duration:0.7,
        })
      })
    elem.addEventListener("mousemove",function(dets){
       
        var diff=dets.clientY-elem.getBoundingClientRect().top;
         rotx=dets.clientX-rotate;
         rotate=dets.clientX;
      gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        left:dets.clientX,
        top:diff,
        rotate: gsap.utils.clamp(-20, 20, rotx * 0.5),
      })
    })
})
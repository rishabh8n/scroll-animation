console.log("hello");
gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        toggleActions: 'play complete restart reverse',
        start: "top top",
        end: "+=700%",
        scrub: true,
        pin: true
      }
});


t1.to(".p1-itm1",{duration:0.5,y:350},0);
t1.to(".p1-itm2",{duration:0.5,y:550},0);


t1.from(".p2-itm1",{duration:0.5,y:750},0.5);
t1.from(".p2-itm2",{duration:0.5,y:-750},0.5);

t1.from(".p3-itm1",{duration:0.5,y:750},1.5);
t1.from(".p3-itm2",{duration:0.5,y:-750},1.5);

t1.from(".p4-itm1",{duration:0.5,y:750},2.5);
t1.from(".p4-itm2",{duration:0.5,y:-750},2.5);
t1.from(".p4-itm3",{duration:0.5,x:-750},2.5);
t1.from(".p4-itm4",{duration:0.5,x:450},2.5);
t1.from(".p4-itm5",{duration:0.5,x:650},2.5);


t1.from(".p5-itm1",{duration:0.5,y:-1050},3.5);
t1.from(".p5-itm2",{duration:0.5,y:850},3.5);
t1.from(".p5-itm3",{duration:0.5,y:-1450},3.5);
t1.from(".p5-itm4",{duration:0.5,y:650},3.5);
t1.from(".p5-itm5",{duration:0.5,x:450},3.5);

t1.from(".p6-itm1",{duration:0.5,y:750},4.5);
t1.from(".p6-itm2",{duration:0.5,y:-750},4.5);

t1.from(".p7-itm1",{duration:0.5,y:750},5.5);
t1.from(".p7-itm2",{duration:0.5,y:-750},5.5);

t1.to(".box-1, .svg-container",{backgroundColor:"#4A27CC"},0)
.to(".box-1, .svg-container",{backgroundColor:"#0D1039"},1.5)
.to(".box-1, .svg-container",{backgroundColor:"#16273B"},2.5)
.to(".box-1, .svg-container",{backgroundColor:"#124BA2"},3.5)
.to(".box-1, .svg-container",{backgroundColor:"#002A90"},4.5)
.to(".box-1, .svg-container",{backgroundColor:"#00834D"},5.5);

t1.to("#Opaque_Ring", {duration:1,strokeDasharray: '130,1000'},0)
.to("#Opaque_Ring", {duration:1,strokeDasharray: '280,1000'},1)
.to("#Opaque_Ring", {duration:1,strokeDasharray: '420,1000'},2)
.to("#Opaque_Ring", {duration:1,strokeDasharray: '540,1000'},3)
.to("#Opaque_Ring", {duration:1,strokeDasharray: '680,1000'},4)
.to("#Opaque_Ring", {duration:1,strokeDasharray: '820,1000'},5)

t1.from(".dotsfill2",{duration:1,fill:"#b6dbf7"},0)
.from(".dotsfill3",{duration:1,fill:"#b6dbf7"},1)
.from(".dotsfill4",{duration:1,fill:"#b6dbf7"},2)
.from(".dotsfill5",{duration:1,fill:"#b6dbf7"},3)
.from(".dotsfill6",{duration:1,fill:"#b6dbf7"},4)
.from(".dotsfill7",{duration:1,fill:"#b6dbf7"},5)


t1.to('.t1',{duration:1,yPercent:-100},0)
.from('.t2',{duration:1,yPercent:100},0)
.to('.t2',{duration:1,yPercent:-100},1)
.from('.t3',{duration:1,yPercent:100},1)
.to('.t3',{duration:1,yPercent:-100},2)
.from('.t4',{duration:1,yPercent:100},2)
.to('.t4',{duration:1,yPercent:-100},3)
.from('.t5',{duration:1,yPercent:100},3)
.to('.t5',{duration:1,yPercent:-100},4)
.from('.t6',{duration:1,yPercent:100},4)
.to('.t6',{duration:1,yPercent:-100},5)
.from('.t7',{duration:1,yPercent:100},5)

t1.to('.c1',{duration:1,yPercent:-100},0)
.from('.c2',{duration:1,yPercent:100},0)
.to('.c2',{duration:1,yPercent:-100},1)
.from('.c3',{duration:1,yPercent:100},1)
.to('.c3',{duration:1,yPercent:-100},2)
.from('.c4',{duration:1,yPercent:100},2)
.to('.c4',{duration:1,yPercent:-100},3)
.from('.c5',{duration:1,yPercent:100},3)
.to('.c5',{duration:1,yPercent:-100},4)
.from('.c6',{duration:1,yPercent:100},4)
.to('.c6',{duration:1,yPercent:-100},5)
.from('.c7',{duration:1,yPercent:120},5)






t1.to(".p1",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5
},0);
t1.to(".p2",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5
},1)
t1.to(".p3",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5
},2)
t1.to(".p4",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5
},3)
t1.to(".p5",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5
},4)

t1.to(".p6",{
    yPercent: 100,
    ease: "none",
    stagger: 1,
    duration:1,
    opacity:0.5

},5)




// t1.to(".p1-itm1",{duration:0.5,y:350},-1);
// t1.to(".p1-itm2",{duration:0.5,y:550},-1);


// t1.from(".p2-itm1",{duration:0.5,y:750},0);
// t1.from(".p2-itm2",{duration:0.5,y:-750},1);

// t1.from(".p3-itm1",{duration:0.5,y:750},3);
// t1.from(".p3-itm2",{duration:0.5,y:-750},3);

// t1.from(".p4-itm1",{duration:0.5,y:750},5);
// t1.from(".p4-itm2",{duration:0.5,y:-750},5);
// t1.from(".p4-itm3",{duration:0.5,x:-750},5);
// t1.from(".p4-itm4",{duration:0.5,x:450},5);
// t1.from(".p4-itm5",{duration:0.5,x:650},5);


// t1.from(".p5-itm1",{duration:0.5,y:-1050},7);
// t1.from(".p5-itm2",{duration:0.5,y:850},7);
// t1.from(".p5-itm3",{duration:0.5,y:-1450},7);
// t1.from(".p5-itm4",{duration:0.5,y:650},7);
// t1.from(".p5-itm5",{duration:0.5,x:450},7);

// t1.from(".p6-itm1",{duration:0.5,y:750},9);
// t1.from(".p6-itm2",{duration:0.5,y:-750},9);

// t1.from(".p7-itm1",{duration:0.5,y:750},11);
// t1.from(".p7-itm2",{duration:0.5,y:-750},11);

// t1.to(".box-1, .svg-container",{backgroundColor:"#4A27CC"},0.5)
// .to(".box-1, .svg-container",{backgroundColor:"#0D1039"},2.5)
// .to(".box-1, .svg-container",{backgroundColor:"#16273B"},4.5)
// .to(".box-1, .svg-container",{backgroundColor:"#124BA2"},6.5)
// .to(".box-1, .svg-container",{backgroundColor:"#002A90"},8.5)
// .to(".box-1, .svg-container",{backgroundColor:"#00834D"},10.5);

// t1.to("#Opaque_Ring", {duration:1,strokeDasharray: '130,1000'},1)
// .to("#Opaque_Ring", {duration:1,strokeDasharray: '280,1000'},3)
// .to("#Opaque_Ring", {duration:1,strokeDasharray: '420,1000'},5)
// .to("#Opaque_Ring", {duration:1,strokeDasharray: '540,1000'},7)
// .to("#Opaque_Ring", {duration:1,strokeDasharray: '680,1000'},9)
// .to("#Opaque_Ring", {duration:1,strokeDasharray: '820,1000'},11)

// t1.from(".dotsfill2",{duration:0.1,fill:"#b6dbf7"},2)
// .from(".dotsfill3",{duration:0.1,fill:"#b6dbf7"},4)
// .from(".dotsfill4",{duration:0.1,fill:"#b6dbf7"},6)
// .from(".dotsfill5",{duration:0.1,fill:"#b6dbf7"},8)
// .from(".dotsfill6",{duration:0.1,fill:"#b6dbf7"},10)
// .from(".dotsfill7",{duration:0.1,fill:"#b6dbf7"},12)


// t1.to('.t1',{duration:1,yPercent:-100},0)
// .from('.t2',{duration:2,yPercent:100},0.2)
// .to('.t2',{duration:2,yPercent:-100},2)
// .from('.t3',{duration:2,yPercent:100},2.2)
// .to('.t3',{duration:2,yPercent:-100},4)
// .from('.t4',{duration:2,yPercent:100},4.2)
// .to('.t4',{duration:2,yPercent:-100},6)
// .from('.t5',{duration:2,yPercent:100},6.2)
// .to('.t5',{duration:2,yPercent:-100},8)
// .from('.t6',{duration:2,yPercent:100},8.2)
// .to('.t6',{duration:2,yPercent:-100},10)
// .from('.t7',{duration:2,yPercent:100},10.2)

// t1.to('.c1',{duration:1,yPercent:-100},0)
// .from('.c2',{duration:2,yPercent:100},0.2)
// .to('.c2',{duration:2,yPercent:-100},2)
// .from('.c3',{duration:2,yPercent:100},2.2)
// .to('.c3',{duration:2,yPercent:-100},4)
// .from('.c4',{duration:2,yPercent:100},4.2)
// .to('.c4',{duration:2,yPercent:-100},6)
// .from('.c5',{duration:2,yPercent:100},6.2)
// .to('.c5',{duration:2,yPercent:-100},8)
// .from('.c6',{duration:2,yPercent:100},8.2)
// .to('.c6',{duration:2,yPercent:-100},10)
// .from('.c7',{duration:2,yPercent:120},10.2)






// t1.to(".p1",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5
// },0.5);
// t1.to(".p2",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5
// },2.5)
// t1.to(".p3",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5
// },4.5)
// t1.to(".p4",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5
// },6.5)
// t1.to(".p5",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5
// },8.5)

// t1.to(".p6",{
//     yPercent: 100,
//     ease: "none",
//     stagger: 1,
//     duration:1,
//     opacity:0.5

// },10.5)



gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
ScrollTrigger.create({
    snap: {
      snapTo: 1 / 6,
      duration: 0.9
    }
  });

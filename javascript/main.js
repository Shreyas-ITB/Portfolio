WebFont.load({  google: {    families: ["Inter:100,200,300,regular,500,600,700,800,900","Albert Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic","Roboto Mono:100,200,300,regular,500,600,700","JetBrains Mono:100,200,300,regular,500,600,700,800","Gloock:regular"]  }});
!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('set', 'developer_id.dZGVlNj', true);gtag('config', 'G-HZDKGDQBT7');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HZDKGDQBT7');

$('.nav-toggle').click(function (e) {
    e.preventDefault();
    var goTo = this.getAttribute("href");

    setTimeout(function(){
         window.location = goTo;
    }, 600);       
});

$('.project-card').click(function (e) {
  e.preventDefault();
  var goTo = this.getAttribute("href");

  setTimeout(function(){
       window.location = goTo;
  }, 1200);       
});

$('.button-project-back').click(function (e) {
  e.preventDefault();
  var goTo = this.getAttribute("href");

  setTimeout(function(){
       window.location = goTo;
  }, 1000);       
});

$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
      window.location.reload() 
  }
});

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  multiplier: 1,
}); 

// Wait 2 seconds then calculate the new page height
setTimeout(() => {  
	locoScroll.update();
}, 2000);
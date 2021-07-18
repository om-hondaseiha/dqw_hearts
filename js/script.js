$(function(){
  $('#to_top').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
  $("a[href^='#']").click(function(event){
    let speed = 800;
    let href= $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    event.preventDefault();
  });
});
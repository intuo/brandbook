$(document).ready(function () {
  $('.accordion-content').hide();
  $('.accordion-title').click(function(){
    $(this).parent().toggleClass('active');
    $(this).parent().find('.accordion-content').toggle(150);
  });
});

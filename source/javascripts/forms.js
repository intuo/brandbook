$(document).ready(function () {
  // Radio switches
  $('.cb-enable').click(function(){
    var parent = $(this).parents('.switch');
    $('.cb-disable',parent).removeClass('selected');
    $(this).addClass('selected');
    $('.checkbox',parent).attr('checked', true);
  });

  $('.cb-disable').click(function(){
    var parent = $(this).parents('.switch');
    $('.cb-enable',parent).removeClass('selected');
    $(this).addClass('selected');
    $('.checkbox',parent).attr('checked', false);
  });

  // Bootstrap-switch
  $("[type='checkbox']").bootstrapSwitch();

  // Sliders
  $inputSlider = $('.slider.is-days');
  $inputSliderPercentage = $('.slider.is-percentage');
  $inputSliderScore = $('.slider.is-score');
  $inputSliderHours = $('.slider.is-hours');
  $inputSliderNumber = $('.slider.is-number');

  $inputSlider.slider({
    tooltip: 'always',
    tooltip_position: 'bottom',
    formatter: function(value) {
      return value + " days";
    }
  });

  $inputSliderNumber.slider({
    tooltip: 'always',
    tooltip_position: 'bottom',
    formatter: function(value) {
      return value;
    }
  });

  $inputSliderHours.slider({
    tooltip: 'always',
    tooltip_position: 'bottom',
    formatter: function(value) {
      return value + " hour(s)";
    }
  });

  $inputSliderPercentage.slider({
    tooltip: 'always',
    tooltip_position: 'bottom',
    formatter: function(value) {
      return value + "%";
    }
  });

  $inputSliderScore.slider({
    tooltip: 'always',
    tooltip_position: 'bottom',
    formatter: function(value) {
      return value + "%";
    }
  });

  // Color swatches
  $('.color.is-swatch').click(function(event) {
    event.preventDefault();
    $('.color.is-swatch').removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  // Chosen
  $('.chosen-select-deselect').chosen();
  $('.chosen-select').chosen();

  // Radio switches
  $('.js-filter').click(function(event){
    event.preventDefault();
    $('.filter-container').toggleClass('is-toggled').delay(100).queue(function(){
      $('.filter-container').toggleClass('is-visible').dequeue();
    });
  });

  // Switch badge upload: custom/select
  $('.js-choose-badge').hide();
  $('.js-content').hide();
  $('.js-content.is-active').show();


  $('.js-switch-choose-badge').click(function(event){
    event.preventDefault();
    $('.js-custom-badge').hide();
    $('.js-choose-badge').show();
    $('.js-switch-custom-badge').removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  $('.js-switch-custom-badge').click(function(event){
    event.preventDefault();
    $('.js-custom-badge').show();
    $('.js-choose-badge').hide();
    $('.js-switch-choose-badge').removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  $('.switch-option').click(function(event){
    event.preventDefault();
    $(this).parent().parent().find('.switch-option').removeClass('is-active');
    $(this).toggleClass('is-active');
    $('.js-content').hide();
    toggle = $(this).data('toggle');
    $(toggle).show();
  });

  // Landing page
  $('.js-landing-content').hide();
  $('.js-toggle-landing').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-landing-content').slideDown(100);
    } else {
      $('.js-landing-content').slideUp(100);
    }
  });

  // SSO
  $('.js-sso-content').hide();
  $('.js-sso-toggle').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-sso-content').slideDown(100);
    } else {
      $('.js-sso-content').slideUp(100);
    }
  });

  // Advanced content
  $('.advanced-toggle').hide();
  $('.js-advanced-content').hide();
  $('.advanced-toggle').click(function(event){
    event.preventDefault();
    $('.advanced-toggle').toggleClass('is-visible');
    $('.js-advanced-content').slideToggle(100);
  });

  // Quiz passrate
  $('.js-content-passrate').hide();
  $('.js-toggle-passrate').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-content-passrate').slideDown(100);
    } else {
      $('.js-content-passrate').slideUp(100);
    }
  });

  // Quiz retries
  $('.js-content-retries').hide();
  $('.js-toggle-retries').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-content-retries').slideDown(100);
    } else {
      $('.js-content-retries').slideUp(100);
    }
  });

  // Quiz header
  $('.js-quiz-type').hide();

  $('.js-quiz-button').click(function(e) {
    $detail = $('.main-detail');

    $('.js-quiz-type').slideToggle(100);
    $detail.animate({ scrollTop: $detail.prop('scrollHeight') - $detail.height() + 80 }, 100);
  });

  $('.js-quiz-type .switch-option').click(function(e) {
    $('.js-quiz-type').slideUp(100);
    $(this).removeClass('is-active');
  });

  // Quiz container
  $('.js-has-quiz').hide();
  $('.js-toggle-quiz').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-has-quiz').slideDown(100);
      $('.advanced-toggle').show();
    } else {
      $('.js-has-quiz').slideUp(100);
      $('.js-advanced-content').slideUp(100);
      $('.advanced-toggle').hide();
      $('.advanced-toggle').removeClass('is-visible');
    }
  });
});

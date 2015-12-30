$(document).ready(function () {
  // Edit course
  $('.js-edit-course').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-course').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).addClass('active');
  });

  // Edit stage
  $('.js-edit-stage').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-stage').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).addClass('active');
    $(this).parent().find('.card-tabs').addClass('active');
  });

  // Edit session step
  $('.js-edit-session-step').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-session-step').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).addClass('active');
  });

  // Edit session
  $('.js-edit-session').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-session').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $(this).addClass('active');
  });

  // Edit text
  $('.js-edit-text').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-text').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).toggleClass('active');
  });

  // Edit video
  $('.js-edit-video').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-video').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).toggleClass('active');
  });

  // Edit slide
  $('.js-edit-slide').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-slide').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).toggleClass('active');
  });

  // Edit quiz
  $('.js-edit-quiz').click(function(event) {
    event.preventDefault();
    $('.main-detail').scrollTop(0);
    $('.js-page').hide();
    $('.js-page-quiz').show();
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $('.card-item').removeClass('active');
    $(this).toggleClass('active');
  });

  // Day planner tab
  $('.js-tab-dayplanner').click(function(event) {
    event.preventDefault();
    $('.js-content-dayplanner').show();
    $('.js-content-sessions').hide();
    $('.card-tabs li').removeClass('active');
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $(this).parent().toggleClass('active');
  });

  // Sessions tab
  $('.js-tab-sessions').click(function(event) {
    event.preventDefault();
    $('.js-content-dayplanner').hide();
    $('.js-content-sessions').show();
    $('.card-tabs li').removeClass('active');
    $('.card-title,.card,.card-tabs,.card-item').removeClass('active');
    $(this).parent().toggleClass('active');
  });
  $('.js-content-sessions').hide();

  // Paid course
  $('.js-paid-content').hide();
  $('.js-toggle-paid').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-paid-content').slideDown(100);
    } else {
      $('.js-paid-content').slideUp(100);
    }
  });

  // Description
  $('.js-description-content').hide();
  $('.js-toggle-description').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-description-content').slideDown(100);
    } else {
      $('.js-description-content').slideUp(100);
    }
  });

  // Teacher notes
  $('.js-teacher-content').hide();
  $('.js-toggle-teacher').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $('.js-teacher-content').slideDown(100);
    } else {
      $('.js-teacher-content').slideUp(100);
    }
  });
});

$(document).ready(function() {
  function expandUsers(e) {
    e.preventDefault();
    $('.user-toggle').toggle();
  }
  
  $('.user-expand').on('click', expandUsers);
});

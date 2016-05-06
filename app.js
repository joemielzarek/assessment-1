$(document).ready(function(){
  var clicks = 0;
  $('.btn-generate').text('Generate');
  $('.btn-generate').on('click', function(){
    $('.btn-delete').text('Delete').show().append();
    $('.btn-colorchange').text('Change Color').show().append();

  });


  $('.btn-delete').on('click', function(){
    $('.delete-container').remove();

  });

  $('.btn-generate').on('click', function(){
    incrementClick();
    $('.counter').text('Number of clicks on the Generate button: ' + clicks);
  });


  $('.btn-colorchange').on('click', function(){
      $('.change-container').css('background-color', 'red');

  });


  function incrementClick () {
    clicks += 1;
  }



});

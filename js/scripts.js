$('.toolbar a').on('click', function(e) {
  e.preventDefault();
  document.execCommand($(this).data('role'), false);
});

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

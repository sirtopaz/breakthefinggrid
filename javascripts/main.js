// JS goes here
$(function() {
  $(".student .detail").on({
    click: function() {
      $( this ).toggleClass( "active" );
    },
    mouseenter: function() {
      $( this ).addClass( "animated tada" );
    },
    mouseleave: function() {
      $( this ).removeClass( "animated tada" );
    }
  });
});

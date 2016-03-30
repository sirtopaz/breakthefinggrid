// JS goes here
$(function() {
  $(".student").on({
    click: function() {
      $( this ).toggleClass( "active" );
    },
    mouseenter: function() {
      $( this ).addClass( "inside" );
    },
    mouseleave: function() {
      $( this ).removeClass( "inside" );
    }
  });
});

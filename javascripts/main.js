// JS goes here
$(function() {
  $(".student .detail").on({
    click: function() {
      $( this ).toggleClass( "active" );
    },
    mouseenter: function() {
      $( this ).addClass( "animated tada" ).focus();
    },
    mouseleave: function() {
      $( this ).removeClass( "animated tada" ).blur();
    },
    focus: function() {
      $( this ).addClass( "animated tada" );
    },
    blur: function() {
      $( this ).removeClass( "animated tada" );
    }
  });
});

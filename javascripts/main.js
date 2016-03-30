// JS goes here
$(function() {
  $(".student .detail").on({
    click: function() {
      $(".student .detail").not( this ).addClass( "animated hinge" );
      $(".screen").removeClass( "hidden" );
    },
    mouseenter: function() {
      $( this ).removeClass( "animated rollIn" ).addClass( "animated tada" ).focus();
    },
    mouseleave: function() {
      $( this ).removeClass( "animated rollIn" ).removeClass( "animated tada" ).blur();
    },
    focus: function() {
      $( this ).removeClass( "animated rollIn" ).addClass( "animated tada" );
    },
    blur: function() {
      $( this ).removeClass( "animated rollIn" ).removeClass( "animated tada" );
    }
  });

  $( ".screen .close").on( {
    click: function() {
      $(".screen").addClass("hidden");
      $(".student .detail").removeClass( "animated hinge" ).addClass( "animated rollIn" );
    }
  });
});

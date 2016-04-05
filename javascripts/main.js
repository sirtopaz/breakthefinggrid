// JS goes here
$(function() {
  $(".student .detail").on({
    click: function() {
      $(".student .detail").not( this ).addClass( "animated zoomOut" );
      $(".screen").removeClass( "hidden" );
    },
    mouseenter: function() {
      $( this ).removeClass( "animated zoomIn" ).addClass( "animated tada" ).focus();
    },
    mouseleave: function() {
      $( this ).removeClass( "animated zoomIn" ).removeClass( "animated tada" ).blur();
    },
    focus: function() {
      $( this ).removeClass( "animated zoomIn" ).addClass( "animated tada" );
    },
    blur: function() {
      $( this ).removeClass( "animated zoomIn" ).removeClass( "animated tada" );
    }
  });

  $( ".screen .close").on( {
    click: function() {
      $(".screen").addClass("hidden");
      $(".student .detail.zoomOut").removeClass( "animated zoomOut" ).addClass( "animated zoomIn" );
    }
  });
});

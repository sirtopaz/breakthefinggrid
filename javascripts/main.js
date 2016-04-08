// JS goes here
$(function() {
  $(".student .detail").on({
    click: function(event) {
      /*
      event.preventDefault();
      $(".student .detail").not( this ).addClass( "animated zoomOut" );

      var url = $(this).attr("href");
      $( "#senior-statement" ).load( url + " .senior-statement", function() {
        $(".screen").removeClass( "hidden" );
      } )
      */
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
  }).addClass("animated zoomIn");

  $( ".screen .close").on( {
    click: function() {
      $(".screen").addClass("hidden");
      $( "#senior-statement" ).html("");
      $(".student .detail.zoomOut").removeClass( "animated zoomOut" ).addClass( "animated zoomIn" );
    }
  });
});

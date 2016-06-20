// (function($){
//   $
//   console.log("touchbox.js loaded");
// })(jQuery);
$(function(){
  console.log('loaded......');
  $(function(){ //dialog box using jquery-ui plugin.
    $('.menubox').dialog({
      autoOpen: false,
      show:{
        effect: "fade",
        duration: 1000
      },
      hide:{
        effect: "fade",
        duration: 1000
      }
    });
    $('.time.checkbox input').click(function(){
      $('.menubox').dialog('open');
    });
  });

  // $('.time.checkbox input').on("click",function(event){
  //   console.log('input clicked.....')
  //   console.log($(this)[0].id);
  // })
});

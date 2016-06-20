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
        duration: 500
      },
      hide:{
        effect: "fade",
        duration: 500
      },
      modal: true
    });
    $('.time.checkbox input').click(function(){
      $('.menubox').dialog('open');
      splitfunction($(this)[0].id)
      // var initialTime = splitfunction($(this)[0].id);
      // console.log(initialTime);
    });
  });

  // $('.time.checkbox input').on("click",function(event){
  //   console.log('input clicked.....')
  //   console.log($(this)[0].id);
  // })
});

function splitfunction(x) {
  console.log(x);
}

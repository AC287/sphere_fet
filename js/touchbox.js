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
      // splitfunction($(this)[0].id);
      var initialTime = splitfunction($(this)[0].id);
      console.log(initialTime);
      // console.log(typeof initialTime[0]);
      // console.log(typeof initialTime[1]);
      // console.log(typeof initialTime[2]);
      // $('#startDateForm').attr('value',initialTime[0]); //this doesn't work.

      $('#startDateForm').val(initialTime[0]);
      $('#endDateForm').val(initialTime[0]);

      $('#startTimeForm').val(initialTime[1]);
      $('#endTimeForm').val(initialTime[1]);

      $('#startAmPmForm').val(initialTime[2]);
      $('#endAmPmForm').val(initialTime[2]);
      $('.menubox').dialog('open');
    });
  });

  // $('.time.checkbox input').on("click",function(event){
  //   console.log('input clicked.....')
  //   console.log($(this)[0].id);
  // })
});

function splitfunction(x) { //this will split input value checkbox.
  console.log(x);
  var day = x.substr(0,3);
  var time = x.substring(3,(x.length-2));
  var ampm = x.substr(-2,2);
  return [day,time,ampm]

}

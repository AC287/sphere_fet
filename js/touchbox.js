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
      modal: true,
      // buttons: {
      //   "Save": saveslots,
      // },
    });
    $('.time.checkbox input').click(function(){
      // splitfunction($(this)[0].id);
      var initialTime = splitfunction($(this)[0].id);
      console.log(initialTime);

      // console.log($(this).index());
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

      $('.menuboxForm').submit(function(event) {
        event.preventDefault();
        saveslots();
      });

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

function daterange(x) {
  var menuBoxArr = ['sun12am', 'sun1230am','sun1am','sun130am','sun2am','sun230am','sun3am','sun330am','sun4am','sun430am','sun5am','sun530am','sun6am','sun630am','sun7am','sun730am','sun8am','sun830am','sun9am','sun930am','sun10am','sun1030am','sun11am','sun1130am',
                    'sun12pm', 'sun1230pm','sun1pm','sun130pm','sun2pm','sun230pm','sun3pm','sun330pm','sun4pm','sun430pm','sun5pm','sun530pm','sun6pm','sun630pm','sun7pm','sun730pm','sun8pm','sun830pm','sun9pm','sun930pm','sun10pm','sun1030pm','sun11pm','sun1130pm',
                    'mon12am', 'mon1230am','mon1am','mon130am','mon2am','mon230am','mon3am','mon330am','mon4am','mon430am','mon5am','mon530am','mon6am','mon630am','mon7am','mon730am','mon8am','mon830am','mon9am','mon930am','mon10am','mon1030am','mon11am','mon1130am',
                    'mon12pm', 'mon1230pm','mon1pm','mon130pm','mon2pm','mon230pm','mon3pm','mon330pm','mon4pm','mon430pm','mon5pm','mon530pm','mon6pm','mon630pm','mon7pm','mon730pm','mon8pm','mon830pm','mon9pm','mon930pm','mon10pm','mon1030pm','mon11pm','mon1130pm',
                    'tue12am', 'tue1230am','tue1am','tue130am','tue2am','tue230am','tue3am','tue330am','tue4am','tue430am','tue5am','tue530am','tue6am','tue630am','tue7am','tue730am','tue8am','tue830am','tue9am','tue930am','tue10am','tue1030am','tue11am','tue1130am',
                    'tue12pm', 'tue1230pm','tue1pm','tue130pm','tue2pm','tue230pm','tue3pm','tue330pm','tue4pm','tue430pm','tue5pm','tue530pm','tue6pm','tue630pm','tue7pm','tue730pm','tue8pm','tue830pm','tue9pm','tue930pm','tue10pm','tue1030pm','tue11pm','tue1130pm',
                    'wed12am', 'wed1230am','wed1am','wed130am','wed2am','wed230am','wed3am','wed330am','wed4am','wed430am','wed5am','wed530am','wed6am','wed630am','wed7am','wed730am','wed8am','wed830am','wed9am','wed930am','wed10am','wed1030am','wed11am','wed1130am',
                    'wed12pm', 'wed1230pm','wed1pm','wed130pm','wed2pm','wed230pm','wed3pm','wed330pm','wed4pm','wed430pm','wed5pm','wed530pm','wed6pm','wed630pm','wed7pm','wed730pm','wed8pm','wed830pm','wed9pm','wed930pm','wed10pm','wed1030pm','wed11pm','wed1130pm',
                    'thu12am', 'thu1230am','thu1am','thu130am','thu2am','thu230am','thu3am','thu330am','thu4am','thu430am','thu5am','thu530am','thu6am','thu630am','thu7am','thu730am','thu8am','thu830am','thu9am','thu930am','thu10am','thu1030am','thu11am','thu1130am',
                    'thu12pm', 'thu1230pm','thu1pm','thu130pm','thu2pm','thu230pm','thu3pm','thu330pm','thu4pm','thu430pm','thu5pm','thu530pm','thu6pm','thu630pm','thu7pm','thu730pm','thu8pm','thu830pm','thu9pm','thu930pm','thu10pm','thu1030pm','thu11pm','thu1130pm',
                    'fri12am', 'fri1230am','fri1am','fri130am','fri2am','fri230am','fri3am','fri330am','fri4am','fri430am','fri5am','fri530am','fri6am','fri630am','fri7am','fri730am','fri8am','fri830am','fri9am','fri930am','fri10am','fri1030am','fri11am','fri1130am',
                    'fri12pm', 'fri1230pm','fri1pm','fri130pm','fri2pm','fri230pm','fri3pm','fri330pm','fri4pm','fri430pm','fri5pm','fri530pm','fri6pm','fri630pm','fri7pm','fri730pm','fri8pm','fri830pm','fri9pm','fri930pm','fri10pm','fri1030pm','fri11pm','fri1130pm',
                    'sat12am', 'sat1230am','sat1am','sat130am','sat2am','sat230am','sat3am','sat330am','sat4am','sat430am','sat5am','sat530am','sat6am','sat630am','sat7am','sat730am','sat8am','sat830am','sat9am','sat930am','sat10am','sat1030am','sat11am','sat1130am',
                    'sat12pm', 'sat1230pm','sat1pm','sat130pm','sat2pm','sat230pm','sat3pm','sat330pm','sat4pm','sat430pm','sat5pm','sat530pm','sat6pm','sat630pm','sat7pm','sat730pm','sat8pm','sat830pm','sat9pm','sat930pm','sat10pm','sat1030pm','sat11pm','sat1130pm',
                   ]
}

function saveslots() {
  $('.menubox').dialog('close');
  console.log('saved');

}

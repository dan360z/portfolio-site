$(document).ready(function () {

   $(".nav1").hide();
   $(".nav2").hide();

   $(".nav-button").on("click", function () {
      if ($(window).width() > 992) {
         $(".nav1").animate({ height: 'toggle' });
         $(".nav2").animate({ height: 'toggle' });
      }
      else {
         $(".nav1").animate({ width: 'toggle' });
         $(".nav2").animate({ width: 'toggle' });
      }
   });

   // $(".nav-button").on("click", function () {

   //    if ($(window).width() < 992 ) {
   //       if ($(this).attr('id') === 'inactive') {
   //          setTimeout(function () {
   //             $('#home').animate({ left: '0' });
   //          }, 250);
   //          setTimeout(function () {
   //             $('#about').animate({ left: '0' });
   //          }, 300);
   //          setTimeout(function () {
   //             $('#projects').animate({ left: '0' });
   //          }, 350);
   //          setTimeout(function () {
   //             $('#contact').animate({ left: '0' });
   //          }, 400);
   
   //          $(this).attr('id', 'active');
   //       } else {
   //          setTimeout(function () {
   //             $('#home').animate({ left: '-80vw;' });
   //          }, 250);
   //          setTimeout(function () {
   //             $('#about').animate({ left: '-80vw;' });
   //          }, 300);
   //          setTimeout(function () {
   //             $('#projects').animate({ left: '-80vw;' });
   //          }, 350);
   //          setTimeout(function () {
   //             $('#contact').animate({ left: '-80vw;' });
   //          }, 400);

   //          $(this).attr('id', 'inactive');
   //       }
   //    }
   // });
});
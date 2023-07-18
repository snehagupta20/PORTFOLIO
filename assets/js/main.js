AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// form

// var btn=document.getElementById('btn');
// btn.addEventListener('click',function(e){
//   e.preventDefault();
//       var name=document.getElementById('name').value;
//       var email=document.getElementById('mail').value;
//       var subject=document.getElementById('subject').value;
//       var message=document.getElementById('message').value;
//       var body='name' +name+ '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message ' + message;
//       console.log('hi');
//       Email.send({
//         Host : "smtp.gmail.com",
//         Username : "gsneha20012004@gmail.com",
//         Password : "981190130100",
//         To : 'gsneha20012004@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : body
//       }).then(
//       message => alert(message)
//       );
// })


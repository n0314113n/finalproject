window.onload = function() {
  // necessary for dropdown menus to function properly:
  // https://stackoverflow.com/a/25347431
  $('.ui.dropdown').dropdown();

  //grab button with query selector
//   let btn = document.querySelector('#clickMe');

//   //grab thing to change with query selector
//   let changeMe = document.querySelector('#changeMe');

//   //add event listener to button
//   btn.addEventListener('mouseover', function() {
//     console.log('You did it!');

//     let par = document.createElement('p');

//     par.innerHTML = 'New Thing';

//     changeMe.innerHTML = 'Hello';
//     changeMe.style.fontSize = 30;
//     changeMe.style.color = 'white';
//     changeMe.style.background = 'black';

//     changeMe.appendChild(par);
//   });
//   console.log('click');

  //on 'event' change thing to other thing

  $('.sequenced.images .image').transition({
    animation: 'scale',
    reverse: 'auto', // default setting
    interval: 200,
  });

  // Carl Edits
  // ********************
  // ********************
  // ********************

  // select click 2 div
  let click2 = document.querySelector('#click2');

  // when div is clicked do something!
  click2.addEventListener('click', function(){
      console.log('clicked 2!')
  })
};

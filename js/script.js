const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}));
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}));

const angularBar = document.querySelector('.bar-ang');
const pythonBar = document.querySelector('.bar-py');
const csBar = document.querySelector('.bar-cs');
const jsBar = document.querySelector('.bar-js');
const sqlBar = document.querySelector('.bar-sql');
const biBar = document.querySelector('.bar-bi');
const htmlBar = document.querySelector('.bar-html');
const nodeBar = document.querySelector('.bar-node');
const bootBar = document.querySelector('.bar-boot');
const cssBar = document.querySelector('.bar-css')

var t1 = new TimelineLite();

t1.fromTo(htmlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .fromTo(cssBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut })
    .fromTo(jsBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut })
    .fromTo(bootBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .fromTo(angularBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut })
    .fromTo(nodeBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, ease: Power4.easeOut })
    .fromTo(sqlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .fromTo(pythonBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut })
    .fromTo(csBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(85% - 6px)`, ease: Power4.easeOut })
    .fromTo(biBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(85% - 6px)`, ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller)


function showRequiredCategory(event) {

    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')

    for(i=0;i<categories.length; i++) {
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}

//Firebase Config
var config = {
    apiKey: "AIzaSyDZLTA5JFE-OJbgsIM1JNFYS4iRiYmG0HM",
    authDomain: "portfolio-a7a11.firebaseapp.com",
    databaseURL: "https://portfolio-a7a11.firebaseio.com",
    projectId: "portfolio-a7a11",
    storageBucket: "portfolio-a7a11.appspot.com",
    messagingSenderId: "105256056123",
    appId: "1:105256056123:web:b15a42b43d225c898fb31e",
    measurementId: "G-D620LY8XJH"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  var messageRef = firebase.database().ref('messages');

  //form

document.querySelector('.alert').style.visibility = 'hidden'; //hide alert

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, email, phone, message);

    document.querySelector('.alert').style.visibility = 'visible';
    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    })
}
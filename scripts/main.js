/*const myHeading =document.querySelector('h1');
myHeading.textContent = "The Firefox Foundation";
*/

/*document.querySelector('a').addEventListener('click',
function(){
    alert('Ouch! Stop poking me!');
})

//the above event listener can also be written as

/*let myHTML = document.querySelector('body');

myHTML.addEventListener('click',
function() {
    let logo = document.querySelector('img');
    logo.textContent = "Hooray! The firefox Logo!!!!! is what you clicked on!!!!!</h2>";
}
);
*/

//adding code to change 2 images 

/*let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg'){
        myImage.setAttribute('src', 'images/chrome3.png');
        alert("The chrome browser Logo is coming next")
    } else if(mySrc === 'images/chrome3.png'){
        myImage.setAttribute('src', 'images/opera2.jpeg')
        alert("The Opera Mini Browser Logo is up next");
    }else{
        myImage.setAttribute('src','images/firefox-icon.jpeg');
        alert("We are back to the Firefox Browser Logo");
    }
}
*/

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please Enter your Name : ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to our Site, ' + myName;

    if(!localStorage.getItem('name')){
        setUserName();
    } else{
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'We welcome you to our site, ' + storedName;
    }
}



myButton.onclick = function(){
    setUserName();
}
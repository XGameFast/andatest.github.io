let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}


let myImage = document.querySelector("img");
myImage.addEventListener('click', () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/images (4).jpeg') {
        myImage.setAttribute('src', 'images/test2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/images (4).jpeg');
    }
});

let myButton = document.querySelector('button');

function setUserName() {

    let myName = prompt('please input your name');
    if (!myName) {

        alert("please must input your name");

        setUserName();

        return;

    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'my name is ' + myName;
    }


}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'my name is ' + storeName;
}

myButton.addEventListener('click', () => {
    setUserName();
});
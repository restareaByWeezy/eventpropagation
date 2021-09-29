const containerElement = document.getElementsByClassName("container");
const checkAllElement = document.getElementById("checkAll");

function clickDiv () {
    checkAllElement.addEventListner('click',checkEvent, {capture: true
    });
};

function checkEvent(event) {
    if (event.target.checked = false) {
        event.target.checked = true 
    } else (event.target.checked = true) 
        event.target.checked = true 
    }

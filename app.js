const containerElement = document.getElementsByClassName("container");
const checkAllElement = document.getElementById("checkAll");
const checkboxes = document.querySelector('div.container input[type= checkbox]');

checkboxes.forEach(function(checkbox) {
	checkbox.addEventListener('click', checkEvent, {
		capture: true
	});
});

function checkEvent(event) {
    console.log(event.target.checked)
    if (event.target.checked = false) {
        event.target.checked = true 
    } else (event.target.checked = true) 
        event.target.checked = true 
    }




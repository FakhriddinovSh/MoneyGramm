var elForm = document.getElementById("form");
var elInput = document.getElementById("form__input");
var elSelect = document.getElementById("form__select");
var elResult = document.getElementById("form__result");

elForm.addEventListener("submit", function(event){
    event.preventDefault();
    elResult.textContent = elInput.value * elSelect.value
})

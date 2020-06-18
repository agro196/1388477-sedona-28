var form = document.querySelector('.hotel-search-form');
var form_show_button = document.querySelector('.hotel-search-button');
form_show_button.addEventListener("click", function () {
    console.log("Клик по кнопке поиска");
    form.classList.toggle('form-shown');
    form.classList.toggle('form-hidden')
    });

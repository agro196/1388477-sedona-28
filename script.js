var form = document.querySelector('.hotel-search-form');
var form_show_button = document.querySelector('.hotel-search-button');
var arrival_date = form.querySelector('input[name="arrival-date"]');
var departure_date = form.querySelector('input[name="departure-date"]');
var adults = form.querySelector('input[name="adults"]');
form_show_button.addEventListener("click", function () {
    form.classList.toggle('form-shown');
    form.classList.toggle('form-hidden');
    form.classList.remove("form-error");
});
form.addEventListener("submit", function (evt) {
    if (!arrival_date.value || !departure_date.value || !adults.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (form.classList.contains("form-shown")) {
            evt.preventDefault();
            form.classList.remove("form-error")
            form.classList.remove("form-shown");
            form.classList.add("form-hidden");
        }
    }
});
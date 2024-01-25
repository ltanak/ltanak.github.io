const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.add('appear');
    });
});
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const hiddenElements = document.querySelectorAll('.hidingTransition');
const swipeRight = document.querySelectorAll('.swipeRight');
const swipeLeft = document.querySelectorAll('.swipeLeft');
const swipeUp = document.querySelectorAll('.swipeUp');
const swipeDown = document.querySelectorAll('.swipeDown');
const swipeDownAccordion = document.querySelectorAll('.swipeDownAccordion');
hiddenElements.forEach((element) => observer.observe(element));
swipeRight.forEach((element) => observer.observe(element));
swipeLeft.forEach((element) => observer.observe((element)));
swipeUp.forEach((element) => observer.observe((element)));
swipeDown.forEach((element) => observer.observe((element)));
swipeDownAccordion.forEach((element) => observer2.observe((element)));
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

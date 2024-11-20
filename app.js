// timer js start
let minutes = 15;
let seconds = 0;

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timerInterval);
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);
// timer js end



$(document).ready(function() {
    $('.titliyan').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
                rtl: false
            }
        }]
    });
});
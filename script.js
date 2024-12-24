$(function() {
    $(".card").draggable();

    const introCard = document.getElementById('intro');
    const loginCard = document.getElementById('login');
    const devMainCard = document.getElementById('devMain');

    introCard.addEventListener('click', () => {
        window.location.href = './Portfolio/Intro.html';
    });

    loginCard.addEventListener('click', () => {
        window.location.href = './ERP/login.html';
    });

    devMainCard.addEventListener('click', () => {
        window.location.href = './devNote/devMain.html';
    });

    // Fade In/Out effect for intro card
    $("#intro").click(function(){
        $(this).fadeOut().fadeIn();
    });

    // Display current time
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        $("#time").text(timeString);
    }

    setInterval(updateTime, 1000);

    // Display mouse coordinates
    $(document).mousemove(function(event) {
        const coordinates = `Mouse Coordinates: (${event.pageX}, ${event.pageY})`;
        $("#coordinates").text(coordinates);
    });
});

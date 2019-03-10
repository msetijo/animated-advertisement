window.onload = function() {

    let ad = document.getElementById('ad');
    let countdown = document.getElementById("countdown");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");

    // play normal
    ad.addEventListener('mouseover', () => {
        countdown.classList.add('animated');
        one.classList.add("one-animated");
        two.classList.add("two-animated");
        three.classList.add("three-animated");
    })

    // play in reverse
    ad.addEventListener('mouseout', () => {
    
        countdown.classList.remove('animated');
        one.classList.remove("one-animated");
        two.classList.remove("two-animated");
        three.classList.remove("three-animated");

        setTimeout(() => {
            countdown.classList.add('inactive');
            one.classList.add("inactive");
        }, 5)

    })


}
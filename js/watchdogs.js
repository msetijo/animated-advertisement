window.onload = function() {

    let ad = document.getElementById('ad');
    let images = document.getElementsByClassName("images");

    let countdown = document.getElementById("countdown");

    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");

    let overlay = document.getElementById("expandable-bg-overlay");
    let expandable = document.getElementById("expandable-container");

    // play animated
    ad.addEventListener('mouseover', () => {
        countdown.classList.add('animated');
        one.classList.add("one-animated");
        two.classList.add("two-animated");
        three.classList.add("three-animated");

        //making it translucent
        ad.classList.add("darken");
        for (var i = 0; i < images.length; i++) {
            images[i].style.animationPlayState = "paused";
        }

        countdown.addEventListener("animationend", openExpandable);
    });

    // remove animation
    ad.addEventListener('mouseout', () => {
    
        countdown.classList.remove('animated');
        one.classList.remove("one-animated");
        two.classList.remove("two-animated");
        three.classList.remove("three-animated");

        ad.classList.remove("darken");

        if(expandable.style.display != "inline-block"){
            for (var i = 0; i < images.length; i++) {
                images[i].style.animationPlayState = "running";
            }
        }
        setTimeout(() => {
            countdown.classList.add('inactive');
            one.classList.add("inactive");

            //removing translucent
            ad.classList.add("undarken");
        }, 5)

    });

    function openExpandable(){
        expandable.style.display  = "inline-block";
        overlay.style.display = "inline-block";
    }
    overlay.addEventListener('click', () => {
        expandable.style.display  = "none";
        overlay.style.display = "none";
        for (var i = 0; i < images.length; i++) {
            images[i].style.animationPlayState = "running";
        }
    });
}
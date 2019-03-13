window.onload = function() {

    var ad = document.getElementById('ad');
    var images = document.getElementsByClassName("images");

    var countdown = document.getElementById("countdown");

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");

    var overlay = document.getElementById("expandable-bg-overlay");
    var expandable = document.getElementById("expandable-container");

    // play rollover
    ad.addEventListener('mouseover', function() {

        countdown.classList.add('animated');
        one.classList.add("one-animated");
        two.classList.add("two-animated");
        three.classList.add("three-animated");

        //making it translucent
        ad.classList.add("darken");

        //pause animation
        for (var i = 0; i < images.length; i++) {
            images[i].style.animationPlayState = "paused";
        }

        countdown.addEventListener("animationend", openExpandable);
    });


    // remove rollover when mouse doesn't hover
    ad.addEventListener('mouseout', function() {
    
        countdown.classList.remove('animated');
        one.classList.remove("one-animated");
        two.classList.remove("two-animated");
        three.classList.remove("three-animated");

        ad.classList.remove("darken");

        //animation runs again for banner
        if(expandable.style.display != "inline-block"){
            for (var i = 0; i < images.length; i++) {
                images[i].style.animationPlayState = "running";
            }
        }

        setTimeout(function() {
            countdown.classList.add('inactive');
            one.classList.add("inactive");

            //removing translucent
            ad.classList.add("undarken");
        }, 5)

    });

    function openExpandable(){
        expandable.style.display  = "block";
        overlay.style.display = "inline-block";
    }

    
    document.addEventListener('click', function(e){

        //if clicked close button or black overlay, close expandable
        if(e.target.id == "close-btn" || e.target.id == "expandable-bg-overlay"){
            expandable.style.display  = "none";
            overlay.style.display = "none";
            
            // run the animation in banner again
            for (var i = 0; i < images.length; i++) {
                images[i].style.animationPlayState = "running";
            }
        }
        
    });

    //if clicked banner, open expandable

    ad.addEventListener('click', function() {
        if(expandable.style.display != "inline-block"){

            // pause animation on banners
            for (var i = 0; i < images.length; i++) {
                images[i].style.animationPlayState = "paused";
            }

            //open expandable image
            openExpandable();
        }
    });
}
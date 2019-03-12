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

    ad.addEventListener('click', () => {
        if(expandable.style.display != "inline-block"){

            // pause animation on banners
            for (var i = 0; i < images.length; i++) {
                images[i].style.animationPlayState = "paused";
            }

            //open expandable image
            openExpandable();
        }
    });

    // remove animation when mouse doesn't hover or click
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

        //if clicked banner, open expandable
        if(e.target.id == "ad"){

            if(expandable.style.display != "inline-block"){
                
                //pause banner animation
                for (var i = 0; i < images.length; i++) {
                    images[i].style.animationPlayState = "paused";
                }

                //open expandable image
                openExpandable();
            }
        }
    });

}
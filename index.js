let phoneRotate = false;

//function to rotatephone
function rotatePhone(){
    $(".rotate-bottom").click(function(){
        $(".phone-container").css('transform', `rotate(90deg)`);
        $(".rotate-bottom").css('display', `none`);
        setTimeout(displayTopButton, 600);
        phoneRotate = true;
        setTimeout(reorganizeContent, 1000);
    });

    $(".rotate-top").click(function(){
        $(".phone-container").css('transform', `rotate(0deg)`);
        $(".rotate-top").css('display', `none`);    
        setTimeout(displayBottomButton, 600);
        phoneRotate = false;
        setTimeout(reorganizeContent, 1000);
    });
}

//functions to displays the buttons
function displayTopButton(){
    $(".rotate-top").css('display', `inline-block`);
}

function displayBottomButton(){
    $(".rotate-bottom").css('display', `inline-block`);
}

//function to delete buttons when necessary
function deleteButtons(){
    $( window ).resize(function(){
        if($(window).width() > 900 && phoneRotate === true){
                $(".rotate-top").css('display', `inline-block`);   
        }
        if($(window).width() > 900 && phoneRotate === false){
            $(".rotate-bottom").css('display', `inline-block`);   
         }
        if($(window).width() < 900 && phoneRotate === false){
            $(".rotate-bottom").css('display', `none`);   
        }
        if($(window).width() < 900 && phoneRotate === true){
            $(".rotate-top").css('display', `none`);   
        }
    });
}

//function to reorganize screen content
function reorganizeContent(){
    if(phoneRotate === true){
        $(".my-pic").animate({
            top: "300px",
            left: "45px"
        });
        $(".my-pic").css('transform', `rotate(-90deg)`);

        $(".bio-button").animate({
            transform: "rotate(-90deg)",
            top: "120px",
            left: "0px"
        });
        $(".bio-button").css('transform', `rotate(-90deg)`);
        
        $(".portfolio-button").animate({
            transform: "rotate(-90deg)",
            top: "120px",
            left: "120px"
        });
        $(".portfolio-button").css('transform', `rotate(-90deg)`);
      
    }

    if(phoneRotate === false){
        $(".my-pic").animate({
            top: "60px",
            left: "45px"
        });
        $(".my-pic").css('transform', `rotate(0deg)`);

        $(".bio-button").animate({
            transform: "rotate(0deg)",
            top: "300px",
            left: "60px"
        });
        $(".bio-button").css('transform', `rotate(0deg)`);
        
        $(".portfolio-button").animate({
            transform: "rotate(-90deg)",
            top: "430px",
            left: "60px"
        });
        $(".portfolio-button").css('transform', `rotate(0deg)`);
      
    }

}

//These functinons allows the hover effect at 90 degrees
function hoverEffectForBio(){
    $(".bio-button").mouseenter( function(){
        if(phoneRotate === true){
            $(".bio-button").css({"top":"110px", "left": "-10px"});

            $(".bio-button").mouseleave( function(){
                $(".bio-button").css({"top":"120px", left:"0px"});
            });
        }
        else{
            $(".bio-button").css({"top":"290px", "left": "50px"});

            $(".bio-button").mouseleave( function(){
                $(".bio-button").css({"top":"300px", left:"60px"});
            });
        }
    });
}

function hoverEffectForPortfolio(){
    $(".portfolio-button").mouseenter( function(){
        if(phoneRotate === true){
            $(".portfolio-button").css({"top":"110px", left:"110px"});
            
            $(".portfolio-button").mouseleave( function(){
                $(".portfolio-button").css({"top":"120px", left:"120px"});
            });
        }
        else{
            $(".portfolio-button").css({"top":"420px", left:"50px"});
            $(".portfolio-button").mouseleave( function(){
                $(".portfolio-button").css({"top":"430px", left:"60px"});
            });
        }
    });
}


//function to run all functions
function runAllfunctions(){
    rotatePhone();
    deleteButtons();
    hoverEffectForBio();
    hoverEffectForPortfolio();
} 

$(runAllfunctions);
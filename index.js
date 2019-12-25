let phoneRotate = false;

//function to rotatephone
function rotatePhone(){
    $(".rotate-bottom").click(function(){
        $(".phone-container").css('transform', `rotate(90deg)`);
        $(".rotate-bottom").css('display', `none`);
        setTimeout(displayTopButton, 600);
        phoneRotate = true;
    });

    $(".rotate-top").click(function(){
        $(".phone-container").css('transform', `rotate(0deg)`);
        $(".rotate-top").css('display', `none`);    
        setTimeout(displayBottomButton, 600);
        phoneRotate = false;
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

//function to run all functions
function runAllfunctions(){
    rotatePhone();
    deleteButtons();
} 

$(runAllfunctions);
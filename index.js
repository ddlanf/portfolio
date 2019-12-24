let phoneRotate = false;

function rotatePhone(){
    $(".rotate-bottom").click(function(){
        $(".phone").css('transform', `rotate(90deg)`);
        $(".rotate-bottom").css('display', `none`);
        $(".rotate-top").css('display', `inline-block`);
        phoneRotate = true;
    });

    $(".rotate-top").click(function(){
        $(".phone").css('transform', `rotate(0deg)`);
        $(".rotate-top").css('display', `none`);    
        $(".rotate-bottom").css('display', `inline-block`);
        phoneRotate = false;
    });
}

//Need more work
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

function runAllfunctions(){
    rotatePhone();
    deleteButtons();
} 

$(runAllfunctions);
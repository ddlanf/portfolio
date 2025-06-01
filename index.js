let phoneRotate = false;
let batteryPercentage = 100;
let batteryCounter = -1;

// Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

//function to rotatephone
function rotatePhone(){
    $(".rotate-bottom").click(function(){
        //disable button while rotating
        $(".bio-button").css('pointer-events', `none`);
        $(".portfolio-button").css('pointer-events', `none`);

        //rotate the phone
        $(".phone-container").css('transform', `rotate(90deg)`);
        $(".rotate-bottom").css('display', `none`);
        setTimeout(displayTopButton, 600);
        phoneRotate = true;
        
        //reposition  and enable the buttons after rotate
        setTimeout(reorganizeContent, 1000);
        setTimeout(()=>$(".bio-button").css('pointer-events', `all`), 1000);
        setTimeout(()=>$(".portfolio-button").css('pointer-events', `all`), 1000);
    });

    $(".rotate-top").click(function(){
        //disable button while rotating
        $(".bio-button").css('pointer-events', `none`);
        $(".portfolio-button").css('pointer-events', `none`);

         //rotate the phone
        $(".phone-container").css('transform', `rotate(0deg)`);
        $(".rotate-top").css('display', `none`);    
        setTimeout(displayBottomButton, 600);
        phoneRotate = false;

        //reposition and enable the buttons after rotate
        setTimeout(reorganizeContent, 1000);  
        setTimeout(()=>$(".bio-button").css('pointer-events', `all`), 1000);
        setTimeout(()=>$(".portfolio-button").css('pointer-events', `all`), 1000);
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

//change the color of the portfolio button
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

//Make the scroll to the top button appear
function appearOnScrollToTheBottom(){
    $(document.body).scroll(function() {
        if($(window).width() <= 550){
            if($(document.body).scrollTop() + $(document.body).height() > $(document.body).height() + 1500) {
                $("#scroll-up-button").addClass("show")
            }
            else{
                $("#scroll-up-button").removeClass("show")
            }
        }
        if($(window).width() > 550){
            if($(document.body).scrollTop() + $(document.body).height() > $(document.body).height() + 2500) {
                $("#scroll-up-button").addClass("show")
            }
            else{
                $("#scroll-up-button").removeClass("show")
            }
        }
    });
}

//Diable the dropzone at certain height
function disablePortDropZone(){
    $(document.body).scroll(function() {
        if($(document.body).scrollTop() + $(document.body).height() > $(document.body).height() + 900) {
            $(".portDropZone").css('pointer-events', 'none')
        }
        else{
            $(".portDropZone").css('pointer-events', 'all')
        }
    });
}


function ScrollUp(){
    $("#scroll-up-button").click(function(){
        $("html, body").animate({
            scrollTop: 0
          }, 500);
    })
}    

//Draggable Charger port functions
function dragStart(){
    $(".type-c-port").on('dragstart', function(event){
        setTimeout(function(){ $(".type-c-port").css('opacity', `0`) }, 0)
        $(".plug").css('opacity', `1`)
    })
}

function dragEnd(){
    $(".type-c-port").on('dragend', function(event){
        $(".type-c-port").css('opacity', `1`)
        if(batteryCounter > 0 && phoneRotate){
            $(".plug").css('opacity', `0`)
        }
    })
}


//Drop zone to return the charger port
function dragEnterPortDropZone(){
    $(".portDropZone")
    .on('dragover', false) 
    .on('drop', function(event){
        event.preventDefault();  
        event.stopPropagation();
        batteryCounter = -1;
        batteryPercentage--;
        $(".rotate-top").css('display', `inline-block`);
        $(".type-c-port").css('right', `90vw`)
    })
}

//socket where the charger is plugged in
function dragDrop(){
    $(".socket")
    .on('dragover', false) 
    .on('drop', function(event){
        event.preventDefault();  
        event.stopPropagation();
        if(phoneRotate){
            batteryCounter = 1;
            batteryPercentage+= 2;
            $(".rotate-top").css('display', `none`);
            $(".type-c-port").css('right', `calc((100vw - 600px)/2 + 600px - 30px)`)
            $(".plug").css('opacity', `0`)
        }
    })
}

function dragOut(){
    $(".socket")
    .on('dragleave', function(event){
        event.preventDefault();  
        event.stopPropagation();
        if(phoneRotate){
            console.log("Hello")
            batteryCounter = -1;
            batteryPercentage--;
            $(".rotate-top").css('display', `inline-block`);
            $(".type-c-port").css('right', `90vw`)
        }
    })
}


//This is the battery percentage fucntion, which updates every 0.2 second, dependig on whether or not the charger is plugged in
function timer(){
    setInterval(() => {
        if(batteryPercentage > 0 && batteryPercentage <= 100){
            $(".phone-container").css('background-color', 'lightcyan')
            setTimeout(() => {
                $(".bio-button").css('display', 'block')
                $(".my-pic").css('opacity', '1')
                $(".portfolio-button").css('display', 'block')
            }, 1000);   
            batteryPercentage = batteryCounter + batteryPercentage;
        }
        else if(batteryPercentage == 0){
            this.setTimeout(()=>{
                $(".phone-container").css('background-color', 'black')
                $(".bio-button").css('display', 'none')
                $(".my-pic").css('opacity', '0')
                $(".portfolio-button").css('display', 'none')
            }, 500)
        }

        $(".battery-percentage").css('width', `${batteryPercentage}%`)
       
        if(batteryPercentage < 30){
            $(".battery-percentage").css('background-color', `red`)
        }
        else if(batteryPercentage < 60){
            $(".battery-percentage").css('background-color', `yellow`)
        }
       
        else{
            $(".battery-percentage").css('background-color', `lightgreen`)
        }
    }, 200);
}

//function to run all functions
function runAllfunctions(){
    rotatePhone();
    deleteButtons();
    hoverEffectForBio();
    hoverEffectForPortfolio();
    appearOnScrollToTheBottom();
    ScrollUp();
    dragStart();
    dragEnd();
    dragDrop();
    dragOut();
    timer();
    dragEnterPortDropZone();
    disablePortDropZone();
}

$(runAllfunctions)

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    let currentSlide = 0;
    
    // Function to update slide positions and states
    const updateSlides = (targetIndex) => {
        // Handle circular navigation
        if (targetIndex < 0) {
            targetIndex = slides.length - 1;
        } else if (targetIndex >= slides.length) {
            targetIndex = 0;
        }
        
        // Update transform
        track.style.transform = `translateX(-${targetIndex * 100}%)`;
        
        // Update active states and opacity
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === targetIndex) {
                slide.classList.add('active');
            }
        });
        
        currentSlide = targetIndex;
    };
    
    // Next button click
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlides(currentSlide + 1);
    });
    
    // Previous button click
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlides(currentSlide - 1);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            updateSlides(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            updateSlides(currentSlide - 1);
        }
    });
    
    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                // Swipe left, show next
                updateSlides(currentSlide + 1);
            } else {
                // Swipe right, show previous
                updateSlides(currentSlide - 1);
            }
        }
    });
    
    // Initialize first slide
    updateSlides(0);
    
    // Update slide positions on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlides(currentSlide);
        }, 250);
    });
});
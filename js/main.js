let current = 0;
let slider_images = document.querySelectorAll('.slider');

//clear all imaes
function reset(){
    for(let i =0;i<slider_images.length;i++){
        slider_images[i].style.display = 'none'
    }
}

//start slide
function startSlide(){
    reset();
    slider_images[0].style.display = 'block';
}

startSlide();

//slideRIght
let nextimg =  document.getElementById('slide-next');

function slideRight(){
    reset();
    slider_images[current +1].style.display ='block';
    current++;
}
nextimg.addEventListener('click',function(e){
        if(current == slider_images.length-1){
            current = -1
    }
    slideRight();
    console.log('aage jao');
   
});
//slide left
let previmg =  document.getElementById('slide-prev')

function slideLeft(){
    reset();
    slider_images[current -1].style.display ='block';
    current--;
}


previmg.addEventListener('click',function(e){
    if(current == 0){
            current = slider_images.length
    }
    slideLeft();
   console.log('piche aao');
});
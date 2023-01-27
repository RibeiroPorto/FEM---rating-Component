let buttonsStars = document.getElementsByClassName('rating-button');

let submitButton = document.getElementById('submit')
let selectedButton = undefined;



function highlightSelectedButton(buttonNumber) {
    console.log(buttonNumber)
    for(let i = 0; i<buttonsStars.length; i++){
        if(i==buttonNumber){
            buttonsStars[i].classList.add('selected')
        }else{
            buttonsStars[i].classList.remove('selected')
        }
    }

}
//identify the selected rating button
for(let i = 0; i<buttonsStars.length; i++){
    buttonsStars[i].addEventListener('click', function(){
        
         selectedButton = buttonsStars[i].innerHTML;
        highlightSelectedButton(selectedButton-1) // -1 becouse the index stars at 0 and the buttons start at 1
    })
}


function showResult( ratingValue){
    let ratingcontainer = document.getElementsByClassName('rating-container');
    let thankingContainer = document.getElementsByClassName('thanking-container');
    ratingcontainer[0].style.display="none";
    thankingContainer[0].style.display="flex";
    document.getElementById('rating').innerHTML=' '+ratingValue+' '
}
submitButton.addEventListener('click', function(){
    
    showResult(selectedButton)
})

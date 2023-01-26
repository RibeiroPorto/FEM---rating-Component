let stars =  document.getElementsByName('rating');
let button = document.querySelectorAll('button')

function showResult( ratingValue){
    let ratingcontainer = document.getElementsByClassName('rating-container');
    let thankingContainer = document.getElementsByClassName('thanking-container');
    ratingcontainer[0].style.display="none";
    thankingContainer[0].style.display="flex";
    document.getElementById('rating').innerHTML=' '+ratingValue+' '
}
button[0].addEventListener('click', function(){
    for(let i=0; i<stars.length;i++){
        if(stars[i].checked){
            let radioId =stars[i].getAttribute('id');
            let ratingValue = 0;
            if(radioId==="One-star"){
                ratingValue=1;
            }
            if(radioId==="two-star"){
                ratingValue=2;
            }
            if(radioId==="three-star"){
                ratingValue=3;
            }
            if(radioId==="four-star"){
                ratingValue=4;
            }
            if(radioId==="five-star"){
                ratingValue=5;
            }
            showResult(ratingValue)
        }
    }
})

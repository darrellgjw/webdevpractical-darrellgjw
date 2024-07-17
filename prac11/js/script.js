// alert("hello!!");
function changeImage(imageToChange, changedImage){
    var linkToImage = "img/" + changedImage;//create src link to the resultant image
    document.querySelector(imageToChange).src = linkToImage;
}

var humptyImageClass = ".nursery-box img";
var humptyImage = document.querySelector(humptyImageClass);

humptyImage.addEventListener('click', function(){
    changeImage(humptyImageClass, "sq.png");
})

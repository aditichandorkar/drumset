//document.querySelector("button").addEventListener("click",handleClick);
//document.querySelectorAll("button")[1].addEventListener("click",handleClick);
//document.querySelectorAll("button")[2].addEventListener("click",handleClick);
//document.querySelectorAll("button")[3].addEventListener("click",handleClick);
//document.querySelectorAll("button")[4].addEventListener("click",handleClick);
//document.querySelectorAll("button")[5].addEventListener("click",handleClick);
//document.querySelectorAll("button")[6].addEventListener("click",handleClick);


    
    


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
     
    })
}

document.addEventListener("keypress",function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio1=new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio2=new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
        case "d":
            var audio3=new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            var audio4=new Audio("sounds/snare.mp3");
            audio4.play();
            break;
        case "k":
            var audio5=new Audio("sounds/kick-bass.mp3");
            audio5.play();
            break;
        case "l":
            var audio6=new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        default:
            break;

     }
}


function buttonAnimation(currentKey){

    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}





//Initilize the constructor with source audio and added playfunction
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }
    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

//Button class that keeps track of the button color based on a press
class Button {
    constructor(color, keyCode) {
        this.element = document.getElementById(keyCode);
        this.color = color;
        this.keyCode = keyCode;
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
    }
    //Setted the button color based on color specified   
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }
    //For removing transition after pressing key
    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        })
    }
    //Select function to set the background color and boxShadow
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`
    }
    //Deselect function to reset background color and boxShadow
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}
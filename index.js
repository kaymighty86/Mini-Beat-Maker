var key_a = document.getElementById("key_a");
key_a.addEventListener("click", () => keyboardKeyDown("a","mouse_click"));
var key_s = document.getElementById("key_s");
key_s.addEventListener("click", () => keyboardKeyDown("s","mouse_click"));
var key_d = document.getElementById("key_d");
key_d.addEventListener("click", () => keyboardKeyDown("d","mouse_click"));
var key_f = document.getElementById("key_f");
key_f.addEventListener("click", () => keyboardKeyDown("f","mouse_click"));
var key_g = document.getElementById("key_g");
key_g.addEventListener("click", () => keyboardKeyDown("g","mouse_click"));
var key_h = document.getElementById("key_h");
key_h.addEventListener("click", () => keyboardKeyDown("h","mouse_click"));
var key_j = document.getElementById("key_j");
key_j.addEventListener("click", () => keyboardKeyDown("j","mouse_click"));
var key_k = document.getElementById("key_k");
key_k.addEventListener("click", () => keyboardKeyDown("k","mouse_click"));
var key_l = document.getElementById("key_l");
key_l.addEventListener("click", () => keyboardKeyDown("l","mouse_click"));


//subscribe to keyboard keypress events to play sound when user taps the respective keys
document.body.addEventListener('keydown', function(event){//"keydown is triggered when the button is clicked"
    keyboardKeyDown(event.key,"keyboard");
});

document.body.addEventListener('keyup', function(event){//"keyup is triggered when the button is released"
    keyboardKeyUp(event.key,"keyboard");
});

function keyboardKeyDown(key, input_type){
    switch(key){
        case "a":
            if(input_type === "keyboard") key_a.classList.add("drum_key_pressed");
            var audio_player = key_a.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "s":
            if(input_type === "keyboard") key_s.classList.add("drum_key_pressed");
            var audio_player = key_s.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "d":
            if(input_type === "keyboard") key_d.classList.add("drum_key_pressed");
            var audio_player = key_d.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "f":
            if(input_type === "keyboard") key_f.classList.add("drum_key_pressed");
            var audio_player = key_f.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "g":
            if(input_type === "keyboard") key_g.classList.add("drum_key_pressed");
            var audio_player = key_g.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "h":
            if(input_type === "keyboard") key_h.classList.add("drum_key_pressed");
            var audio_player = key_h.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "j":
            if(input_type === "keyboard") key_j.classList.add("drum_key_pressed");
            var audio_player = key_j.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "k":
            if(input_type === "keyboard") key_k.classList.add("drum_key_pressed");
            var audio_player = key_k.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        case "l":
            if(input_type === "keyboard") key_l.classList.add("drum_key_pressed");
            var audio_player = key_l.childNodes.item(5);
            audio_player.currentTime = 0;//this makes sure that whenever the key is pressed, the SFX starts over
            audio_player.play();
            break;
        default: 
            console.log("A key was pressed");
        break;
    }
}


function keyboardKeyUp(key){
    switch(key){
        case "a":
            key_a.classList.remove("drum_key_pressed");
            break;
        case "s":
            key_s.classList.remove("drum_key_pressed");
            break;
        case "d":
            key_d.classList.remove("drum_key_pressed");
            break;
        case "f":
            key_f.classList.remove("drum_key_pressed");
            break;
        case "g":
            key_g.classList.remove("drum_key_pressed");
            break;
        case "h":
            key_h.classList.remove("drum_key_pressed");
            break;
        case "j":
            key_j.classList.remove("drum_key_pressed");
            break;
        case "k":
            key_k.classList.remove("drum_key_pressed");
            break;
        case "l":
            key_l.classList.remove("drum_key_pressed");
            break;
        default: console.log("A key was released");
            break;
    }
}
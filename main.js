const startgamebtn = document.getElementById("start-button");
const optionsbtn = document.getElementById("options-button");
const creditsbtn = document.getElementById("credits-button");
const titlescreen = document.getElementById("title-screen");
const creditsscreen = document.getElementById("credits-screen");
const optionsscreen = document.getElementById("options-screen");
const creditsbackbtn = document.getElementById("credits-screen_back-button");
const optionsbackbtn = document.getElementById("options-screen_back-button");


startgamebtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered Start Game Button");
    startgamebtn.style.backgroundColor = "#ffd900";
    startgamebtn.style.boxShadow = "0 0 10px #ffd900, 0 0 20px #ffd900, 0 0 40px #fff700";
    startgamebtn.style.filter = "brightness(1.2)";
});
optionsbtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered Options Button");
    optionsbtn.style.backgroundColor = "#00d169";
    optionsbtn.style.boxShadow = "0 0 10px #00d169, 0 0 20px #00d169, 0 0 40px #00d134";
    optionsbtn.style.filter = "brightness(1.2)";
});
creditsbtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered Credits Button");
    creditsbtn.style.backgroundColor = "#FF00FF";
    creditsbtn.style.boxShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #ff66ff";
    creditsbtn.style.filter = "brightness(1.2)";
});

startgamebtn.addEventListener("mouseleave", () => {
    console.log("Mouse left Start Game Button");
    startgamebtn.style.backgroundColor = "#f3cf00";
    startgamebtn.style.boxShadow = "none";
    startgamebtn.style.filter = "brightness(1)";
});

optionsbtn.addEventListener("mouseleave", () => {
    console.log("Mouse left Options Button");
    optionsbtn.style.backgroundColor = "#00d169";
    optionsbtn.style.boxShadow = "none";
    optionsbtn.style.filter = "brightness(1)";
});

creditsbtn.addEventListener("mouseleave", () => {
    console.log("Mouse left Credits Button");
    creditsbtn.style.backgroundColor = "#bb00bb";
    creditsbtn.style.boxShadow = "none";
    creditsbtn.style.filter = "brightness(1)";
});


startgamebtn.addEventListener("click", onStartClick);
optionsbtn.addEventListener("click", () => switchScreen(titlescreen, optionsscreen));
creditsbtn.addEventListener("click", () => switchScreen(titlescreen, creditsscreen));
creditsbackbtn.addEventListener("click", () => switchScreen(creditsscreen, titlescreen));
optionsbackbtn.addEventListener("click", () => switchScreen(optionsscreen, titlescreen));

function onStartClick(){
    console.log("Start Game Button was Clicked");
}

function onOptionsClick(){
    console.log("Options Button was Clicked");
}  

function switchScreen(fromScreen, toScreen){
    console.log(`Switching from "${fromScreen.id}" to "${toScreen.id}"`);

    // disable clicks during animation
    fromScreen.style.pointerEvents = "none";
    toScreen.style.pointerEvents = "none";

    // Start snap-out animation
    fromScreen.classList.add("snap-out");

    fromScreen.addEventListener("animationend", () => {
        fromScreen.style.display = "none";  // hide old screen

        // show next screen first
        toScreen.style.display = "flex";
        toScreen.classList.remove("snap-in", "snap-out");
        toScreen.classList.add("snap-in");

        toScreen.addEventListener("animationend", () => {
            toScreen.classList.remove("snap-in");
            fromScreen.style.pointerEvents = "auto";
            toScreen.style.pointerEvents = "auto";
        }, {once: true});

    }, {once: true});
}
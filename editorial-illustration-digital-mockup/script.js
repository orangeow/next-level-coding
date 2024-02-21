
let quarter = document.getElementById("quarter");
let canvas = document.getElementById("canvas");
let background = document.getElementById("background1");
let cloud1 = document.getElementById("cloud1");
let cloud2 = document.getElementById("cloud2");
let cloud3 = document.getElementById("cloud3");
let cloud4 = document.getElementById("cloud4");
let birds = document.getElementById("birds");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let bird3 = document.getElementById("bird3");
let bird4 = document.getElementById("bird4");
let birdPair = document.getElementById("bird-pair");

function map(value, min1, max1, min2, max2){
    return min2 + (max2 - min2)*(value - min1) / (max1 - min1);
}

let random1 = Math.random()*50;
let random2 = Math.random()*50;
let random3 = Math.random()*50;
let random4 = Math.random()*50;
let random5 = Math.random()*50;

let randomSigns = [1,1,1,1,1];

for(let i=0;i<randomSigns.length;i++){
    if(Math.random()<0.5){
        randomSigns[i] = 1;
    } else{
        randomSigns[i] = 0 - 1;
    }
}

document.body.onscroll = function(e){

    cloud1.style.left = map(window.scrollY, 0, 200, 0, 70) - 50 + "%";
    cloud2.style.left = map(window.scrollY, 0, 200, 0, 35) - 80 + "%"
    cloud3.style.left = map(window.scrollY, 0, 200, 0, 40) - 57 + "%";
    cloud4.style.left = map(window.scrollY, 0, 200, 0, 30) - 100 + "%"
    cloud1.style.opacity = window.scrollY / 2 + "%";
    cloud2.style.opacity = window.scrollY / 2 + "%";
    cloud3.style.opacity = window.scrollY / 2 + "%";
    cloud4.style.opacity = window.scrollY / 2 + "%";

    for(let i=0;i<random1;i++){
        bird1.style.left = randomSigns[1] * map(window.scrollY, 100, 200, 0, i) + "px";
    }
    for(let i=0;i<random2;i++){
        bird2.style.left = randomSigns[2] * map(window.scrollY, 100, 200, 0, i) + "px";
    }
    for(let i=0;i<random3;i++){
        bird3.style.left = randomSigns[3] * map(window.scrollY, 100, 200, 0, i) + "px";
    }
    for(let i=0;i<random4;i++){
        bird4.style.left = randomSigns[4] * map(window.scrollY, 100, 200, 0, i) + "px";
    }
    for(let i=0;i<random5;i++){
        birdPair.style.left = randomSigns[5] * map(window.scrollY, 100, 200, 0, i) + "px";
    }

    if (window.scrollY > 100){
        birds.style.top = 63 - map(window.scrollY, 100, 200, 0, 30) + "%";
    } else{
        birds.style.top = "65%";
    }

    if(window.scrollY < 215){
        quarter.style.top = 45 - (window.scrollY / 6) + "%";
        background.style.opacity = 100 - (window.scrollY / 2.5) + "%";
    
        if(window.scrollY > 100){
            quarter.style.filter = "drop-shadow(0 0 " + map(window.scrollY, 100, 200, 0.5, 3) + "rem rgb(255, 236, 142))";
        } 

    }
}

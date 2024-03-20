let title = document.getElementById("title");
let today = new Date();
let thisDay = today.getDate();
let hairColors = ["#F6C00F","#CF4614","#070302", "#361806"];
let path = document.getElementById("typepath");
let titleContainer = document.getElementById("title-container");

let userGrowth = document.getElementById("hair-growth");
let userCut = document.getElementById("cut");
let userCurly = document.getElementById("curly");
let userStraight = document.getElementById("straight");

let randomColor = Math.floor(Math.random() * hairColors.length);

function map(value, min1, max1, min2, max2){
    return min2 + (max2 - min2)*(value - min1) / (max1 - min1);
}

let letters = document.getElementsByClassName("letter");
// let redOrBlack = Math.random();

// for(let letter of letters){
//     if(redOrBlack >= 0.5){
//         letter.style.filter = "grayscale(100%)";
//     }
//     if(redOrBlack<=0.5){
//         letter.style.filter = "grayscale(0%)";
//     }
// }

let capH = document.getElementById("cap-H");
let Hparts = document.getElementById("Hparts");
// let Hparts = document.getElementsByClassName("H-part");

let HPartsLeftStraight = ["<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-3.png'>",
    "<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-10.png'>", 
    "<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-12.png'>",
    "<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-6.png'>",
    "<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-5.png'>",
    "<img class='letter-part H-part' src='straight-H/left-vertical/Straight_Capital_H-4.png'>"];

let HPartsRightStraight = ["<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-2.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-11.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-7.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-8.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-9.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-22.png'>",
"<img class='letter-part H-part' src='straight-H/right-vertical/Straight_Capital_H-23.png'>"];
    
let HPartsCenterStraight = ["<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-13.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-14.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-15.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-16.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-17.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-18.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-19.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-20.png'>",
"<img class='letter-part H-part' src='straight-H/horizontal/Straight_Capital_H-21.png'>"];

let firsti = document.getElementById("first-i");
let iparts1 = document.getElementsByClassName("i-part-1");

let iPartsStemStraight = ["<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-3.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-4.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-5.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-6.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-7.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-8.png'>",
"<img class='letter-part i-part-1' src='straight-i/short-stem/Straight_I-9.png'>"];

let iPartsJotStraight = ["<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-10.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-11.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-12.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-13.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-14.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-15.png'>",
"<img class='letter-part i-part-1' src='straight-i/jot/Straight_I-16.png'>"];

let firstg = document.getElementById("first-g");

let gPartsBowlStraight = ["<img class='letter-part g-part-1' src='straight-g/bowl/G-1.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-4.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-5.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-9.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-10.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-11.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-12.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-13.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-18.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-19.png'>",
"<img class='letter-part g-part-1' src='straight-g/bowl/G-20.png'>"];

let gPartsTailStraight = ["<img class='letter-part g-part-1' src='straight-g/tail/G-2.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-3.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-6.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-7.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-8.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-14.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-15.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-16.png'>",
"<img class='letter-part g-part-1' src='straight-g/tail/G-17.png'>"];

let firstLowerh = document.getElementById("first-h");

let lowerhStemStraight = ["<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-1.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-4.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-5.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-6.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-7.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-8.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/stem/H_Lower_Straight-9.png'>"];

let lowerhHumpStraight = ["<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-2.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-3.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-10.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-11.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-12.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-13.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-14.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-15.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-16.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-17.png'>",
"<img class='letter-part h-part-1' src='straight-lower-h/hump/H_Lower_Straight-18.png'>"];

let lowerl = document.getElementById("l");

let secondi = document.getElementById("second-i");

let secondg = document.getElementById("second-g");

let secondh = document.getElementById("second-h");

let lowert = document.getElementById("t");

let lowertStemStraight = ["<img class='letter-part t' src='straight-t/t-stem/T_Straight-1.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-2.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-3.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-4.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-5.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-6.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-7.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-8.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-9.png'>",
"<img class='letter-part t' src='straight-t/t-stem/T_Straight-10.png'>"];

let lowertCrossStraight = ["<img class='letter-part t' src='straight-t/crossbar/T_Straight-11.png'>",
"<img class='letter-part t' src='straight-t/crossbar/T_Straight-12.png'>",
"<img class='letter-part t' src='straight-t/crossbar/T_Straight-13.png'>",
"<img class='letter-part t' src='straight-t/crossbar/T_Straight-14.png'>",
"<img class='letter-part t' src='straight-t/crossbar/T_Straight-15.png'>"];

let lowers = document.getElementById("s");

let lowersStraight = ["<img class='letter-part s' src='straight-s/S_Straight-1.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-2.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-3.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-4.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-5.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-6.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-7.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-8.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-9.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-10.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-11.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-12.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-13.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-14.png'>",
"<img class='letter-part s' src='straight-s/S_Straight-15.png'>"];

let capHStraighthairs = [HPartsLeftStraight, HPartsRightStraight, HPartsCenterStraight];
let iStraightHairs = [iPartsStemStraight, iPartsJotStraight];
let gStraightHairs = [gPartsBowlStraight, gPartsTailStraight];
let lowerhStraightHairs = [lowerhStemStraight, lowerhHumpStraight];
let lStraightHairs = [lowerhStemStraight];
let tStraightHairs = [lowertStemStraight, lowertCrossStraight];

let straightHairLetters = [capHStraighthairs, iStraightHairs, gStraightHairs, lowerhStraightHairs, lStraightHairs, tStraightHairs, lowersStraight];

let HPartsLeftCurly = ["<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-1.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-4.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-7.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-8.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-9.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-10.png'>",
"<img class='letter-part H-part' src='curly-cap-h/left-stem/Curly-cap-h-11.png'>"];

let HPartsRightCurly = ["<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-2.png'>",
"<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-5.png'>",
"<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-12.png'>",
"<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-13.png'>",
"<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-14.png'>",
"<img class='letter-part H-part' src='curly-cap-h/right-stem/Curly-cap-h-15.png'>"];

let HPartsCenterCurly = ["<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-3.png'>",
"<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-6.png'>",
"<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-16.png'>",
"<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-17.png'>",
"<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-18.png'>",
"<img class='letter-part H-part' src='curly-cap-h/crossbar/Curly-cap-h-19.png'>"];

let iPartsStemCurly = ["<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-3.png'>",
"<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-4.png'>",
"<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-5.png'>",
"<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-6.png'>",
"<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-7.png'>",
"<img class='letter-part i-part-1' src='curly-i/stem/Curly-i_-8.png'>"];

let iPartsJotCurly = ["<img class='letter-part i-part-1' src='curly-i/jot/Curly-i_-1.png'>",
"<img class='letter-part i-part-1' src='curly-i/jot/Curly-i_-2.png'>",
"<img class='letter-part i-part-1' src='curly-i/jot/Curly-i_-9.png'>",
"<img class='letter-part i-part-1' src='curly-i/jot/Curly-i_-10.png'>"];

let gPartsBowlCurly = ["<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-1.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-2.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-3.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-4.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-5.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-6.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-7.png'>",
"<img class='letter-part g-part-1' src='curly-g/bowl/Curly-g-8.png'>"];

let gPartsTailCurly = ["<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-9.png'>",
"<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-10.png'>",
"<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-11.png'>",
"<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-12.png'>",
"<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-13.png'>",
"<img class='letter-part g-part-1' src='curly-g/tail/Curly-g-14.png'>"];

let lowerhPartsStemCurly = ["<img class='letter-part h-part-1' src='curly-lower-h/stem/Curly-lower-h-1.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/stem/Curly-lower-h-8.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/stem/Curly-lower-h-9.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/stem/Curly-lower-h-10.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/stem/Curly-lower-h-11.png'>"];

let lowerhPartsHumpCurly = ["<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-2.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-3.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-4.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-5.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-6.png'>",
"<img class='letter-part h-part-1' src='curly-lower-h/hump/Curly-lower-h-7.png'>"];

let tStemCurly = ["<img class='letter-part t' src='curly-t/tail/Curly-t-1.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-2.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-3.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-4.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-5.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-6.png'>",
"<img class='letter-part t' src='curly-t/tail/Curly-t-10.png'>"];

let tCrossCurly = ["<img class='letter-part t' src='curly-t/crossbar/Curly-t-7.png'>",
"<img class='letter-part t' src='curly-t/crossbar/Curly-t-8.png'>",
"<img class='letter-part t' src='curly-t/crossbar/Curly-t-9.png'>"];

let sCurly = ["<img class='letter-part s' src='curly-s/Curly-s-1.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-2.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-3.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-4.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-5.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-6.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-7.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-8.png'>",
"<img class='letter-part s' src='curly-s/Curly-s-9.png'>"];

let capHCurlyHairs = [HPartsLeftCurly, HPartsRightCurly, HPartsCenterCurly];
let iCurlyHairs = [iPartsStemCurly, iPartsJotCurly];
let gCurlyHairs = [gPartsBowlCurly, gPartsTailCurly];
let lowerhCurlyHairs = [lowerhPartsStemCurly, lowerhPartsHumpCurly];
let lCurlyHairs = [lowerhPartsStemCurly];
let tCurlyHairs = [tStemCurly, tCrossCurly];

let curlyHairLetters = [capHCurlyHairs, iCurlyHairs, gCurlyHairs, lowerhCurlyHairs, lCurlyHairs, tCurlyHairs, sCurly];

let hairTypes = [straightHairLetters, curlyHairLetters];

let coinFlip = Math.round(Math.random());

////////////things for the generator
//idk why this isn't working, might need to do the function a different way idk
let adjustedDay = userGrowth.value;

function growHair(){
    adjustedDay = userGrowth.value;

    capH.innerHTML = "";
    firsti.innerHTML = "";
    firstg.innerHTML = "";
    firstLowerh.innerHTML = "";
    lowerl.innerHTML = "";
    secondi.innerHTML = "";
    secondg.innerHTML = "";
    secondh.innerHTML = "";
    lowert.innerHTML = "";
    lowers.innerHTML = "";

    for(let i = 0; i<adjustedDay; i++){
        capH.innerHTML += hairTypes[coinFlip][0][0][i%hairTypes[coinFlip][0][0].length];
        capH.innerHTML += hairTypes[coinFlip][0][1][i%hairTypes[coinFlip][0][1].length];
        capH.innerHTML += hairTypes[coinFlip][0][2][i%hairTypes[coinFlip][0][2].length];
    
        firsti.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        firsti.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        firstg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        firstg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        firstLowerh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        firstLowerh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowerl.innerHTML += hairTypes[coinFlip][4][0][i%hairTypes[coinFlip][4][0].length];
    
        secondi.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        secondi.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        secondg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        secondg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        secondh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        secondh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowert.innerHTML += hairTypes[coinFlip][5][0][i%hairTypes[coinFlip][5][0].length];
        lowert.innerHTML += hairTypes[coinFlip][5][1][i%hairTypes[coinFlip][5][1].length];
    
        lowers.innerHTML += hairTypes[coinFlip][6][i%hairTypes[coinFlip][6].length];
    }
    
    let letterParts = document.getElementsByClassName("letter-part");
    
    for(let j = 0; j<letterParts.length; j++){
        letterParts[j].style.transform = "rotate(" + map(Math.random() * 30, 0, 30, -15, 15) + "deg)";
    }
}
//it's not updating when you slide the slider, will deal with this in a minute

function cutHair(){
    adjustedDay = 1;

    capH.innerHTML = "";
    firsti.innerHTML = "";
    firstg.innerHTML = "";
    firstLowerh.innerHTML = "";
    lowerl.innerHTML = "";
    secondi.innerHTML = "";
    secondg.innerHTML = "";
    secondh.innerHTML = "";
    lowert.innerHTML = "";
    lowers.innerHTML = "";

    for(let i = 0; i<adjustedDay; i++){
        capH.innerHTML += hairTypes[coinFlip][0][0][i%hairTypes[coinFlip][0][0].length];
        capH.innerHTML += hairTypes[coinFlip][0][1][i%hairTypes[coinFlip][0][1].length];
        capH.innerHTML += hairTypes[coinFlip][0][2][i%hairTypes[coinFlip][0][2].length];
    
        firsti.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        firsti.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        firstg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        firstg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        firstLowerh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        firstLowerh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowerl.innerHTML += hairTypes[coinFlip][4][0][i%hairTypes[coinFlip][4][0].length];
    
        secondi.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        secondi.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        secondg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        secondg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        secondh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        secondh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowert.innerHTML += hairTypes[coinFlip][5][0][i%hairTypes[coinFlip][5][0].length];
        lowert.innerHTML += hairTypes[coinFlip][5][1][i%hairTypes[coinFlip][5][1].length];
    
        lowers.innerHTML += hairTypes[coinFlip][6][i%hairTypes[coinFlip][6].length];
    }
    
    let letterParts = document.getElementsByClassName("letter-part");
    
    for(let j = 0; j<letterParts.length; j++){
        letterParts[j].style.transform = "rotate(" + map(Math.random() * 30, 0, 30, -15, 15) + "deg)";
    }
}

function makeStraight(){
    coinFlip = 0;
    capH.innerHTML = "";
    firsti.innerHTML = "";
    firstg.innerHTML = "";
    firstLowerh.innerHTML = "";
    lowerl.innerHTML = "";
    secondi.innerHTML = "";
    secondg.innerHTML = "";
    secondh.innerHTML = "";
    lowert.innerHTML = "";
    lowers.innerHTML = "";

    for(let i = 0; i<adjustedDay; i++){
        capH.innerHTML += hairTypes[coinFlip][0][0][i%hairTypes[coinFlip][0][0].length];
        capH.innerHTML += hairTypes[coinFlip][0][1][i%hairTypes[coinFlip][0][1].length];
        capH.innerHTML += hairTypes[coinFlip][0][2][i%hairTypes[coinFlip][0][2].length];
    
        firsti.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        firsti.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        firstg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        firstg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        firstLowerh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        firstLowerh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowerl.innerHTML += hairTypes[coinFlip][4][0][i%hairTypes[coinFlip][4][0].length];
    
        secondi.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        secondi.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        secondg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        secondg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        secondh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        secondh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowert.innerHTML += hairTypes[coinFlip][5][0][i%hairTypes[coinFlip][5][0].length];
        lowert.innerHTML += hairTypes[coinFlip][5][1][i%hairTypes[coinFlip][5][1].length];
    
        lowers.innerHTML += hairTypes[coinFlip][6][i%hairTypes[coinFlip][6].length];
    }
    
    let letterParts = document.getElementsByClassName("letter-part");
    
    for(let j = 0; j<letterParts.length; j++){
        letterParts[j].style.transform = "rotate(" + map(Math.random() * 30, 0, 30, -15, 15) + "deg)";
    }
}

function makeCurly(){
    coinFlip = 1;
    capH.innerHTML = "";
    firsti.innerHTML = "";
    firstg.innerHTML = "";
    firstLowerh.innerHTML = "";
    lowerl.innerHTML = "";
    secondi.innerHTML = "";
    secondg.innerHTML = "";
    secondh.innerHTML = "";
    lowert.innerHTML = "";
    lowers.innerHTML = "";

    for(let i = 0; i<adjustedDay; i++){
        capH.innerHTML += hairTypes[coinFlip][0][0][i%hairTypes[coinFlip][0][0].length];
        capH.innerHTML += hairTypes[coinFlip][0][1][i%hairTypes[coinFlip][0][1].length];
        capH.innerHTML += hairTypes[coinFlip][0][2][i%hairTypes[coinFlip][0][2].length];
    
        firsti.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        firsti.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        firstg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        firstg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        firstLowerh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        firstLowerh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowerl.innerHTML += hairTypes[coinFlip][4][0][i%hairTypes[coinFlip][4][0].length];
    
        secondi.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
        secondi.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];
    
        secondg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
        secondg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];
    
        secondh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
        secondh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];
    
        lowert.innerHTML += hairTypes[coinFlip][5][0][i%hairTypes[coinFlip][5][0].length];
        lowert.innerHTML += hairTypes[coinFlip][5][1][i%hairTypes[coinFlip][5][1].length];
    
        lowers.innerHTML += hairTypes[coinFlip][6][i%hairTypes[coinFlip][6].length];
    }
    
    let letterParts = document.getElementsByClassName("letter-part");
    
    for(let j = 0; j<letterParts.length; j++){
        letterParts[j].style.transform = "rotate(" + map(Math.random() * 30, 0, 30, -15, 15) + "deg)";
    }
}
///none of these functions are working, i think they aren't firing on the input which is annoying, i have to see what I did for my nypl thing

console.log(adjustedDay);

console.log(userGrowth.value);
/////////////////////////////////

for(let i = 0; i<adjustedDay; i++){
    capH.innerHTML += hairTypes[coinFlip][0][0][i%hairTypes[coinFlip][0][0].length];
    capH.innerHTML += hairTypes[coinFlip][0][1][i%hairTypes[coinFlip][0][1].length];
    capH.innerHTML += hairTypes[coinFlip][0][2][i%hairTypes[coinFlip][0][2].length];

    firsti.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
    firsti.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];

    firstg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
    firstg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];

    firstLowerh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
    firstLowerh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];

    lowerl.innerHTML += hairTypes[coinFlip][4][0][i%hairTypes[coinFlip][4][0].length];

    secondi.innerHTML += hairTypes[coinFlip][1][0][i%hairTypes[coinFlip][1][0].length];
    secondi.innerHTML += hairTypes[coinFlip][1][1][i%hairTypes[coinFlip][1][1].length];

    secondg.innerHTML += hairTypes[coinFlip][2][0][i%hairTypes[coinFlip][2][0].length];
    secondg.innerHTML += hairTypes[coinFlip][2][1][i%hairTypes[coinFlip][2][1].length];

    secondh.innerHTML += hairTypes[coinFlip][3][0][i%hairTypes[coinFlip][3][0].length];
    secondh.innerHTML += hairTypes[coinFlip][3][1][i%hairTypes[coinFlip][3][1].length];

    lowert.innerHTML += hairTypes[coinFlip][5][0][i%hairTypes[coinFlip][5][0].length];
    lowert.innerHTML += hairTypes[coinFlip][5][1][i%hairTypes[coinFlip][5][1].length];

    lowers.innerHTML += hairTypes[coinFlip][6][i%hairTypes[coinFlip][6].length];
}

let letterParts = document.getElementsByClassName("letter-part");

for(let j = 0; j<letterParts.length; j++){
    letterParts[j].style.transform = "rotate(" + map(Math.random() * 30, 0, 30, -15, 15) + "deg)";
}

let allParts = document.getElementsByClassName("all-parts");


// let colorFill = document.getElementsByClassName("color");

// for(let color of colorFill){
//     color.style.backgroundColor = hairColors[randomColor];
// }

//this is not going to work the way i want it to. the computer is just going to reset the cutday each time the browser refreshes. I need a way to store a random number for a whole month...

// thisDay = 15;

// title.style.fontSize = map(thisDay, 1, 31, 32, 170) + "pt";
// console.log(title.style.fontSize);

// title.style.fill = hairColors[randomColor];

// let fontWidth = (140 - map(thisDay, 1, 31, 40, 100));
// let fontWeight = (1000 - map(thisDay, 1, 31, 100, 900));

// let fontWidth = (420 - map(thisDay, 1, 31, 20, 400));
// let fontWeight = (900 - map(thisDay, 1, 31, 200, 700));

// title.style.letterSpacing = (4 - map(thisDay, 1, 31, 0.5, 2)) + "rem";
// console.log(title.style.letterSpacing);

// title.setAttribute("startOffset", map(thisDay, 1, 31, 10, 20) + "%");
//i need the start offset to adjust depending on the width, weight, size, and letter spacing.
//i need some kind of equation, maybe a matrix even

// title.style.fontVariationSettings = "'wdth'"+ fontWidth + ", 'wght'"+ fontWeight;

//what do I want to do? I want the computer to basically "reset" the hair length back to short on cut day. 
//so that means I want "thisDay" to be reset back to 100 width, 900 weight, maximum letter spacing, smallest font size (32)


// function hairCut(){

//     console.log("haircut day " + cutDay);
//     console.log("today is " + thisDay);

    // if(thisDay >= cutDay){
        
    //     console.log("adjustedDay is " + adjustedDay);

    //     fontWeight = (900 - map(adjustedDay, 1, 31, 200, 700));
    //     fontWidth = (420 - map(adjustedDay, 1, 31, 20, 400));

    //     title.style.fontSize = map(adjustedDay, 1, 31, 32, 170) + "pt";
    //     title.style.letterSpacing = (4 - map(adjustedDay, 1, 31, 0.5, 2)) + "rem";
    //     title.style.fontVariationSettings = "'wdth'"+ fontWidth + ", 'wght'"+ fontWeight;

    //     title.setAttribute("startOffset", map(adjustedDay, 1, 31, 10, 20) + "%");
    // }
// }

// console.log(title.style.fontVariationSettings);

// hairCut();
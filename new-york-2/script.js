

let wallContainer = document.getElementById("wall-container");

for(let i = 0; i<200;i++){
    wallContainer.innerHTML += "<div class='tile-set'> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div> <div class='tile'></div>";
}

let tileSet = document.getElementsByClassName("tile-set");
let tile = document.getElementsByClassName("tile");

let chip = "<div class='chip'></div>";

let key =  "<div class='key'></div> </div>";

//color palettes
let nycPalette = ['rgb(89, 182, 140)', 'rgb(135, 183, 66)','rgb(241, 219, 59)'];//dark,medium,light
let usaPalette = ['rgb(196, 30, 61)','rgb(223, 90, 33)','rgb(236, 164, 0)'];//dark, medium, light
let worldPalette = ['rgb(25, 57, 109)','rgb(30, 90, 186)','rgb(118, 146, 255)']//dark,medium,light

//questions and answers
let q1Options = document.getElementsByClassName("q1-option");
let q2Options = document.getElementsByClassName("q2-option");
let q3Options = document.getElementsByClassName("q3-option");
let questions = document.getElementsByClassName("question");
let question2 = document.getElementsByClassName("question-2");
let question3 = document.getElementById("question-3");

for(let questions of question2){
    questions.style.display = "none";
}
question3.style.display = "none";
/////
let allCreatedTiles = [];

let allColors = [];
let allPositions = [];
let allQ1Answers = [];
let allQ2Answers = [];
let allQ3Answers = [];
let allChips = [];

////checking cookies

if(checkCookie("positions")){
    console.log("found a cookie!");

    allColors = JSON.parse(getCookie("colors"));
    allPositions = JSON.parse(getCookie("positions"));
    allQ1Answers = JSON.parse(getCookie("q1Answers"));
    allQ2Answers = JSON.parse(getCookie("q2Answers"));
    allQ3Answers = JSON.parse(getCookie("q3Answers"));
    allChips = JSON.parse(getCookie("chips"));

    for(let i=0;i<allPositions.length;i++){//scrolling through the listed positions which will be assigned to elements of the tileSet
        // for(let j=0;j<allColors.length;j++){//scrolling through the color sets stored in the cookie
            for(let k=0;k<9;k++){//scrolling through the colors within each color set
                tileSet[allPositions[i]].children[k].style.backgroundColor = allColors[i][k];//it is replacing the colors of the previous tiles with the last one, need to redo the way these for loops are organized. I think it unforunately matters how they are stacked up
                // console.log(allColors[j][k]);
            }
        // }
    }

    for(let i =0;i<allPositions.length;i++){
        tileSet[allPositions[i]].innerHTML += allChips[i];
        // for(let j=0;j<9;j++){
            // tileSet[allPositions[i]].children[j].style.border = "1px solid " + allChips[i];
        // }
    }
    for(let i = 0;i<tileSet.length;i++){
        tileSet[i].innerHTML += key;
    }
} else{
    console.log("no cookies here")
    for(let i = 0;i<tileSet.length;i++){
        tileSet[i].innerHTML += key;
    }
}

let keys = document.getElementsByClassName("key");

//"From " + q2Answer + "<br>Lives in NYC";

for(let i=0;i<allPositions.length;i++){
    if(allQ1Answers[i] == "nyc"){
        if(allQ3Answers[i] == "Yes"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + "<br>Lives in NYC";
        } else if(allQ3Answers[i] =="No"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + "<br>Visiting NYC";
        }
    } else if (allQ1Answers[i] == "otherUS"){
        if(allQ3Answers[i] == "Yes"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + " of the US<br>Lives in NYC";
        } else if(allQ3Answers[i] =="No"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + " of the US<br>Visiting NYC";
        }
    } else if(allQ1Answers[i] == "international"){
        if(allQ3Answers[i] == "Yes"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + "<br>Lives in NYC";
        } else if(allQ3Answers[i] =="No"){
            keys[allPositions[i]].innerHTML = "From " + allQ2Answers[i] + "<br>Visiting NYC";
        }
    }
}

//adding hovers to keys

for(let i=0;i<tileSet.length;i++){
    if(tileSet[i].children[0].style.backgroundColor != ""){
        keys[i].addEventListener("mouseover",function(){
            keys[i].style.opacity = "70%";
        })
        keys[i].addEventListener("mouseout",function(){
            keys[i].style.opacity = "0";
        })
    }
}

//making the object that is going to get stored
let q1Answer;
let q2Answer;
let q3Answer;
let finalPosition;
let colorSet = [];
// let ;

//open menu
let selectionMenu = document.getElementById("selection-menu");

document.body.addEventListener("mouseover", function(e){
    if(e.clientX > 0.8*(innerWidth)){
        selectionMenu.style.left = "80vw";
    } else {
        selectionMenu.style.left = "100vw";
    }
})

for(let i=0;i<q1Options.length;i++){
    q1Options[i].addEventListener("click", function(){
        q1Options[i].parentElement.parentElement.style.display = "none";
        if(i == 0){
            question2[0].style.display = "flex";
            q1Answer = "nyc";
        } else if (i==1){
            question2[1].style.display = "flex";
            q1Answer = "otherUS";
        } else if (i==2){
            question2[2].style.display = "flex";
            q1Answer = "international";
        }
        console.log(q1Answer);
    });
}

for(let i=0;i<q2Options.length;i++){
    q2Options[i].addEventListener("click", function(){
        q2Options[i].parentElement.parentElement.style.display = "none";
        q2Answer = q2Options[i].innerHTML;

        question3.style.display = "flex";
        console.log(q2Answer);
    });
}

for(let i=0;i<q3Options.length;i++){
    q3Options[i].addEventListener("click", function(){
        q3Answer = q3Options[i].innerHTML;
        console.log(q3Answer);
    });
}

//submitting final tile set and placing on wall

let submitButton = document.getElementById("submit");

function submit(){

    //random position that doesn't already have a tile on it
    let randomTileSet = Math.floor(Math.random()*1000);
    for(let i=0;i<1000;i++){
        if((i == randomTileSet) && (tileSet[i%tileSet.length].children[0].style.backgroundColor == "") && !((randomTileSet%tileSet.length >= 43 && randomTileSet%tileSet.lengtht <= 49) || (randomTileSet%tileSet.length >=63 && randomTileSet%tileSet.length <=69) || (randomTileSet%tileSet.length >=73 && randomTileSet%tileSet.length <= 79))){
            finalPosition = i%tileSet.length;
            console.log(finalPosition);
            break;
        } else if((i == randomTileSet) && (tileSet[i%tileSet.length].children[0].style.backgroundColor != "")){
            randomTileSet = Math.floor(Math.random()*1000);
            continue;
        }
    }

    ///////setting the colors and patterns///////
        if(q1Answer == "nyc"){
            if(q2Answer == "Manhattan"){
                colorSet = [nycPalette[2], nycPalette[1], nycPalette[2], 
                            nycPalette[1], nycPalette[0], nycPalette[1], 
                            nycPalette[2], nycPalette[1], nycPalette[2]];
            } else if (q2Answer == "Brooklyn"){
                colorSet = [nycPalette[2], nycPalette[2], nycPalette[2], 
                            nycPalette[2], nycPalette[1], nycPalette[1], 
                            nycPalette[2], nycPalette[1], nycPalette[0]];
            } else if (q2Answer == "Queens"){
                colorSet = [nycPalette[2], nycPalette[1], nycPalette[1], 
                            nycPalette[2], nycPalette[1], nycPalette[0], 
                            nycPalette[2], nycPalette[1], nycPalette[1]];
            } else if (q2Answer == "Bronx"){
                colorSet = [nycPalette[2], nycPalette[1], nycPalette[0], 
                            nycPalette[2], nycPalette[1], nycPalette[1], 
                            nycPalette[2], nycPalette[2], nycPalette[2]];
            } else if (q2Answer == "Staten Island"){
                colorSet = [nycPalette[2], nycPalette[2], nycPalette[2], 
                            nycPalette[1], nycPalette[1], nycPalette[2], 
                            nycPalette[0], nycPalette[1], nycPalette[2]];
            }
        } else if(q1Answer == "otherUS"){
            if(q2Answer == "West"){
                colorSet = [usaPalette[1], usaPalette[1], usaPalette[2], 
                            usaPalette[0], usaPalette[1], usaPalette[2], 
                            usaPalette[1], usaPalette[1], usaPalette[2]];
            } else if (q2Answer == "Southwest"){
                colorSet = [usaPalette[2], usaPalette[2], usaPalette[2], 
                            usaPalette[1], usaPalette[1], usaPalette[2], 
                            usaPalette[0], usaPalette[1], usaPalette[2]];
            } else if (q2Answer == "Midwest"){
                colorSet = [usaPalette[2], usaPalette[1], usaPalette[2], 
                            usaPalette[1], usaPalette[0], usaPalette[1], 
                            usaPalette[2], usaPalette[1], usaPalette[2]];
            } else if (q2Answer == "Southeast"){
                colorSet = [usaPalette[2], usaPalette[2], usaPalette[2], 
                            usaPalette[2], usaPalette[1], usaPalette[1], 
                            usaPalette[2], usaPalette[1], usaPalette[0]];
            } else if (q2Answer == "Northeast"){
                colorSet = [usaPalette[2], usaPalette[1], usaPalette[0], 
                            usaPalette[2], usaPalette[1], usaPalette[1], 
                            usaPalette[2], usaPalette[2], usaPalette[2]];
            }
        } else if(q1Answer == "international"){
            if(q2Answer == "Africa"){
                colorSet = [worldPalette[2], worldPalette[2], worldPalette[2], 
                            worldPalette[1], worldPalette[1], worldPalette[1], 
                            worldPalette[1], worldPalette[0], worldPalette[1]];
            } else if (q2Answer == "Asia"){
                colorSet = [worldPalette[2], worldPalette[1], worldPalette[1], 
                            worldPalette[2], worldPalette[1], worldPalette[0], 
                            worldPalette[2], worldPalette[1], worldPalette[1]];
            } else if (q2Answer == "Europe"){
                colorSet = [worldPalette[2], worldPalette[1], worldPalette[2], 
                            worldPalette[1], worldPalette[0], worldPalette[1], 
                            worldPalette[2], worldPalette[1], worldPalette[2]];
            } else if (q2Answer == "North America"){
                colorSet = [worldPalette[0], worldPalette[1], worldPalette[2], 
                            worldPalette[1], worldPalette[1], worldPalette[2], 
                            worldPalette[2], worldPalette[2], worldPalette[2]];
            } else if (q2Answer == "Oceania"){
                colorSet = [worldPalette[2], worldPalette[2], worldPalette[2], 
                            worldPalette[2], worldPalette[1], worldPalette[1], 
                            worldPalette[2], worldPalette[1], worldPalette[0]];
            } else if (q2Answer == "South America"){
                colorSet = [worldPalette[2], worldPalette[2], worldPalette[2], 
                            worldPalette[1], worldPalette[1], worldPalette[2], 
                            worldPalette[0], worldPalette[1], worldPalette[2]];
            }
        }

    for(let i = 0; i<9; i++){
        tileSet[finalPosition].children[i].style.backgroundColor = colorSet[i]; 
    }

    //adding chips to people who live in NYC
    if(q3Answer == "Yes"){
        tileSet[finalPosition].innerHTML += chip;
        allChips.push(chip);
    } else if (q3Answer == "No"){
        allChips.push('');
    }

    //adding info to new tile keys
        if(q1Answer == "nyc"){
            if(q3Answer == "Yes"){
                keys[finalPosition].innerHTML = "From " + q2Answer + "<br>Lives in NYC";
            } else if(q3Answer =="No"){
                keys[finalPosition].innerHTML = "From " + q2Answer + "<br>Visiting NYC";
            }
        } else if (q1Answer == "otherUS"){
            if(q3Answer == "Yes"){
                keys[finalPosition].innerHTML = "From " + q2Answer + " of the US<br>Lives in NYC";
            } else if(q3Answer =="No"){
                keys[finalPosition].innerHTML = "From " + q2Answer + " of the US<br>Visiting NYC";
            }
        } else if(q1Answer == "international"){
            if(q3Answer == "Yes"){
                keys[finalPosition].innerHTML = "From " + q2Answer + "<br>Lives in NYC";
            } else if(q3Answer =="No"){
                keys[finalPosition].innerHTML = "From " + q2Answer + "<br>Visiting NYC";
            }
        }



    //  else if (q3Answer == "No"){
    //     groutColor = "white";
    // }

    // for(let i =0;i<9;i++){
    //     tileSet[finalPosition].children[i].style.border = "1px solid " + groutColor;
    // }
    
    allColors.push(colorSet);
    allPositions.push(finalPosition);
    allQ1Answers.push(q1Answer);
    allQ2Answers.push(q2Answer);
    allQ3Answers.push(q3Answer);

    keys = document.getElementsByClassName("key");
    
    for(let i=0;i<allPositions.length;i++){
        keys[allPositions[i]].addEventListener("mouseover",function(){
            keys[allPositions[i]].style.opacity = "70%";
        })
        keys[allPositions[i]].addEventListener("mouseout",function(){
            keys[allPositions[i]].style.opacity = "0";
        })
    }


    setCookie("q1Answers", JSON.stringify(allQ1Answers), 1);
    setCookie("q2Answers", JSON.stringify(allQ2Answers), 1);
    setCookie("q3Answers", JSON.stringify(allQ3Answers), 1);
    setCookie("positions", JSON.stringify(allPositions), 1);
    setCookie("colors", JSON.stringify(allColors), 1);
    setCookie("chips", JSON.stringify(allChips), 1);

    
    //going back to q1
    question3.style.display = "none";
    questions[0].style.display ="flex";

}
submitButton.addEventListener("click", submit);


//cookie functions

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (getCookie(cname) !== '') {
        return true;
    } else {
        return false;
    }
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// deleteAllCookies();
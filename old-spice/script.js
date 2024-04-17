// save your sheet ID and name of the tab as variables for use
let sheetID = "1e4Q0RbFAxNtUQix6zSvSKN4j98N_KVgJFV_rNyX_1R0";
let tabName = 'Sheet1'
//loading in my actual variables
let boats = ["<img class='boat' src='boats-1.png'></img>", "<img class='boat' src='boats-2.png'></img>", "<img class='boat' src='boats-3.png'></img>", "<img class='boat' src='boats-4.png'></img>", "<img class='boat' src='boats-5.png'></img>"];
let titles = ["<img id='title' src='titles-1.png'></img>", "<img id='title' src='titles-2.png'></img>", "<img id='title' src='titles-3.png'></img>", "<img id='title' src='titles-4.png'></img>", "<img id='title' src='titles-5.png'></img>"];
let spiciness = document.getElementById("spiciness");
let freshness = document.getElementById("freshness");
let scentName = document.getElementById("scent");

let actualBoat = document.getElementById("actual-boat");
let boatContainer = document.getElementById("boat-container");
let titleSpot = document.getElementById("old-spice");

//function that fires when slider is used
function generate(){
    
let scentSelector = document.getElementById("scent-selector");
let scentSelection = scentSelector.value;

let stripes = document.getElementsByClassName("stripe");
    
// format them into Ben's uri
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

            scentSelector.setAttribute("max", data.length);

            console.log("scent selected " + scentSelection);
            console.log(data[scentSelection].intensity);

            // freshness.style.opacity = data[scentSelection].freshness * 10 + 20 + "%";
            // spiciness.style.opacity = data[scentSelection].spiciness * 10 + 20 + "%";

            let freshSpiceRatio = data[scentSelection].freshness/data[scentSelection].spiciness + 1;
            let spiceFreshRatio = data[scentSelection].spiciness/data[scentSelection].freshness + 1;

            let realScentScore = 10 + data[scentSelection].freshness - data[scentSelection].spiciness;
            
            console.log("spicy to fresh ratio " + Math.floor(spiceFreshRatio));
            console.log("fresh to spicy ratio " + Math.floor(freshSpiceRatio));

            if(Math.floor(spiceFreshRatio) >=2 && Math.floor(spiceFreshRatio) > Math.floor(freshSpiceRatio)){
                for(let i = 0; i<stripes.length;i++){
                    if(Math.floor(spiceFreshRatio) == 11){
                        stripes[i].style.backgroundColor = "hsl(2, 50%, 55%)";
                    } else if(i%Math.floor(spiceFreshRatio * 1.2) == 0){
                        stripes[i].style.backgroundColor = "#5387c6";
                    } else {
                        stripes[i].style.backgroundColor = "hsl(2, 50%, 55%)";
                    }
                }
            }
            if(Math.floor(freshSpiceRatio) >=2 && Math.floor(freshSpiceRatio) > Math.floor(spiceFreshRatio)){
                for(let i = 0; i<stripes.length;i++){
                    if(Math.floor(freshSpiceRatio) == 11){
                        stripes[i].style.backgroundColor = "#5387c6";
                    } else if(i%Math.floor(freshSpiceRatio * 1.2) == 0){
                        stripes[i].style.backgroundColor = "hsl(2, 50%, 55%)";
                    } else {
                        stripes[i].style.backgroundColor = "#5387c6";
                    }
                }
            }

            if(Math.floor(freshSpiceRatio) == 2){
                for(let i = 0; i<stripes.length; i++){
                    if(i%2 == 0){
                        stripes[i].style.backgroundColor = "#5387c6";
                    } else {
                        stripes[i].style.backgroundColor = "hsl(2, 50%, 55%)";
                    }
                }
            }

            // for(let j = 0; j<stripes.length;j++){
            //     if(data[scentSelection].freshness == j){
            //         for(let i = 0; i<stripes.length;i++){
            //             if(data[scentSelection].freshness == 10){
            //                 stripes[i].style.backgroundColor = "#6b9cc5";
            //             } else if(i%j==0){
            //                 stripes[i].style.backgroundColor = "hsl(11, 58%, 58%)";
            //             } else {
            //                 stripes[i].style.backgroundColor = "#6b9cc5";
            //             }
            //         }
            //     }
            // }

            scentName.innerHTML = data[scentSelection].name;
            let nameLength = scentName.innerHTML.length;

            if(nameLength > 12){
                // scentName.style.fontSize = 20 + "pt";
                scentName.style.top = 380 + "px";
            } else {
                // scentName.style.fontSize = 24 + "pt";
                scentName.style.top = 390 + "px";
            }

            if(data[scentSelection].intensity == 1 || data[scentSelection].intensity == 2){
                actualBoat.innerHTML = boats[0];
                boatContainer.style.top = "-10px";
                boatContainer.style.left = "0px";
            }
            if(data[scentSelection].intensity == 3 || data[scentSelection].intensity == 4){
                actualBoat.innerHTML = boats[1];
                boatContainer.style.top = "-5px";
                boatContainer.style.left = "0px";
            }
            if(data[scentSelection].intensity == 5 || data[scentSelection].intensity == 6){
                actualBoat.innerHTML = boats[2];
                boatContainer.style.top = "10px";
                boatContainer.style.left = "0px";
            }
            if(data[scentSelection].intensity == 7 || data[scentSelection].intensity == 8){
                actualBoat.innerHTML = boats[3];
                boatContainer.style.top = "5px";
                boatContainer.style.left = "0px";
            }
            if(data[scentSelection].intensity == 9 || data[scentSelection].intensity == 10){
                actualBoat.innerHTML = boats[4];
                boatContainer.style.top = "10px";
                boatContainer.style.left = "5px";
            }

            if(data[scentSelection].occasion == 1 || data[scentSelection].occasion == 2){
                titleSpot.innerHTML = titles[0];
            }
            if(data[scentSelection].occasion == 3 || data[scentSelection].occasion == 4){
                titleSpot.innerHTML = titles[1];
            }
            if(data[scentSelection].occasion == 5 || data[scentSelection].occasion == 6){
                titleSpot.innerHTML = titles[2];
            }
            if(data[scentSelection].occasion == 7 || data[scentSelection].occasion == 8){
                titleSpot.innerHTML = titles[3];
            }
            if(data[scentSelection].occasion == 9 || data[scentSelection].occasion == 10){
                titleSpot.innerHTML = titles[4];
            }
				//do something with the data here
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

}

    function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    
freshness.style.opacity = 0;
spiciness.style.opacity = 0;
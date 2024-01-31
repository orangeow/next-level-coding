let foldersLabeled = document.getElementsByClassName("folder-container");

let folderInteriors = document.getElementsByClassName("folder-interior");

let subjects = ["favorite movie", "favorite pattern","favorite color","cat","#1 artist of 2023","favorite TV show","current TV obsession"];

let folderNames = ["untitled_1", "untitled_2", "untitled_3", "work","school","misc","receipts"];

let files = document.getElementsByClassName("file");

let fileContent = ["<img class='image' id='movie' src='zodiac.jpg'> <div class='label'>Zodiac (2007)</div>", "<img class='image' id='pattern' src='plaid.jpg'> <div class='label'>plaid</div>", "<div id='orange'></div><div class='label'>orange</div>", "<img class='image' id='cat' src='dolly.JPG'> <div class='label'>dolly</div>", "<img id='artist' class='image' src='taylor_swift.png'> <div class='label'>t_swift</div>", "<img id='tv-show' class='image' src='succession.jpeg'> <div class='label'>succession</div>","<img id='obsession' class='image' src='survivor.jpeg'> <div class='label'>survivor</div>", "<img class='image' id='quilt' src='quilt.png'> <div class='label'>Amish quilt</div>", "<img class='image' id='boygenius' src='boygenius.png'> <div class='label'>boygenius</div>", "<img class='image' id='graph' src='graph.png'> <div class='label'>graphs</div>", "<img class='image' id='hopper' src='hopper.jpg'> <div class='label'>Ed Hopper</div>", "<img class='image' id='resume' src='document.png'> <div class='label'>resume</div>", "<img class='image' id='transcript' src='document.png'> <div class='label'>transcript</div>", "<img class='image' id='portland' src='portland.jpg'> <div class='label'>portland, or</div>", "<img class='image' id='new-york' src='new_york.jpg'> <div class='label'>new york</div>", "<img class='image' id='cake' src='cake.jpg'> <div class='label'>cake</div>", "<img class='image' id='bread' src='bread.JPG'> <div class='label'>bread</div>", "<img class='image' id='swimming' src='swimming.jpg'> <div class='label'>swimming</div>"];

//toggle clicking for each folder

let folder1 = document.getElementById("folder-1");
let interior1=document.getElementById("interior-1");

let folder2 = document.getElementById("folder-2");
let interior2=document.getElementById("interior-2");

let folder3 = document.getElementById("folder-3");
let interior3=document.getElementById("interior-3");

let folder5 = document.getElementById("folder-4");
let interior5=document.getElementById("interior-4");

let folder6 = document.getElementById("folder-5");
let interior6=document.getElementById("interior-5");

let folder7 = document.getElementById("folder-6");
let interior7=document.getElementById("interior-6");

let folder4 = document.getElementById("folder-7");
let interior4=document.getElementById("interior-7");


folder1.addEventListener("click", function(){
  if(interior1.style.display == "flex"){
    interior1.style.display = "none";
  } else {
    interior1.style.display="flex";
  }
});

folder2.addEventListener("click", function(){
  if(interior2.style.display == "flex"){
    interior2.style.display = "none";
  } else {
    interior2.style.display="flex";
  }
});

folder3.addEventListener("click", function(){
  if(interior3.style.display == "flex"){
    interior3.style.display = "none";
  } else {
    interior3.style.display="flex";
  }
});

folder4.addEventListener("click", function(){
  if(interior4.style.display == "flex"){
    interior4.style.display = "none";
  } else {
    interior4.style.display="flex";
  }
});

folder5.addEventListener("click", function(){
  if(interior5.style.display == "flex"){
    interior5.style.display = "none";
  } else {
    interior5.style.display="flex";
  }
});

folder6.addEventListener("click", function(){
  if(interior6.style.display == "flex"){
    interior6.style.display = "none";
  } else {
    interior6.style.display="flex";
  }
});

folder7.addEventListener("click", function(){
  if(interior7.style.display == "flex"){
    interior7.style.display = "none";
  } else {
    interior7.style.display="flex";
  }
});

//random search challenge
let challenge = document.getElementById("challenge");
let randomChallenge = Math.floor(Math.random()*subjects.length);
challenge.innerHTML = "Find my " + subjects[randomChallenge];
let randomContent = Math.floor(Math.random() * fileContent.length);

//"randomizing" location of file content
for(let i=0;i<files.length;i++){
  files[i].innerHTML = fileContent[(i + randomContent) % fileContent.length];
}

// for(let i=0;i<files.length;i++){
//   //going through each file space
//   let randomContent = Math.floor(Math.random() * fileContent.length);
// //creating a random index to pass into the possible content array
//   for(let j=0;j<files.length;j++){
//     //cycling through current content of each file
//     console.log("current content" + files[j].innerHTML);
//     console.log("random content" + fileContent[randomContent]);
//     console.log(files[j].innerHTML == fileContent[randomContent]);

//     if(files[j].innerHTML == fileContent[randomContent]){
//       randomContent = Math.floor(Math.random()*fileContent.length);
//       console.log("oops had to redraw");
//     } 
//   }
//   files[i].innerHTML = fileContent[randomContent];
// }

let answerMessage = document.getElementById("answer-message");
let answerBox = document.getElementById("answer-box");

//making function to check if answer is correct

function answerChecker(index){
  answerBox.style.display = "flex";
  if(index == randomChallenge){
    answerMessage.innerHTML = "Your answer is correct!";
  } 
  else if(index != randomChallenge){
    answerMessage.innerHTML = "Your answer is wrong :(";
  }
}

//modifying mod function because it doesn't work correctly for negative numbers (found online, but I understand the concept)

function mod(n, m) {
  return ((n % m) + m) % m;
}

for(let i=0; i<files.length; i++){
  files[i].addEventListener("click", function(){
      answerBox.style.display = "flex";
      console.log("selected answer is " + i)
    if(i  == mod((randomChallenge - randomContent), fileContent.length)){
      answerMessage.innerHTML = "Your answer is correct!";
    } 
    else if(i != mod((randomChallenge - randomContent), fileContent.length)){
      answerMessage.innerHTML = "Your answer is wrong :(";
    }
  });
}

//adding window close button on folder interiors

let windowClosers = document.getElementsByClassName("close-window");

for(let i=0; i<windowClosers.length;i++){
  windowClosers[i].addEventListener("click", function(){
      folderInteriors[i].style.display = "none";
  });
}

let answerClose = document.getElementById("answer-close");

answerClose.addEventListener("click", function(){
  answerBox.style.display = "none";
})

// for(let i=0;i<fileContent.length;i++){
//   fileContent.addEventListener("click", function(){
//     console.log(i);
//     console.log(fileContent[i]);
//     if (i == randomChallenge){
//       answerMessage.innerHTML = "Your answer is correct!";
//       answerMessage.style.display = "flex";
//     } else {
//       answerMessage.innerHTML = "Your answer is wrong :(";
//       answerMessage.style.display = "flex";
//     }
//   });
// }



// for(let folders of foldersLabeled){
//   foldersLabeled.onclick = function(){
//   for(i=0;i<foldersInterior.length;i++){
//     inside.style.display = "none";
//   }
//   }
// }
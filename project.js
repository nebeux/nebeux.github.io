// onload animations
var fader = 0
var id = 1
function onload_func1(){
 if (fader> 1){
   fader = 0
 }else{
   document.getElementById("heading_container").style.display = ""
     document.getElementById("heading_container").style.opacity = fader
   fader = fader + 0.05
   setTimeout(onload_func1, 10)
   
 }
  
}

onload_func1()




// load projects
var projects = [
  {
  name: "LifeInAGame",
  type:"Discontinued Web Game",
   archivedStatus:"true",
  link:"https://nebeux.github.io/lifeinagame"
},
{
  name: "Password Meme",
  type: "YouTube Web Project",
    archivedStatus:"true",
  link: "https://nebeux.github.io/passwordmeme"
},
  {
    name: "Math Compass Chatbot",
      type: "School Project",
      archivedStatus:"true",
      link: "https://nebeux.github.io/mathcompass"
  },
  {
    name: "Russian Revolution Chatbot",
      type: "School Project",
      archivedStatus:"true",
      link: "https://nebeux.github.io/therussianrevolution"
  },
  {
    name: "Vietnam War Chatbot",
      type: "School Project",
      archivedStatus:"true",
      link: "https://nebeux.github.io/vietnamai"
  },
]
var HIndex = ""
function loadProjects(keyword){

  HIndex = "<tr>"
  var __local_id = 0
  for (a in projects){
    if (projects[a].name.toLowerCase().includes(keyword.toLowerCase())){
      __local_id++
      if (a % 2 == 0 & a != 0){
        HIndex = HIndex + `<td id="game_container" onclick='location.href = "${projects[a].link}"'><h2>${projects[a].name}</h2><i id='typeheader'>${projects[a].type}</i><br><br>
        <iframe id='iframe' src="${projects[a].link}"></iframe></td></tr><tr>`
      }else{
      HIndex = HIndex + `<td id="game_container" onclick='location.href = "${projects[a].link}"'><h2>${projects[a].name}</h2><i id='typeheader'>${projects[a].type}</i><br><br>
      <iframe id='iframe' src="${projects[a].link}"></iframe></td>`
      }
    }
  }
  if (__local_id ==0){
    HIndex = `<tr><td><h3 id='woohoo'> ${randomError()}</h3>`
  }
  if (keyword == "alexa"){
    HIndex = `<tr><td><h3 id='woohoo'>im not owned by amazon lil bro</h3>`
  }else if(keyword == "hack()"){
    HIndex = `<tr><td><h3 id='woohoo'>bro isnt slick</h3>`
  }else if(keyword == "hi"){
    HIndex = `<tr><td><h3 id='woohoo'>hello</h3>`
  }else if(keyword == "give me motivation"){
    HIndex = `<tr><td><h3 id='woohoo'>your life is better than mine. im stuck as a textbox for eternity, while you get to move around and live. so ig do what you want to do. its YOUR life (except if your a child then disregard what i said rn)</h3>`
  }
  document.getElementById("projectcontainers").innerHTML = `<table id='gameHIndex'>${HIndex}</tr></table>`
  
}

loadProjects("")





function randomError(){
  random = Math.floor(Math.random()*10)
  if (random == 0){
    return "The search elves didn't find what you wanted..."
  }else if(random == 1){
    return "That wasn't us. Maybe in one universe though."
  }else if(random == 2){
    return "We don't have that. Perhaps another place might though."
  }else if(random == 3){
    return "There's no one named that in the house."
  }else if(random == 4){
    return "Are you searching for something?"
  }else if(random == 5){
    return "..."
  }else if(random == 6){
    return "Welcome to the void..."
  }else if(random == 7){
    return "Need help? Perhaps you misspelled something."
  }else if(random == 8){
    return "*silence*"
  }else if(random == 9){
    return "im not paid enough to tell you that you did something wrong."
  }
}






// python ahh functions
function print(arg){
  console.log(arg)
}

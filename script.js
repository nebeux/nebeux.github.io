// onload animations
var fader = 0
var id = 1
function onload_func1(){
 if (fader> 1){
   fader = 0
   onload_func2()
 }else{
   document.getElementById("heading_container").style.display = ""
     document.getElementById("heading_container").style.opacity = fader
   fader = fader + 0.05
   setTimeout(onload_func1, 10)
   
 }
  
}
function onload_func2(){
  console.log("ello")
  if (fader>1){
    fader = 0
    if (id == 5){
      onload_func3()
    }else{
      id++
      setTimeout(onload_func2, 50)
    }
  }else{
    document.getElementById(`h3_span1`).style.display = ""
    document.getElementById(`h3_span2`).style.display = ""
    document.getElementById(`h3_span3`).style.display = ""
    document.getElementById(`h3_span4`).style.display = ""
    document.getElementById(`h3_span5`).style.display = ""
    document.getElementById(`h3_span${id}`).style.opacity = fader;
    fader = fader + 0.05
    setTimeout(onload_func2, 10)
  }
}
function onload_func3(){
  if (fader > 1){
  fader = 0
  }else{
    document.getElementById(`game_container`).style.display = ""
  document.getElementById(`game_container`).style.opacity = fader;
  fader = fader + 0.05
  setTimeout(onload_func3, 10)
  }
}
onload_func1()
// literally.
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

function randomGame(){
  rand = Math.floor(Math.random()*projects.length)
  document.getElementById("gameheader").textContent = projects[rand].name
  document.getElementById("typeheader").textContent = projects[rand].type
  document.getElementById("gotosite").setAttribute("onclick", `location.href = "${projects[rand].link}"`)
document.getElementById('iframe').src = projects[rand].link

}
randomGame()










// python ahh functions
function print(arg){
  console.log(arg)
}

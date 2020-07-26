disintegrate.init()

var triv = [
  "In the main Marvel comics canon, before Groot was made an honorary member of the Guardians of the Galaxy, he was actually a villain.He was originally an extraterrestrial being who came down to Earth to capture and experiment upon humans.",
  "Steve Rodgers (Captain America) has a list in his notebook of cultural events/items that he needs to brush up on to acquaint himself with 21st century. The list change depending on the country where the film was shown. Check out how some of the cultural touchstones vary from place to place in the image below.",
  "When Tony Stark looks through his father Howard’s suitcase in Iron Man 2, you can see a Captain America comic book… as well as a map of the Arctic Circle where Captain America’s plane went down.",
  "In Iron Man 2, when Nick Fury tells Tony Stark that they have bigger problems to worry about in the Southwest, he’s referring to the recent discovery of Thor’s hammer.",
  "The New Mexico town where the first Thor movie was set is named Puente Antiguo, which means “ancient bridge” in Spanish. This is very likely a reference to the Bifrost Bridge, Thor’s connection to Asgard.",
  "The shirt that Dr. Jane Foster (Natalie Portman) hands to Thor belonged to an ex-boyfriend named Donald Blake M.D. In the original comic books, Dr. Blake was Thor’s alter-ego.",
  "When Thor abducts Loki in The Avengers, two ravens fly by during their argument. These ravens are thought to be Huginn and Muninn, who serve as agents of Odin in the Thor comic books.",
  "In The Avengers, after Bruce Banner falls from the sky, the security guard (played by Harry Dean Stanton) asks him nervously if he’s an alien. Which, given the circumstances, is a fair question. But it makes even more sense when you know the full context: Harry Dean Stanton played one of the crew members on the ship in Alien that was killed by the Alien.",
 "J.A.R.V.I.S., the name of Iron Man’s AI assistant is an acronym for- Just a Rather Very Intelligent System.",
 "While Tony Stark is rich, he’s not the richest superhero. That honor goes to Black Panther, who is worth five times as much as Stark.",
 "Although he was one of the founding members of The Avengers, Hulk actually left the group shortly after their first battle (against Loki) in the comics, because he realized that his teammates were afraid of him. He stayed away for fifty years before finally returning."
];

$('.score').hide();
var score=0;
function check(){
  if(score==14){
    var x = Math.floor((Math.random() * 10) + 1);
    trivia = triv[x];
    swal({
      title: ("Your score is "+score),
      text: "Infinity War was an amazing movie, wasn't it?"+'\n \n'+"General Trivia"+"\n \n"+trivia,
      icon: "success",
     
    }).then(()=>{
      location.reload();
    });
  }
}


var doc = document.getElementById("score");

document.getElementById('img8').addEventListener('click', e => {
  check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove();
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img4').addEventListener('click', e => {
  check()
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove()
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img3').addEventListener('click', e => { 
  check()
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove()
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img5').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; 
  }, 650)
})
document.getElementById('img6').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img7').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img9').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img11').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img12').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img14').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img13').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img16').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img17').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img18').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img19').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img20').addEventListener('click', e => { check();
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})



$(".no").click(function(){
  var msg="oops";
  var x = Math.floor((Math.random() * 10) + 1);
  trivia = triv[x];
  if(score>= 0 && score<=3){
    msg="Whaaaaaat? Please watch infinity war again. The score is dissapointing :("
  }
  else if(score > 3 && score<=6){
    msg="You really need to watch Infinity War again & this time pay more attention!"
  }
  else if(score > 6 && score <=9){
    msg="Not Bad, but this movie quiz deserves a better score, Don't you think?"
  }
  else if(score > 9 && score <=12){
    msg="Great! You must score a 15 next time"
  }
  else if(score> 12 && score <15 ){
    msg="Awesomeee! Even though the score is amazing, let's watch infinity war again";
  }
  else if(score==15){
    msg="Thank you for being this awesome! Let's binge watch the whole MCU series together, it would be fun"
  }
  else if(score>15){
    score = Math.floor(score/2);
    msg="Infinity War was an amazing movie, wasn't it?"
  }
  
  swal({
    title: ("Your score is "+score),
    text: msg+'\n \n'+"General Trivia"+"\n \n"+trivia,
    icon: "success",
   
  }).then(()=>{
    location.reload();
  });
}
);



const thanosSnap = function() {
  this.name = 'ThanosSnap'
  this.animationDuration = 1500
  this.size = 3
  this.speedX = Math.random()
  this.speedY = Math.random() * -1
  this.first = true
  this.draw = (ctx, percentComplete) => {
    if (this.first) {
      this.startX += (Math.random() - 0.5) * 10
      this.startY += (Math.random() - 0.5) * 10
      this.first = false
    }
    ctx.beginPath()
    ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
    const r = this.rgbArray[0]
    const g = this.rgbArray[1]
    const b = this.rgbArray[2]
    const a = 1 - percentComplete
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    ctx.fill()
    this.speedX *= 1.07
    this.speedY *= 1.07
    this.size *= 0.95
    this.startX += this.speedX
    this.startY += this.speedY
  }
}

disintegrate.addParticleType(thanosSnap)
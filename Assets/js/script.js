disintegrate.init()

var score=0;

var doc = document.getElementById("score");

document.getElementById('img8').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove();
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img4').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove()
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img3').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
   e.target.remove()
   score++;
 doc.innerHTML = score;
  }, 650)
})

document.getElementById('img5').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; 
  }, 650)
})
document.getElementById('img6').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img7').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img9').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img11').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img12').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img14').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

document.getElementById('img13').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img16').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img17').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img18').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img19').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})
document.getElementById('img20').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  setTimeout(()=>{
    e.target.remove() ; score++;
 doc.innerHTML = score;
  
  }, 650)
})

$(".no").click(function(){
  alert("hi")
  score = 0;
});



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
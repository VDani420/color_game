function makeColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}

console.log(makeColor())
let colors = []
let square_array = document.querySelectorAll('.negyzet')
function init(){
    for(let obj of square_array){
        console.log(obj)
        let color = makeColor()
        obj.style.backgroundColor = color
        colors.push(color)
    }
    let index = Math.floor(Math.random()*6)
    document.getElementById("color").innerHTML = colors[index]
}
function verify(e){
    console.log(e.target.style.backgroundColor)
    let clickedColor = e.target.style.backgroundColor
    if(clickedColor == document.getElementById("color").textContent){
        document.querySelector("h1").style.backgroundColor = clickedColor
    }
}

function ujSzin(){
    colors=[]
    document.querySelector("h1").style.backgroundColor="white"
    for(let obj of square_array){
        let color = makeColor()
        obj.style.backgroundColor = color
        colors.push(color)
    }
    let index = Math.floor(Math.random()*6)
    document.getElementById("color").textContent=colors[index]
    
}
init()

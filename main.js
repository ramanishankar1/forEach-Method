var num=[10,20,30,50,80,70,58,41,54,58,74,100]
console.log(num);
var btn=document.getElementById('btn')
function getNumbers(){
    num.forEach((num,index,arr)=>{
        console.log(num,index,arr)
    })
}
btn.addEventListener("click",getNumbers)

const colors=['red','blue']
const myColor=()=>{
    colors.forEach((color,index)=>{
        document.body.style.backgroundColor=color
        console.log(color,index);
    }) 
}
let getColor=myColor()
console.log(getColor);

    

var rgb = [];
var myDiv=document.getElementById('myDiv')
for(let i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 255));

myDiv.style.backgroundColor = 'rgb('+ rgb.join(',') +')';
myDiv.innerHTML=rgb
const randomColor = ()=>{
	 const hexa= '123456789ABCDEF'
  let random = "#"
		for(let  i=0;i<6;i++){

			random +=  hexa.charAt(Math.floor(Math.random()*15))
		}
		return random
}
let intervalid = '';
const changeColor = ()=>{
 if(!intervalid){
	intervalid =    setInterval(() => {
			 let randomNum = randomColor()
			 document.body.style.backgroundColor = randomNum
		 }, 1000);
	 }
}
document.getElementById('start').addEventListener('click',changeColor)


document.getElementById('end').addEventListener('click',()=>{
	clearInterval(intervalid)
	intervalid =""
})


// 몇 번을 반복해야 (무한루프) 모두가 다 1이면 종료
//1. 1이 찍힐 배열 


let rect = Array(10)

for (let i=0; i<rect.length; i++){
	
	rect[i] = Array(10).fill(0)
	
}

let count=0;
let forecount=0;

for(;;) {
	
	forecount++
let i = parseInt(Math.random()*10)
let j = parseInt(Math.random()*10)


//1이 찍히는 코드 
if(rect[i][j] === 0){
	rect[i][j]=1;
	
	count++;
}

//반복루프를 멈추는 코드 
if(count==100)
 break;
}




console.table(rect)
console.log(forecount)
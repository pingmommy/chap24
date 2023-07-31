

let arr = Array(10)

for(let i =0; i<arr.length;i++){
	arr[i]= parseInt(Math.random()*100)
}

//console.log(arr)

for (let i in arr){ // in 은  배열의 인덱스  
	console.log("arr[%d]:%d",i,arr[i])
	

}

console.log();

for(let v of arr){ // of하면 값이 온다. 
	
	process.stdout.write(v+",")
}
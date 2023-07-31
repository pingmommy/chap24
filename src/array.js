

let arr =[
	[1,2,3,4],
	['A','B','C','D','E']
]


console.table(arr)

let tarr  = Array(10)


for(let i =0; i<tarr.length;i++){
	let a = Array(5)
	a.fill(0)
	tarr[i]=a
}






tarr[2][2]=9

console.table(tarr)

let a1 = [1,2,3]

let a2 = a1;  

a2[1]=10 // 결과값 : [1,10,3]

a2=new Array[1,2,3]
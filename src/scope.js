

// 변수와 스코프의 관계를 확인하는 코드 
let a = 1;
{
	let a = 2
	{
		let a=3
		{
			let a =4
			console.log(a)
		}
			console.log(a)
	}
			console.log(a)
}
			console.log(a)
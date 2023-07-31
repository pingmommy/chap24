 function triangle(test){
	 
	 for(let i =0; i<5; i++){
		 for(let j = 0; j<5;j++){
			 if(test(i,j)){  // ture false를 리턴하는 test 메소드 값에 따라 찍히고 안 찍히고
				 process.stdout.write('*')
			 }else
			 	 process.stdout.write(' ')
		 }
		 console.log()
	 }
 }
 
  console.log("1")
 triangle(function(i,j){  //익명함수 => 자바에서 익명구현객체처럼  - ij를 받아서 참 거짓을 리턴함. 
	return i>=j; 
 }); 
 
  console.log("2")
  triangle(function(i,j){  // 함수호출은 triangle이 한다. 
	return i<=j; 
 });
 
  console.log("3")
 triangle(function(i,j){  // 함수호출은 triangle이 한다. 
	return i+j>=4; 
 }); 
 
 console.log("4")
 triangle(function(i,j){  // 함수호출은 triangle이 한다. 
	return i+j<=4; 
 }); 
 
 console.log("5")
 triangle(function(i,j){  // 함수호출은 triangle이 한다. 
	return i+j ==4||i==j; 
 }); 
 
  console.log("6")
 triangle(function(i,j){  // 함수호출은 triangle이 한다. 
	return i==4||i==0||j==0||j==4; 
 });

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
 triangle((i,j)=> i>=j); 
  console.log("2")
 triangle((i,j)=> i<=j);
  console.log("3") 
 triangle((i,j)=> i+j>4);
  console.log("4") 
 triangle((i,j)=> i+j<4); 
  console.log("5")
 triangle((i,j)=> i==j||i+j==4); 
  console.log("6")
 triangle((i,j)=> i==0||i==4||j==0||j==4); 
 

 
 
  

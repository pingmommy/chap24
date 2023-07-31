package com.example;

public class ScopeExample {

	public static void main(String[] args) {

		int a =1;
		{
			//int a= 2; 자바는 다른 블록 즉 스코프가 달라도 같은 변수명을 쓸 수 없다. 
		}
	}

}

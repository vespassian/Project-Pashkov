/*
 var person =[];
 var i,name,len,age,gender;
 for (i = 0, len = 3; i < len; i++){
 name = prompt ( "ВВедите Имя" );
 age = + prompt ( "ВВедите Возаст" );
 gender = prompt ( "ВВедите Пол" + " м " + "ж" );

 person.push( {
 Name: name,
 Age: age,
 Sex: gender
 }
 );


 };
 var personAge;
 function personAge(a, b) { // По возрасту (возрастание)
 if (a.Age > b.Age)
 return 1;
 else if (b.Age > a.Age)
 return -1;
 else
 return 0;
 }

 person.sort(personAge);
 console.log(person);*/


var a;
var b;
a = + prompt ("Введите число");
a = + prompt ("Введите число");
var sighn;
var resalt;
sighn = prompt ("Введите знак"+ " +"+" -"+ " /" + " *");
function math (){
	if (sighn == "+"){
		return resalt = a + b;
	}
	else if (sighn == "-"){
		return resalt = a - b;
	}
	else if (sighn == "/"){
		return resalt = a / b;
	}
	else if (sighn == "*"){
		return resalt = a * b;
	}

}
math ()
console.log(resalt);

function f() {
	return function(x) {
		return x += ;
	}
}
var z = f();
print z(5);


var map;
map = function (func, arr) {
	var result = []
	for (var i = 0; i < arr.length; i ++) {
		result[i] = func ( arr[i] )
	}
	return result
};
var plus = function(a, b) {
	return a+b;
}

var minus = function(a, b) {
	return a-b;
}
function math (sign){
	if (sighn == "+"){
		return plus
	}
	else if (sighn == "-"){
		return minius
	}

/*var sum = 0;
var sign;
var i = 0;
while (true) {
	
	var value1 = +prompt("Введите число");
    

	sign = prompt("Действие + - / *");
	
	if (sign === 'end') break;
	
	var value2 = +prompt("Введите число");
	

  switch (sign) {
	  case "+":
	  sum = value1 + value2;
	  break;
	  case "-":
	  sum = value1 - value2;
	  break;
	  case "/":
	  sum = value1 / value2;
	  break;
	  case "*":
	  sum = value1 * value2;
	  break;
	
	}
	
	alert( 'Сумма: ' + sum );
}
/*calculator*/
 

/*var cars =[];
var i,car,len,color,V
	for (i = 0, len = 5; i < len; i++){ 
	car = prompt("ВВедите Машину");
	color = prompt("ВВедите цвет");
	V = +prompt("ВВедите oъем");	
		
		cars.push({
			FirmName: car,
			color: color,
			Engine: V
		})
		
	};
	var newCars = cars.filter(function(car) {
		return car.Engine >= 2;
	});
	
	console.log(newCars);*/ // 


var a;
var b;

function sum (a,b) {
	return a * b;
}

console.log(sum(4, 6)); // вернуть функцию







/*var A;
	

var i = 0;

while (i < 5) {
	A = +prompt("ВВедите число");
	if (A <=  60){
	alert (" you is looser");
	break;}
}*/
 
	








/*for ( i; <= 59 ) { 
		A = "you is looser";
	} else if (a >= 59 && a<=  65){
		a = " your ball E";
	} else if (a >= 65 && a<= 74){
		a = "your ball D";
	} else if (a >= 75 && a<=  84){
		a = "your ball C";
	} else if (a >= 85 && a<=  94){
		a = "your ball B";
	} else if (a >= 95 && a<=  100){
		a = "your ball A";
	} else {
		alert ("incorrect");
	}
console.log()
		alert(a);
		
		var car= "BMV";
		switch ( car ){
			case "Mersedes":
			alert ("Greetings");
			break;
			case "BMV":
			alert ("YOU Lucky");
		}
var arr = [1, 45, 456, -65, 10];
for ()*/
//chapter # 21 to 25 
//Task#1

// var frstn = prompt("enter the first name");
// var lstn = prompt("enter the last name");
// var fulln = prompt=firstnam+lastnam;
// document.write ("welcome ! to website" +fulln);

//Task#2

// var user=prompt("Enter your favourite phone model");
// var numchar=phone.length;
// document.write("my favourite mobile is:" + user +"<br>");
// document.write("lenght of string:" + numchar);

//Task#3

//var country = "Pakistan";
//var firstChar = country.indexOf ("n");
 //document.write("<h1>String : " + country + "<br>");
 //document.write("Index of 'n' :" + firstChar + "</h1>");

 //Task#4

// var name="hello world";
// var secondchar = name.lastIndexOf("l")
//document.write("<h3>string : " + name +"<br>");
//document.write("Last Inex of 'l'  : "+ secondchar +"</h3>")



//   Task 5   

// var countName = "Pakistani";
// var characterThree = countName[3];
// document.write("Sting : "+countName+ " <br> Character at Index 3 : " +characterThree);

//   Task 6   


// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = concat(firstName," ",lastName)
// document.write("Welcome  "+fullName);

//   Task 7   

// var cityName1 = "Hyderabad";
// var NewCity  = cityName1.replace("Hyder","Islam");
// document.write("City: "+cityName1+ " <br> After the replacement: "+NewCity);



//   Task 8   


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var NewMessages = message.replace(/and/g,"&");
// document.write(NewMessages);


//   Task 9   


// var value1 = "472";
// var Typevalue1 = typeof value1;
// var value2 = Number(value1);
// var Typevalue2 = typeof value2;
// document.write(`Value: ${value1} <br> Type: ${Typevalue1} <br> Value: ${value2} <br> Type: ${Typevalue2}`);


//   Task 10   


// var userInput = prompt("Enter any word thing to convert into Capital Letter");
// var Uppercase = userInput.toUpperCase();
// document.write("User input "+userInput+" <br> Upper case :"+Uppercase);


//   Task 11   


// var user = prompt("Enter a word to convert into TitleCase");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// var titleCase = toTitleCase(user);
// document.write("User input "+user+" <br> Title case :"+titleCase);


//   Task 12   


// var num = 35.36;
// var stringNew = num.toString().replace(".","");
// document.write("Number : "+num+"<br> Result : "+stringNew);


//   Task 13   


// var stUser = prompt("Please Enter your username");
// for(var i=0;i<stUser.length;i++){
//     if(stUser.charCodeAt(i) == 33 || stUser.charCodeAt(i) == 44 || stUser.charCodeAt(i) == 46 || stUser.charCodeAt(i) == 64){
//         alert("Please Enter a valid username")
//     }
// }



//   Task 14   


// var A =["cake","apple pie","cookie","chips","patties"];
// var userOrder = prompt("Welcome to ABC Bakery. What you want to order sir/madam?");
// var indexOrder = userOrder.toLowerCase();
// var index1 = A.indexOf(indexOrder);
// if(index1 < 0 ){
//     alert("We are sorry,"+userOrder+" is not availabe in our bakery");
// }else{
//     alert(userOrder+" is available at index "+index1+" in our bakery")
// }


//   Task 15   


// function validate(userPassword) { 
// for (let i = 0; i < userPassword.length; i++) {
//     const element = userPassword[i];
//     if(userPassword[0] == 1 || userPassword[0] == 2 ||userPassword[0] == 3 ||userPassword[0] == 4 ||userPassword[0] == 5 ||userPassword[0] == 6 ||userPassword[0] == 7 ||userPassword[0] == 8 ||userPassword[0] == 9){
//         alert("Password can not begin with a number");
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.length <= 6){
//         alert("Password Must be atleast six characters")
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.match(/[a-zA-Z0-9]/g).length < 0){
//         alert("Password should contain number and characher");
//         return;
//     }else{
//         alert("Welcome");
//         return;
//     }
    
// }   
// }

// var userPassword = prompt("Please Enter Your Password");
// validate(userPassword);


//   Task 16   


// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
//     const element = university[i];
//     document.write(element+"<br>");
// }



//   Task 17   


// var userinput = prompt("please enter a word");
// var lastinput = userInput[userInput.length-1];
// document.write(`User inout: ${userinput} <br> Last character of input : ${lastinput}`)


//   Task 18   


// var temp = "The quick brown fox jumps over the lazy dog.";
// var count = (temp.match(/the/g) || []).length;
// document.write(`Text: ${temp} <br> there are ${count} occurrence(s) of word 'the' `)


//Chapter 26-30 
//   Task 1   

// var numberString = prompt("Enter a positive integer number");
// var roundOff = Math.round(numberString);
// var floorNum = Math.floor(numberString);
// var ceirlNum = Math.ceil(numberString);
// document.write(`number: ${numberString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)


//   Task 2 


// var numString = prompt("Enter a negative integer number");
// var roundOff = Math.round(numString);
// var floorNum = Math.floor(numString);
// var ceirlNum = Math.ceil(numString);
// document.write(`number: ${numString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)


//   Task 3 


// var value = -4;
// var absoulteValue = Math.abs(value);
// document.write(`The absolute value of ${value} is ${absoulteValue}`)


//   Task 4   


// document.write(`random dice value: ${Math.floor(Math.random()*(1-6)+6)} <br> random dice value: ${Math.floor(Math.random()*(1-6)+6)}`);


//   Task 5   


// var coin = Math.floor(Math.random() * 2) ;
// if (coin == 0) {
//     document.write(`${coin} <br> random coin value: Heads`);
// } else {
//     document.write(`${coin} <br> random coin value: Tails`);
// }


//   Task 6   


// var num = Math.floor(Math.random() * 100);
// document.write(`radom number between 1 and 100: ${num}`);


//   Task 7   


// var userWeight = prompt("Please enter your weight");
// document.write(`The weight of user is ${parseInt(userWeight)} kilograms`);



//   Task 8


// var userNum = prompt("Enter a number between 1 and 10");
// var secrectNum = Math.floor(Math.random() * 10) + 1;
// if(userNum == secrectNum){
//     alert("Congratulations , You write the right number")
// }else{
//     alert("Try Again!")
// }

//Chapter 26-30 

//   Task 1   


// var currentDateAndTime = new Date();
// document.write(currentDateAndTime);

//   Task 2   


// var date = new Date(); 
// var month = date.toLocaleString('default', { month: 'long' });
// document.write(`Current month: ${month}`);


//   Task 3  


// var date = new Date().toDateString();
// var day= date.slice(0,3);
// document.write(`Today is ${day}`);


//   Task 4   

// var date = new Date().toDateString();
// var day= date.slice(0,3);
// if(day == "Sat" || day == "Sun"){
//     document.write("Its's Fun day");
// }


//   Task 5   


// var date = new Date().getDate();
// if(date < 16){
//     document.write("First Fifteen Days of the months");
// }else{
//     document.write("Last Fifteen Days of the months");

// }

//   Task 6   


// const date = new Date(); 
// const mili = new Date().getTime();
// var min =  mili / 60000;
// document.write(`Current Date: ${date}<br>Elapsed milliseconds since January 1, 1970: ${mili} <br> Elapsed minutes since January 1, 1970: ${min}`)

//   Task 7    


// var hrs = new Date().getHours();
// if(hrs < 12 ){
//     document.write("its AM");
// }else{
//     document.write("its PM");
// }

//   Task 8   


// var laterDate = new Date(2021,0,0)
// document.write(`Later date : ${laterDate}`);


//   Task 9   


// var date1 = new Date().getTime(); 
// var date2 = new Date("06/18/2015").getTime();
// var diff = date1 - date2 ;
// var days = diff / (1000 * 3600 * 24);
// document.write(`${Math.floor(days)} days have been passed since 1st ramdan, 2015`);

//   Task 10   

// var date = new Date("01/01/2015").getTime(); 
// var date1 = new Date("12/05/2015 22:50:16").getTime();
// var diffSec = date1-date2 / (1000);
// document.write(`On reference date ${new Date("12/05/2015 22:50:16")} <br> ${diffSec} seconds had passed since beginning of 2015 `);


//   Task 11   


// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var newDate = new Date(date2 - (3600 *1000));
// document.write(`current date: ${new Date("12/05/2015 23:50:16")} <br> 1 hour ago, it was ${newDate}`)


//   Task 12


// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var date3 = new Date(date2 - (1000*3600*24*365*100));
// document.write(`current date: ${date3("12/05/2015 23:50:16")} <br> 100 years ago, it was ${date3}`)


//Task 13


// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write(`Your Age is ${userAge} <br> Your birth year is ${birthYear}`)


//   Task 14   


// var customerName = "ABC Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)


//Chapter 35-38


//   Task 1   

// function todayDate() {
//     var date = new Date();
//     document.write(date);
// }
// todayDate();


//   Task 2   



// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome Mr/Mrs " + fistName + " "+ lastName);  
// }
// greet();



//   Task 3 

// function sumNum() {
//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     return num1+num2
// }
// sumNum();


// Task 4  


// function calculate(num1,num2,operator) {
//  var result = eval(num1+operator+num2);
//  return result   
// }

//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     var operator =  prompt("Enter the Operator");

// var show = calculate(num1,num2,operator);
// document.write(show);


//   Task 5   


// function convertSquare(num) {
//     var result = Math.pow(num,2)
//     document.write(result)
// }
// convertSquare(5);


//   Task 6    


// function factorialization(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return document.write(num);
//   }
//   factorialization(5);


// Task 7


// function counts(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// counts(1,10);


//   Task 8   



// function calHypotenus(base,perpendicular) {
//     function calSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenus = calSquare(base) + calSquare(perpendicular);
//     return document.write(hypotenus)
// }

// calHypotenus(10,10);



//   Task 9 



// function calcArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calcArea(10,10);

// calcArea(height,width);


// Task 10 


// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var count = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             count = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 count = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a Palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

//  var user = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }


//   Task 11     


// var titlecase = toTitleCase(userInput);
// document.write("Example String "+userInput+" <br> Expected Output :"+titlecase);

//   Task 12    


// function largestWord(string) {
//     var str = string.split(" ");
//     var largest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (largest < str[i].length) {
//             largest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var largest = largestWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+largest);



//   Task 13  


// function Occur(string,word) {
//     var regex = new RegExp(word,"g")
//     var result = (string.match(regex) || []).length;
//     return document.write(result);
// }

// checkOccur("Hellow world is world hellow","o");



// Task 14   



// function  Circum(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function  Area(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// Circum(35);
// Area(35);

//Program1 - Array creation and initialization

let arr=[10,20,30,40,50];
document.write("Array is created and Initialized : ",arr);

//Program2 - Array Manipulation 

let modify=["Sharmila","Renu","Nisha","Boomiya"];
modify.push("Annapoorna");
document.write("Added new Elements in the array using push : ",modify,"<br>");
modify.pop(modify[4]);
document.write("Removed last element from the array using pop : ",modify,"<br>");
modify.shift();
document.write("Removed first element form the array using shift : ",modify,"<br>");
modify.unshift("Sharmila");
document.write("Added the shifted Elements in the array using unshift : ",modify,"<br>");

//Program3 - Array Searching

let srch=[20,20,40,60,80,40,100,60,80,32];
document.write("Finding the index of elements using indexOf : ",srch.indexOf(40),"<br>");
document.write("Finding the index of elements using lastIndexOf : ",srch.lastIndexOf(60),"<br>");
document.write("Finding the index of elements using includes : ",srch.includes(50),"<br>");
document.write("Finding the index of elements using includes : ",srch.includes(100),"<br>");
document.write("Finding the value using find : ",srch.find(num => num>60),"<br>");

//Program4 - Array Filtering

function func(fltr){
    return fltr>50;
}
let fltr=[10,30,50,70,80,60];
document.write("Array before filtering : ",fltr,"<br>");
let res=fltr.filter(func);
document.write("Array after filter : ",res,"<br>");

//Program5 - Array Mapping

let value=[10,20,30,40,50];
let value1=value.map(x => x**2);
document.write("Array elements are squared using map : ",value1,"<br>");

//Program6 - Array Sorting

let arr1=[49,34,92,28,57,10];
document.write("Array using sort in ascending order : ",arr1.sort(),"<br>");
document.write("Array using reverse in descending order : ",arr1.reverse(),"<br>");




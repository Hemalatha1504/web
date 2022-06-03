//creation of Array
const a=["car","bike","bicycle","aircraft","train"];
console.log("Array in Strings:",a);

//Display Using forEach()
a.forEach(display);
function display(txt,index){
    console.log("Array[",index,"]:",txt);
}

//Finding length of an array
console.log("Length of an array is:",a.length);

//Adding values to an array
a.push("bus");
console.log("New array :",a);

//replace value in array
a[3]="aeroplane";
console.log("After replaced:",a);

//Deleting a value
a.pop();
console.log("After deleting:",a);

//deleting specific value (splice)
/*let x=a.indexOf("aeroplane");
console.log(a.pop([x]));
*/
let x=a.indexOf("aeroplane");
const ab=a.splice(x,1);
console.log("After deleting specific value :",a);

//using splice
let res=a.splice(2,0,"bus","aeroplane","truck");
console.log("Splice:",a);

//using slice
console.log("Original Array:",a);
let res1=a.slice(0,2);
console.log("slice:",res1);
//console.log(a);

//merging arrays
const a1=["red","black","gray","white"];
console.log("After merging:",a.concat(a1));

//Sorting arrays
console.log("Sorted values:",a.sort());

//reversing arrays
const ar=a.concat(a1);
const ar1=ar.sort();
console.log("Reversed values:",ar1.reverse());
//creation of array
const a=[45,60,12,3,150,56];
console.log("Array values:",a);

//using shift
console.log("Shift value:",a.shift());
console.log("Shifted values:",a);

//using unshift
let res=a.unshift(45);
console.log("array:",a);

//sorting arrays & reversing arrrays
//const result=a.sort();
a.sort(function(a,b){return a-b});
console.log("Sorted array:",a);
a.reverse(function(a,b){return b-a});
console.log("Reversed array:",a);

//using map
const num=a.map(sum);
/*
function sum(txt,txt1,index){
    return txt1+=txt;
}*/
function sum(txt,index){
    return txt *5;
}
console.log("Using Map:",num);
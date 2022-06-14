function add(text){
    const ul=document.createElement("ul");
    const text1=document.createTextNode(text);
    ul.appendChild(text1);
    const li=document.getElementById("list");
    li.appendChild(ul);
}
function removed(){
    const t1=document.getElementById("list");
    const t3=document.getElementById("t2");
  //  t1.removeChild(text1);
  t1.removeChild(t3);
}
function replace(text2){
    const r1 = document.getElementById("list");
    const r2 = document.getElementById("t4");
    const r3 = document.createElement("li");
    const r4 = document.createTextNode(text2);
    r3.appendChild(r4);
    r1.replaceChild(r3,r2);
}
 function insert(text3){
    const a1 = document.createElement("li");
    const a2 = document.createTextNode(text3);
    a1.appendChild(a2);

    const c1 = document.getElementById("list");
    const c2 = document.getElementById("t1");
    c1.insertBefore(a1,c2);

}
/*Using Labels*/
function add1(){
    const ul=document.createElement("ul");
    const text1=document.createTextNode(input1.value);
    ul.appendChild(text1);
    const li=document.getElementById("list1");
    li.appendChild(ul);
}
function removed1(){
    const t1=document.getElementById("list1");
  //  const t3=document.getElementById(input1.value);
   const t3=document.getElementById("v2");
  t1.removeChild(t3);
}
function replace1(){
    const r1 = document.getElementById("list1");
    const r2 = document.getElementById("v4");
    const r3 = document.createElement("li");
    const r4 = document.createTextNode(input1.value);
    r3.appendChild(r4);
    r1.replaceChild(r3,r2);
}
 function insert1(){
    const a1 = document.createElement("li");
    const a2 = document.createTextNode(input1.value);
    a1.appendChild(a2);

    const c1 = document.getElementById("list1");
    const c2 = document.getElementById("v1");
    c1.insertBefore(a1,c2);

}
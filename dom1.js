var rad=[];
var list=[];
var test=[];
function add1(){
    const ul=document.getElementById("list1");
  //  const ul1=document.getElementById("list2");
    const input=document.getElementById("input1");
    const input1=document.getElementById("input2");
   
   
    const li=document.createElement("li");
    const li1=document.createElement("p");
    
   
    li.setAttribute('id',input.value);
 // li.setAttribute('readonly', 'readonly');
    li1.setAttribute('id',input1.value);
    li.appendChild(document.createTextNode(input.value));
    li1.appendChild(document.createTextNode(input1.value));
    list.push(input.value);
    test.push(input1.value);
    ul.appendChild(li);
    li.appendChild(li1);
    ul.appendChild(li);
      
 console.log(list);
 console.log(test);


    
     /*Delete button*/
     const btn2=document.createElement("button");
     btn2.innerText='Delete';
     btn2.style.width="80px";
     btn2.style.height="30px";
     btn2.style.marginLeft="150px";
     btn2.style.marginTop="-5px";
     btn2.style.backgroundColor="rgb(248,29,29)";
     li.appendChild(btn2);
     btn2.addEventListener('click',()=>{
        ul.removeChild(li);
     }
     );

     

    const radio=document.getElementsByName("input3");
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
         const val=radio[i].value;
         rad.push(val);
         alert("Task is added");
        
         if(val=="work"){li.style.border="3px solid rgb(99, 82, 252)";
         }
         else if (val=="personal"){li.style.border="3px solid rgb(253, 119, 119)"}
         else{li.style.border="3px solid rgb(243, 210, 61)"}
         radio[i].checked=false;
        }
    }
   

    input.value=' ';
    input1.value=' ';
    
   
}






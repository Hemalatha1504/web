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

   
     

      /*Sort button*/
     const btn3=document.createElement("button");
    btn3.innerText='Edit';
    btn3.style.width="80px";
    btn3.style.height="30px";
    btn3.style.marginLeft="200px";
    btn3.style.marginTop="5px";
    btn3.style.backgroundColor="rgb(236, 138, 45)";
    li.appendChild(btn3);
    btn3.addEventListener('click',()=>{
    //  console.log("hello");
    let ans=prompt('Replaceable Task',' ');
 let ans1=prompt('Task Date',' ');
 let ans2=prompt('Category',' ');
  console.log(ans,ans1,ans2);
  const para = document.createElement("li");
  const para1 = document.createElement("p");
  li.setAttribute('id',input.value);
     li1.setAttribute('id',input1.value);
  const node=document.createTextNode(ans);
  const node1=document.createTextNode(ans1);
  const node2 = document.createTextNode(ans2);
  console.log(node2);
  para.appendChild(node);
  para1.appendChild(node1);
  para.appendChild(para1);
  para.appendChild(btn2);
  ul.replaceChild(para,li);
 // ul.replaceChild(para1,li1);
 // para.appendChild(node2);
  if(ans2=="work"){ul.style.border="3px solid rgb(99, 82, 252)";
                ul.style.width="600px";
                ul.style.height="50px";
                ul.style.marginLeft="60px";    
                ul.style.textAlign="center";
               
                }
else if (node2=="personal"){ul.style.border="3px solid rgb(253, 119, 119)"}
else{ul.style.border="3px solid rgb(243, 210, 61)"}
    
  });
   
     /*Delete button*/
     const btn2=document.createElement("button");
     btn2.innerText='Delete';
     btn2.style.width="80px";
     btn2.style.height="30px";
     btn2.style.marginLeft="150px";
     btn2.style.marginTop="5px";
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






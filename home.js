var list=[];
var date=[];
var rad=[];
var red=[];
var ws=[];
var ul,ul1,ul2,ul3;
var val1;
function add(){
    var input1=document.getElementById("input1");
    var res=input1.value;
    
    var input2=document.getElementById("input2");
    var res1=input2.value;

    if (res == ''|| res1 == '') {
        alert('Enter the value');
    }
    else {  
        ul=document.getElementById("list1");
        ul1=document.getElementById("list2");
        ul2=document.getElementById("list3");
        ul3=document.getElementById("list4");
       
    console.log("Category:",rad,"Task",list,"Date",date);
    console.log("object");
    var odbj={category:rad,task:list,date:date};
    console.log(odbj);
    var radio1=document.getElementById('input3');
    var radio2=document.getElementById('input4');
    var radio3=document.getElementById('input5');
    if(radio1.checked==true)
    {
         val1=radio1.value; 
         const st=create(res,res1,val1);
         ul.appendChild(st);
         const st2=create(res,res1,val1);
         ul1.appendChild(st2);
    }
    else if(radio2.checked==true)
    {
        var val2=radio2.value;
        const st=create(res,res1,val2);
        ul.appendChild(st);
        const st3=create(res,res1,val2);
        ul2.appendChild(st3);
    }
    else{
        var val3=radio3.value;
        const st=create(res,res1,val3);
        ul.appendChild(st);
        const st4=create(res,res1,val3);
         ul3.appendChild(st4);
    }
    }
    radio1.checked=false;
    radio2.checked=false;
    radio3.checked=false;
    input1.value=' ';
    input2.value=' ';
}

function create(res,res1,val1){
       var li=document.createElement("li");
       var check1=document.createElement("input");
       check1.type="checkbox";
       check1.style.fontSize="10px";
       check1.style.marginLeft="5px";
       check1.style.marginTop="13px";
   
       var span1=document.createElement("span");
       var span2=document.createElement("span");
       var button1=document.createElement("button");
       var button2=document.createElement("button");
      // var button3=document.createElement("button");
       
       li.style.border= "1px solid black";
       li.style.width="500px";
       li.style.height="40px";
       li.style.textAlign="justify";
       li.style.display="flex";
       li.style.justifyContent= "space-between";
       li.style.border="hidden";
       li.style.boxShadow="2px 5px 8px 8px gray";
       li.style.marginTop="40px";
      
       if(val1=="work")
       {
        li.style.border="2px solid rgb(81,29,202) ";
       }
       else if(val1=="personal")
       {
        li.style.border="2px solid rgb(202,29,29) ";
       }
       else
       {
        li.style.border="2px solid yellow ";
       }
    
       span1.style.marginLeft="5px";
       span1.style.marginTop="10px";
      
       span2.style.marginLeft="10px";
       span2.style.marginTop="10px";
   
       button1.textContent='Edit';
       button1.style.background="rgb(40,114,98)";
       button1.style.padding="3px";
       button1.style.width="80px";
       button1.style.height="40px";
       button1.style.marginLeft="70px";
   
       button2.textContent='Delete';
       button2.style.background="rgb(40,114,98)";
       button2.style.padding="3px";
       button2.style.width="80px";
       button2.style.height="40px";
       button2.style.marginLeft="50px";
   
       
   
       span1.appendChild(document.createTextNode(res));
       span2.appendChild(document.createTextNode(res1));
   
       li.appendChild(check1);
       li.appendChild(span1);
       li.appendChild(span2);
       li.appendChild(button1);
       li.appendChild(button2); 
           
   
       button1.addEventListener('click',(event)=>{
              const ret=val1;
              console.log(ret);
              const first=event.target.parentNode.firstElementChild.nextElementSibling;
              const first1=event.target.parentNode.firstElementChild.nextElementSibling.nextElementSibling;
              const input = document.createElement('input');
              input.type = 'text';
              input.style.width="100px";
              input.style.height="35px";
              input.style.marginLeft="15px";
              input.value = first.textContent;
              const input1 = document.createElement('input');
              input1.type = 'date';
              input1.value = first1.textContent;
              input1.style.marginLeft="15px";
              event.target.parentNode.insertBefore(input, first);
              event.target.parentNode.insertBefore(input1, first1);
        // console.log("hi");
              event.target.parentNode.removeChild(first);
              event.target.parentNode.removeChild(first1);
              //var button3=document.createElement("button");
              button1.textContent = 'save';
              button1.addEventListener('click',()=>{
                console.log(input.value);
              
                console.log(input1.value);
                var et=document.createElement("span");
                var et1=document.createElement("span");
             
               et.textContent=input.value;
               et1.textContent=input1.value;
                console.log(et.textContent);
               console.log(et1.textContent);
            //   event.target.parentNode.innerHTML=`
            //   <input type="checkbox />`;
            //   event.target.parentNode.innerText=input.value;
              // event.target.parentNode.innerText=input1.value;
            //   button1.innerHTML='Edit';
            //   button2.innerHTML='Delete';
             //  event.target.insertBefore(et,input);
              // event.target.parentNode.insertBefore(et1,input1);
               //event.target.removeChild(input);
               //event.target.parentNode.removeChild(input1);
                const lli=event.target.parentNode;
        const lul=lli.parentNode;
     lul.removeChild(lli);
       //  console.log("hi");
                li.appendChild(check1);
                li.appendChild(et);
                li.appendChild(et1);
                li.appendChild(button1);
                li.appendChild(button2);
                lul.appendChild(li);
                 button1.textContent='Edit';
         button1.disabled=true;
     });  
 });
   
       button2.addEventListener('click',function(event){
         const lli=event.target.parentNode;
         const lul=lli.parentNode;
           if(check1.checked)
           {
               
             lul.removeChild(lli);
             
   
           }
           else{
             //  alert("byt");
               var result=confirm("Do you want to delete?");
               if(result==true)
               {
                   lul.removeChild(lli);
                  
                  
               }
           }
       });
   
       check1.addEventListener('change',(event)=>{
           const checkbox=event.target;
           const checked=checkbox.checked;
           const li=checkbox.parentNode.parentNode;
           if(checked){
           span1.style.textDecoration="line-through";
           span2.style.textDecoration="line-through";
           button1.disabled=true;
           alert("You have successfully finished your task");
           }
           else{
               span1.style.textDecoration="none";
               span2.style.textDecoration="none";
               button1.disabled=false;
           }
           });
           return li;
        
   }
  
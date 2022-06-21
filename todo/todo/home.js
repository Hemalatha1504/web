var list=[];
var date=[];
var rad=[];
var red=[];
var ws=[];
var ul,ul1,ul2,ul3;
function arr(list,date,rad){
    let det;
  //  var st1,st2,st3;
   // console.log("lists",list,' ',"date",date,' ',"radio",rad);
    var pos,pos1,poss,poss1,pos2,pos21;
    ul1=document.getElementById("list2");
    ul2=document.getElementById("list3");
    ul3=document.getElementById("list4");

       for(let rf in rad)
       {
        if(rad[rf]=="work")
        {
           // console.log(list[rf]);
            //console.log(date[rf]);
            pos=list[rf];
            pos1=date[rf];
            console.log(pos,pos1);
           
            const st1= create(pos,pos1);
             ul1.appendChild(st1);
        }
        else if(rad[rf]=="personal")
        {
            poss=list[rf];
            poss1=date[rf];
           
            const st2= create(poss,poss1);
             ul2.appendChild(st2);
        }
        else if(rad[rf]=="birthday"){
            pos2=list[rf];
            pos21=date[rf];
            
            const st3= create(pos2,pos21);
             ul3.appendChild(st3);
        }
       }

    }
   
   

function create(res,res1){
    
  
 //  ul1=document.getElementById("list2");
 //  ul2=document.getElementById("list3");
  // ul3=document.getElementById("list4");
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
    var button3=document.createElement("button");
    
    li.style.border= "1px solid black";
    li.style.width="500px";
    li.style.height="40px";
    li.style.textAlign="justify";
    li.style.display="flex";
    li.style.justifyContent= "space-between";
    li.style.border="hidden";
    li.style.boxShadow="2px 5px 8px 8px gray";
    li.style.marginTop="40px";

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
    
   
  //  ul.appendChild(li);
  // ul1.appendChild(li);
  /*  ul2.appendChild(li);
    ul3.appendChild(li);*/
   
   

    button1.addEventListener('click',()=>{
    
    var er=document.createElement("input");
    er.type="text";
    er.placeholder="Enter your input";
    er.style.width="400px";
    er.style.height="40px";
    er.style.textAlign="center";
    er.style.marginLeft="150px";
    er.style.marginTop="-80px";
    var er1=document.createElement("input");
    er1.type="date";
    er1.placeholder="Date";
    er1.style.width="400px";
    er1.style.height="40px";
    er1.style.textAlign="center";
    er1.style.marginLeft="-400px";
    er1.style.marginTop="80px";
    var button3=document.createElement("button");
    button3.textContent='confirm';
    button3.style.background="rgb(40,114,98)";
    button3.style.padding="3px";
    button3.style.width="80px";
    button3.style.height="40px";
    button3.style.marginTop="280px";
    button3.style.marginLeft="-200px";

    button1.style.background="rgba(0,0,0,0.6)";
    button1.style.width="100%";
    button1.style.height="100%";
    button1.style.position="absolute";
    button1.style.top="0px";
    button1.style.left="-70px";
    button1.style.display="flex";
    button1.style.justifyContent="center";
    button1.style.alignItems="center";
    
    //button1.style.border="15px solid rgb(40,114,98)";
   var we=document.createElement("button");
   we.textContent="X";
    we.style.marginTop="-250px";
    we.style.marginLeft="300px";
    we.style.background="rgb(40,114,98)";
  
    button1.appendChild(er);
    button1.appendChild(er1);
    
    button1.appendChild(button3);
    button1.appendChild(we);
 
    });

    button2.addEventListener('click',function(event){
     
        if(check1.checked)
        {
            
           ul.removeChild(li);

        }
        else{
          //  alert("byt");
            var result=confirm("Do you want to delete?");
            if(result==true)
            {
                ul.removeChild(li);
               
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
function add(){
    var input1=document.getElementById("input1");
    var res=input1.value;
    
    var input2=document.getElementById("input2");
    var res1=input2.value;
    
    var radio1=document.getElementById('input3');
    var radio2=document.getElementById('input4');
    var radio3=document.getElementById('input5');
    if(radio1.checked==true)
    {
        var val1=radio1.value; 
        rad.push(val1);      
    }
    else if(radio2.checked==true)
    {
        var val2=radio2.value;
        rad.push(val2);
    }
    else{
        var val3=radio3.value;
        rad.push(val3);
    }
    if (res == ''|| res1 == '') {
        alert('Enter the value');

        res.focus();
    }
    else {
    list.push(res);
    date.push(res1);
    ul=document.getElementById("list1");
    const st=create(res,res1);
    ul.appendChild(st);
    arr(list,date,rad);
    }
    radio1.checked=false;
    radio2.checked=false;
    radio3.checked=false;
    input1.value=' ';
    input2.value=' ';
}
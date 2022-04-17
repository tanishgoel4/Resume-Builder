var entry=document.getElementById("entry");
var course=document.getElementById("course");
var stream=document.getElementById("stream");
var start=document.getElementById("start");
var end=document.getElementById("end");
var qual=document.getElementById("qual");
var container=document.getElementById("container");
var submit=document.getElementById("submit");
var hidden=document.getElementById("hidden");
var nam=document.getElementById("nam");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var output=document.getElementById("output");
var content=document.getElementById("content");
var heading1=document.getElementById("heading1");
var qual_ul=document.getElementById("qual_ul");
var con_email=document.getElementById('con_email');
var con_phone=document.getElementById("con_phone");
var para_value;
var array=[];
var i=0;
entry.addEventListener("click",function(){
    
    var cr_value=course.value;
    var st_value=stream.value;
    var sy_value=start.value;
    var ey_value=end.value;
   

    qual.style.display="none";
    container.style.display="block";
   
    var  div_container=document.createElement("div");
    var para=document.createElement("span");
    para_value=para.innerHTML=`${cr_value} in ${st_value} from ${sy_value}-${ey_value}`;
    var edit=document.createElement("button");
    edit.innerText="edit";
    var del= document.createElement("button");
    del.innerText="delete";

    div_container.appendChild(para);
    div_container.appendChild(edit);
    div_container.appendChild(del);
    
    array[i]=para_value;
   
    console.log(array);
  
    container.appendChild(div_container);
    div_container.setAttribute("class","div_container");
    para.setAttribute("id","qualifications");
    
    edit.addEventListener("click",function(){
        qual.style.display="block";
        array[i++]=para_value;
        console.log(array);
    })
        del.addEventListener("click",function(event){
          
            div_container.remove();
            
           
          
        })

        submit.addEventListener("click",function(){
          var s_name=nam.value;
          var s_email=email.value;
          var s_phone=phone.value;
          
           
          hidden.style.display="none";

          output.style.display="block";

         
          heading1.innerText=s_name;
          var str="";
        //   var qual_li=document.createElement("li");
        //    qual_li.innerHTML=para_value;
       var j=0;
       
       for(j=0;j<array.length;j++)
       {
        str= str +  array[j]+ "<br>";
       }

           qual_ul.innerHTML=str;
        

         
           con_email.innerText=s_email;
           con_email.style.color="blue";

         
           con_phone.innerText=s_phone; 

           




       
        })
   
    

    

  
    
})
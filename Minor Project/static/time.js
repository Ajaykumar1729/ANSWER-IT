const popup=document.querySelector(".center");
const scroll=document.querySelector("body");

window.onload=function(){            
    setTimeout(function(){
        popup.style.display='block';               
    },200)
}
var total=10;
var score={
    'title':0,
    'sec':0,
    'subj':0,
}; 
        
var sec=1;
var hour=min=0;
var ID;
function print()
{
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    sec++;
    if(sec==60)
    {
	    min++;
        sec=0;
	    if(min==60)
	    {
	        hour++;
            sec=0;
            min=0;
	    }  
    } 
}   
        
function start()
{
    popup.style.display='none';
    scroll.style.overflow='visible';
    ID=window.setInterval(print,1000);
}

       
var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;
function myFunction1() {

    q1=document.forms["quizform"]["q1"].value;
    q2=document.forms["quizform"]["q2"].value;
    q3=document.forms["quizform"]["q3"].value;
    q4=document.forms["quizform"]["q4"].value;
    q5=document.forms["quizform"]["q5"].value;
    q6=document.forms["quizform"]["q6"].value;
    q7=document.forms["quizform"]["q7"].value;
    q8=document.forms["quizform"]["q8"].value;
    q9=document.forms["quizform"]["q9"].value;
    q10=document.forms["quizform"]["q10"].value;
    
    for(var i=1;i<=total;i++){
        
        if(eval('q'+i)==null || eval('q'+i)==''){
            alert("You missed Question "+i);
            return false;
        }

    }
    window.scrollTo(0, 0);
    document.getElementById("loader").style.display="block";
    document.getElementById("container").style.display = "none";
    window.clearInterval(ID);
    if(sec>0)
        sec=sec-1;
    else
        sec=0;
    setTimeout(submitAnswers1,3000);
    return false;
}

function submitAnswers1()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block"; 
    const ul=document.querySelector("ul");
    ul.style.display='block';
    
    var ans=['b','b','c','b','a','d','c','b','b','a'];
    for(var i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score['title']++;  
                        
        }
    }

    if (q1==ans[0]){
        document.getElementById("q1b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q1"+q1).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q1b").style.borderColor = "#03C03C";
    }
    
    if (q2==ans[1]){
        document.getElementById("q2b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q2"+q2).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q2b").style.borderColor = "#03C03C";
    }
    if (q3==ans[2]){
        document.getElementById("q3c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q3"+q3).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q3c").style.borderColor = "#03C03C";
    }
    if (q4==ans[3]){
        document.getElementById("q4b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q4"+q4).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q4b").style.borderColor = "#03C03C";
    }
    if (q5==ans[4]){
        document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q5"+q5).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    if (q6==ans[5]){
        document.getElementById("q6d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q6"+q6).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q6d").style.borderColor = "#03C03C";
    }
    if (q7==ans[6]){
        document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q7"+q7).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    if (q8==ans[7]){
        document.getElementById("q8b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q8"+q8).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q8b").style.borderColor = "#03C03C";
    }
    if (q9==ans[8]){
        document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q9"+q9).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    if (q10==ans[9]){
    document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q10"+q10).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    document.getElementById("subt").style.display="none";
    const res=document.querySelector(".res1");
    res.style.display='block';
    min=min+hour*60;
    sec=sec+min*60;
    score['sec']=sec;
    score['subj']=1;
    $.ajax({
    url:"/DSR",
    type: 'POST',
    data: JSON.stringify(score),  // converts js value to JSON string             
    })
    .done(function(result){});   // on success get the return object from server
    // console.log(result)     // do whatever with it. In this case see it in console
    document.getElementById("right").innerHTML=score['title']+"/"+total;
    
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.disabled=true;    
    });
}    

function myFunction2()
{
    q1=document.forms["quizform"]["q1"].value;
    q2=document.forms["quizform"]["q2"].value;
    q3=document.forms["quizform"]["q3"].value;
    q4=document.forms["quizform"]["q4"].value;
    q5=document.forms["quizform"]["q5"].value;
    q6=document.forms["quizform"]["q6"].value;
    q7=document.forms["quizform"]["q7"].value;
    q8=document.forms["quizform"]["q8"].value;
    q9=document.forms["quizform"]["q9"].value;
    q10=document.forms["quizform"]["q10"].value;
    for(var i=1;i<=total;i++)
    {
        
        if(eval('q'+i)==null || eval('q'+i)==''){
            alert("You missed Question "+i);
            return false;
        }

    }
    window.scrollTo(0, 0);
    document.getElementById("loader").style.display="block";
    document.getElementById("container").style.display = "none";
    window.clearInterval(ID);
    if(sec>0)
        sec=sec-1;
    else
        sec=0;
    setTimeout(submitAnswers2,3000);
    return false;
}

function submitAnswers2()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block"; 
    const ul=document.querySelector("ul");
    ul.style.display='block';
    var ans=['d','c','b','c','a','d','c','c','b','c'];
    for(var i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score['title']++;           
        }
    }

    if (q1==ans[0]){
        document.getElementById("q1d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q1"+q1).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q1d").style.borderColor = "#03C03C";
    }
    
    if (q2==ans[1]){
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q2"+q2).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    if (q3==ans[2]){
    document.getElementById("q3b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q3"+q3).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q3b").style.borderColor = "#03C03C";
    }
    if (q4==ans[3]){
    document.getElementById("q4c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q4"+q4).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q4c").style.borderColor = "#03C03C";
    }
    if (q5==ans[4]){
    document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    else{
    document.getElementById("q5"+q5).style.borderColor = "rgb(255, 15, 15)";
    document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    if (q6==ans[5]){
    document.getElementById("q6d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q6"+q6).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q6d").style.borderColor = "#03C03C";
    }
    if (q7==ans[6]){
    document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q7"+q7).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    if (q8==ans[7]){
    document.getElementById("q8c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q8"+q8).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q8c").style.borderColor = "#03C03C";
    }
    if (q9==ans[8]){
    document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q9"+q9).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    if (q10==ans[9]){
    document.getElementById("q10c").style.borderColor = "#03C03C";
    }
    else{
            document.getElementById("q10"+q10).style.borderColor = "rgb(255, 15, 15)";
            document.getElementById("q10c").style.borderColor = "#03C03C";
    }
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    document.getElementById("subt").style.display="none";
    const res=document.querySelector(".res1");
    res.style.display='block';
    min=min+hour*60;
    sec=sec+min*60;
    score['sec']=sec;
    score['subj']=2;
    $.ajax({
    url:"/DSR",
    type: 'POST',
    data: JSON.stringify(score),  // converts js value to JSON string             
    })
    .done(function(result){});   // on success get the return object from server
    // console.log(result)     // do whatever with it. In this case see it in console
    document.getElementById("right").innerHTML=score['title']+"/"+total;
    
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.disabled=true;    
    });            
    
}
function myFunction3()
{
    q1=document.forms["quizform"]["q1"].value;
    q2=document.forms["quizform"]["q2"].value;
    q3=document.forms["quizform"]["q3"].value;
    q4=document.forms["quizform"]["q4"].value;
    q5=document.forms["quizform"]["q5"].value;
    q6=document.forms["quizform"]["q6"].value;
    q7=document.forms["quizform"]["q7"].value;
    q8=document.forms["quizform"]["q8"].value;
    q9=document.forms["quizform"]["q9"].value;
    q10=document.forms["quizform"]["q10"].value;
    for(var i=1;i<=total;i++){
            
            if(eval('q'+i)==null || eval('q'+i)==''){
                alert("You missed Question "+i);
                return false;
            }

    }
    window.scrollTo(0, 0);
    document.getElementById("loader").style.display="block";
    document.getElementById("container").style.display = "none";
    window.clearInterval(ID);
    if(sec>0)
        sec=sec-1;
    else
        sec=0;
    setTimeout(submitAnswers3,3000);
    return false;
}

function submitAnswers3()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block"; 
    const ul=document.querySelector("ul");
    ul.style.display='block';

    var ans=['c','c','a','d','c','b','a','d','b','a'];

    for(var i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score['title']++;  
                        
        }
    }
    if(q1==ans[0]){
        document.getElementById("q1c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q1"+q1).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q1c").style.borderColor = "#03C03C";
    }
    
    if (q2==ans[1]){
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    else{
    document.getElementById("q2"+q2).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    if (q3==ans[2]){
    document.getElementById("q3a").style.borderColor = "#03C03C";
    }
    else{
    document.getElementById("q3"+q3).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q3a").style.borderColor = "#03C03C";
    }
    if (q4==ans[3]){
    document.getElementById("q4d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q4"+q4).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q4d").style.borderColor = "#03C03C";
    }
    if (q5==ans[4]){
    document.getElementById("q5c").style.borderColor = "#03C03C";
    }
    else{
    document.getElementById("q5"+q5).style.borderColor = "rgb(255, 15, 15)";
    document.getElementById("q5c").style.borderColor = "#03C03C";
    }
    if (q6==ans[5]){
    document.getElementById("q6b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q6"+q6).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q6b").style.borderColor = "#03C03C";
    }
    if (q7==ans[6]){
    document.getElementById("q7a").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q7"+q7).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q7a").style.borderColor = "#03C03C";
    }
    if (q8==ans[7]){
    document.getElementById("q8d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q8"+q8).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q8d").style.borderColor = "#03C03C";
    }
    if (q9==ans[8]){
    document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q9"+q9).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q9b").style.borderColor = "#03C03C";
    }
    if (q10==ans[9]){
    document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    else{
            document.getElementById("q10"+q10).style.borderColor = "rgb(255, 15, 15)";
            document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    document.getElementById("subt").style.display="none";
    const res=document.querySelector(".res1");
    res.style.display='block';
    min=min+hour*60;
    sec=sec+min*60;
    score['sec']=sec;
    score['subj']=3;
    $.ajax({
    url:"/DSR",
    type: 'POST',
    data: JSON.stringify(score),  // converts js value to JSON string             
    })
    .done(function(result){});   // on success get the return object from server
    // console.log(result)     // do whatever with it. In this case see it in console
    document.getElementById("right").innerHTML=score['title']+"/"+total;
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.disabled=true;    
    });            
    
}

function myFunction4()
{
    q1=document.forms["quizform"]["q1"].value;
    q2=document.forms["quizform"]["q2"].value;
    q3=document.forms["quizform"]["q3"].value;
    q4=document.forms["quizform"]["q4"].value;
    q5=document.forms["quizform"]["q5"].value;
    q6=document.forms["quizform"]["q6"].value;
    q7=document.forms["quizform"]["q7"].value;
    q8=document.forms["quizform"]["q8"].value;
    q9=document.forms["quizform"]["q9"].value;
    q10=document.forms["quizform"]["q10"].value;
    for(var i=1;i<=total;i++){
            
            if(eval('q'+i)==null || eval('q'+i)==''){
                alert("You missed Question "+i);
                return false;
            }

    }
    window.scrollTo(0, 0);
    document.getElementById("loader").style.display="block";
    document.getElementById("container").style.display = "none";
    window.clearInterval(ID);
    if(sec>0)
        sec=sec-1;
    else
        sec=0;
    setTimeout(submitAnswers4,3000);
    return false;
}

function submitAnswers4()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block"; 
    const ul=document.querySelector("ul");
    ul.style.display='block';

    var ans=['a','c','d','b','a','c','b','b','d','a'];

    for(var i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score['title']++;  
                        
        }
    }

    if (q1==ans[0]){
        document.getElementById("q1a").style.borderColor = "#03C03C";
        
    }
    else{
        document.getElementById("q1"+q1).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q1a").style.borderColor = "#03C03C";
    }
    if (q2==ans[1]){
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q2"+q2).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    if (q3==ans[2]){
    document.getElementById("q3d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q3"+q3).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q3d").style.borderColor = "#03C03C";
    }
    if (q4==ans[3]){
    document.getElementById("q4b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q4"+q4).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q4b").style.borderColor = "#03C03C";
    }
    if (q5==ans[4]){
    document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    else{
    document.getElementById("q5"+q5).style.borderColor = "rgb(255, 15, 15)";
    document.getElementById("q5a").style.borderColor = "#03C03C";
    }
    if (q6==ans[5]){
    document.getElementById("q6c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q6"+q6).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q6c").style.borderColor = "#03C03C";
    }
    if (q7==ans[6]){
    document.getElementById("q7b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q7"+q7).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q7b").style.borderColor = "#03C03C";
    }
    if (q8==ans[7]){
    document.getElementById("q8b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q8"+q8).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q8b").style.borderColor = "#03C03C";
    }
    if (q9==ans[8]){
    document.getElementById("q9d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q9"+q9).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q9d").style.borderColor = "#03C03C";
    }
    if (q10==ans[9]){
    document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    else{
            document.getElementById("q10"+q10).style.borderColor = "rgb(255, 15, 15)";
            document.getElementById("q10a").style.borderColor = "#03C03C";
    }
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    document.getElementById("subt").style.display="none";
    const res=document.querySelector(".res1");
    res.style.display='block';
    min=min+hour*60;
    sec=sec+min*60;
    score['sec']=sec;
    score['subj']=4;
    $.ajax({
    url:"/DSR",
    type: 'POST',
    data: JSON.stringify(score),  // converts js value to JSON string             
    })
    .done(function(result){});   // on success get the return object from server
    //console.log(result)     // do whatever with it. In this case see it in console
    document.getElementById("right").innerHTML=score['title']+"/"+total;
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.disabled=true;    
    });  
}

function myFunction5()
{
    q1=document.forms["quizform"]["q1"].value;
    q2=document.forms["quizform"]["q2"].value;
    q3=document.forms["quizform"]["q3"].value;
    q4=document.forms["quizform"]["q4"].value;
    q5=document.forms["quizform"]["q5"].value;
    q6=document.forms["quizform"]["q6"].value;
    q7=document.forms["quizform"]["q7"].value;
    q8=document.forms["quizform"]["q8"].value;
    q9=document.forms["quizform"]["q9"].value;
    q10=document.forms["quizform"]["q10"].value;
    for(var i=1;i<=total;i++){
            
            if(eval('q'+i)==null || eval('q'+i)==''){
                alert("You missed Question "+i);
                return false;
            }

    }
    window.scrollTo(0, 0);
    document.getElementById("loader").style.display="block";
    document.getElementById("container").style.display = "none";
    window.clearInterval(ID);
    if(sec>0)
        sec=sec-1;
    else
        sec=0;
    setTimeout(submitAnswers5,3000);
    return false;
}

function submitAnswers5()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block"; 
    const ul=document.querySelector("ul");
    ul.style.display='block';

    var ans=['b','c','a','c','d','b','c','c','d','b'];

    for(var i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score['title']++;  
                        
        }
    }

    if (q1==ans[0]){
    document.getElementById("q1b").style.borderColor = "#03C03C";
    
    }
    else{
        document.getElementById("q1"+q1).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q1b").style.borderColor = "#03C03C";
    }
    
    if (q2==ans[1]){
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q2"+q2).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q2c").style.borderColor = "#03C03C";
    }
    if (q3==ans[2]){
        document.getElementById("q3a").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q3"+q3).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q3a").style.borderColor = "#03C03C";
    }
    if (q4==ans[3]){
        document.getElementById("q4c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q4"+q4).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q4c").style.borderColor = "#03C03C";
    }
    if (q5==ans[4]){
        document.getElementById("q5d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q5"+q5).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q5d").style.borderColor = "#03C03C";
    }
    if (q6==ans[5]){
        document.getElementById("q6b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q6"+q6).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q6b").style.borderColor = "#03C03C";
    }
    if (q7==ans[6]){
        document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q7"+q7).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q7c").style.borderColor = "#03C03C";
    }
    if (q8==ans[7]){
        document.getElementById("q8c").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q8"+q8).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q8c").style.borderColor = "#03C03C";
    }
    if (q9==ans[8]){
        document.getElementById("q9d").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q9"+q9).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q9d").style.borderColor = "#03C03C";
    }
    if (q10==ans[9]){
        document.getElementById("q10b").style.borderColor = "#03C03C";
    }
    else{
        document.getElementById("q10"+q10).style.borderColor = "rgb(255, 15, 15)";
        document.getElementById("q10b").style.borderColor = "#03C03C";
    }               
    document.getElementById("pop").innerHTML=hour+" hr:"+min+" min:"+sec+" sec";
    document.getElementById("subt").style.display="none";
    const res=document.querySelector(".res1");
    res.style.display='block';
    min=min+hour*60;
    sec=sec+min*60;
    score['sec']=sec;
    score['subj']=5;
    $.ajax({
    url:"/DSR",
    type: 'POST',
    data: JSON.stringify(score),  // converts js value to JSON string             
    })
    .done(function(result){});   // on success get the return object from server
    // console.log(result)     // do whatever with it. In this case see it in console
    document.getElementById("right").innerHTML=score['title']+"/"+total;
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.disabled=true;    
    });   
}

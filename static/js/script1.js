var x ,y,s,l=0,t=30;


setInterval(myfunction3,1000);


function myfunction3(){
    t=t-1;
    console.log(t);
    document.getElementById("time").innerHTML=t;
    if(t==0 || t<0){
        alert("YOU LOST!!!!Press ok to continue");
        
        myfunction();

    }
}

x=Math.floor(Math.random() * 100) + 1;
y=Math.floor(Math.random() * 100) + 1;
console.log(x,y,x+y)

document.getElementById("a").innerHTML=x;
document.getElementById("b").innerHTML=y;
document.getElementById("c").innerHTML="+";
var m="LEVEL  ";
m=m.concat(l);

document.getElementById("level").innerHTML=m;


function myfunction(){
    console.log('This is my function!!');
    location.reload();
}
function myfunction2(){
    s=document.getElementById("num").value
    console.log(s);
    if(s==x+y){
        t=t+10-l;
        
    l++;
    var m="LEVEL  ";
    m=m.concat(l);
    x=Math.floor(Math.random() * 100) + 1;
    y=Math.floor(Math.random() * 100) + 1;
    document.getElementById("level").innerHTML=m;
    document.getElementById("a").innerHTML=x;
    document.getElementById("b").innerHTML=y;
    document.getElementById("c").innerHTML="+";
    document.getElementById("num").value='';
     
    }
    else{
        alert("wrong answer");
    }
}
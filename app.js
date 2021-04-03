// alert("helloworld"); for a popup message on the web we use alert
// console.log("hello world"); for a log or to see first command in the debugging menu in your web console menu
// document.write("hello world"); to see your output in webpage body


// alert("helloworld");
// console.log("hello world");
// document.write("hello world");

// var  a =  4;
// var  b = ++a + --a
// alert(b);  

var per = prompt("enter your percentage")
if(per>=80 && per < 100){
    alert("A+")
}

else if(per>=70 && per < 80){
    alert("A")
}

else if(per>=60 && per < 70){
    alert("B")
}

else if(per>=50 && per < 60){
    alert("C")
}

else if(per>=40 && per < 50){
    alert("D")
}

else if(per>=33 && per < 50){
    alert("E")
}

else if( per < 1 || per>100 ){
    alert("error")
}

else{
    alert(fail)
}
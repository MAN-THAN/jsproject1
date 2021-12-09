function clock(){
   
    var time = new Date();

    document.getElementById("hours").innerHTML = time.getHours();
    document.getElementById("minutes").innerHTML = time.getMinutes();
    document.getElementById("seconds").innerHTML = time.getSeconds();
    if(time.getHours() > 12){
        document.getElementById("hours").innerHTML = time.getHours() - 12;
    }
    if(time.getHours() == 0){
        document.getElementById("hours").innerHTML = 12;
    }

}
setInterval(clock, 1000);

var z = new Date();
if(z.getHours() >= 12){
    document.getElementById("tup").innerHTML = "PM";
}
else{
    document.getElementById("tup").innerHTML = "AM";
}




function Settime(){
    if(document.getElementById("wakeuptime").value == z.getHours()){
        document.getElementById("txt1").innerHTML= "Let's Have Some Breakfast!!";
        document.getElementById("txt2").style.backgroundImage = "url(./1639021106895.jpg)"
    }
    if(document.getElementById("lunch").value == z.getHours()){
        document.getElementById("txt1").innerHTML= "Let's Have Lunch!!";
        document.getElementById("txt2").style.backgroundImage = "url(./1639021106931.jpg)"
    }
    if(document.getElementById("dinner").value == z.getHours()){
        document.getElementById("txt1").innerHTML= "See You Tomorrow!!";
        document.getElementById("txt2").style.backgroundImage = "url(./1639021106853.jpg)"
    }
    Makediv();

}
function Makediv(){
    var container = document.createElement('div');
    var para = document.createElement('div');
    var par = document.createElement('div');
    container.id = "block";
    para.id = "paragraph";
    par.id = "par2";
    document.getElementById("temp").appendChild(container);
    document.getElementById("temp").appendChild(para);
    document.getElementById("temp").appendChild(par);
    var invalue = document.getElementById("wakeuptime");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("block").innerHTML = "   Wakeuptime :  " + value;
    var tally = document.getElementById("lunch");
    var valu = tally.options[tally.selectedIndex].text;
    document.getElementById("paragraph").innerHTML = "   Lunch-time :  " + valu;
    var tall = document.getElementById("dinner");
    var val = tall.options[tall.selectedIndex].text;
    document.getElementById("par2").innerHTML = "   Dinner-time :  " + val;


}


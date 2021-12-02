var a = Math.floor(Math.random()*(100-1)+1);

var btn = document.getElementById('btn');
var output = document.getElementById('pp2');


var attemp = 10;
attemp++;
attemp--;
var dd = document.getElementById('attemp');

btn.addEventListener('click',function(){
    var input = document.getElementById('input1').value;
    if(input== a){
        output.innerHTML = 'you win';
        document.getElementById('btn').style.display="none";
    }
    else if(input==a && attemp <= 3){
        output.innerHTML='you are a genius '+'you win';
        document.getElementById('btn').style.display="none";
   
    }
    else if(input<a){
        output.innerHTML = 'SMALL';
        attemp--;
        dd.innerHTML = attemp;

    }
    if(input>a){
        output.innerHTML = 'big';
        attemp--;
        dd.innerHTML = attemp;
        
    } if(attemp==0){
        output.innerHTML = 'you lose';
        document.getElementById('btn').style.display="none";
    }
})
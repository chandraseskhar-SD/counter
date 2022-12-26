function substract() {
    var value = document.getElementById('value').innerHTML
    document.getElementById('value').innerHTML=--value
    if(value < 0){
        document.getElementById('value').style.color= 'red'
    }  
}

function add() {
    var value = document.getElementById('value').innerHTML
    document.getElementById('value').innerHTML=++value
    if(value > 0){
        document.getElementById('value').style.color= 'green'
    }
    
}
function reset(){
    
    document.getElementById('value').innerHTML=0;
    document.getElementById('value').style.color='black' 
    
    
}


function generate(){
    var numberBox = document.getElementById('number');
    var output = document.getElementById('output');
    if(Number.isInteger(parseInt(numberBox.value))){
        var string = "(";
        var number = numberBox.value;

        for (i = 1; i <= number; i++) {
            string += Math.floor(Math.random() * 11); 
            if(i != number){
                string += ","
            }else{
                string += ")"
            }
          }
          output.innerHTML = string;
          console.log(string);
    }else{
        alert("Not a number");
    }
}
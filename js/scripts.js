$(document).ready(function(){
  $("form.sentence").submit(function(event){
    event.preventDefault();
    var string = $("#string").val();
    var stringArray = string.split("");
    for (index = 0; index <= stringArray.length-1; index += 1){
      if(stringArray[index]=== "a"||stringArray[index]=== "e"||stringArray[index]=== "i"||stringArray[index]=== "o"||stringArray[index]=== "u"||stringArray[index]=== "A"||stringArray[index]=== "E"||stringArray[index]=== "I"||stringArray[index]=== "O"||stringArray[index]=== "U"
      ){
        stringArray[index] = "-";
      }
    }
    var output = "";
    for (index2 = 0; index2 <= stringArray.length-1; index2 += 1){
      output = output + stringArray[index2];
    }
    $("#output").text(output);
  })
})

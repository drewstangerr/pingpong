var input;
var number= [];

var pp= function (input) {
  if (input> 250) {
    alert("Enter a smaller number, a number <=250")
  } else {
    for (i=0 i<=input; i+1) {
      number.push(i);
    }
  }
}

var pingpong= function (){
  number.map(function(numbers){
    if (numbers===0) {
      $("#result").append("<li>" + "Enjoy:" + "</li>");
    } else if (numbers % 15 === 0){
      $("#result").append("<li>" + "pingpong:" + "</li>");
    } else if (numbers % 5 === 0){
      $("#result").append("<li>" + "pong:" + "</li>");
    } else if (numbers % 3 === 0){
      $("#result").append("<li>" + "ping:" + "</li>");
    } else {
      $("#result").append("<li>" + numbers + "</li>")
    }}
    }
  }
)}

$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    input= parseInt($("input#number").val());
    $("result").empty();
    number= [];
    pp (input);
    pingpong ();

    $('#result').click(function() {
      location.reload();
    });
  });
});

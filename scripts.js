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
      $("#res").append("<li>" + "Enjoy:" + "</li>");
    } else if (numbers % 15 === 0){
      $("#res").append("<li>" + "pingpong:" + "</li>");
    } else if (numbers % 5 === 0){
      $("#res").append("<li>" + "pong:" + "</li>");
    } else if (numbers % 3 === 0){
      $("#res").append("<li>" + "ping:" + "</li>");
    } else {
      $("#res").append("<li>" + numbers + "</li>")
    }}
    }
  }
)}

$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    input= parseInt($("input#number").val());
    $("res").empty();
    number= [];
    pp (input);
    pingpong ();

    $('#res').click(function() {
      location.reload();
    });
  });
});

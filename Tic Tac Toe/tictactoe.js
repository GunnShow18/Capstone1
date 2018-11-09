$(document).ready(function(){

  var move = 0;
  var play = true;

  $("#board tr td").click(function() {
    console.log($(this).text() === "");
    console.log(play);
    if ($(this).text() === "" && play) {
      
      console.log("clicked")
      if ((move%2) === 1) { 
        $(this).append("X"); 
        if (checkForWinner() === "X") {
          alert("Player two is Numero Uno!")
          play = false;
        }
        else if (checkForWinner() === "O") {
          alert("Player one is Numero Uno!")
          play = false;
        }
        else if (move === 9) {
          alert("DRAW!!")
          play = false;
        }
      } 
      else {
         $(this).append("O"); 
         if (checkForWinner() === "X") {
          alert("Player two is Numero Uno!")
          play = false;
        }
        else if (checkForWinner() === "O") {
          alert("Player one is Numero Uno!")
          play = false;
        }
        else if ((move === 9)) {
          alert("DRAW!!")
          play = false;
        }
        }
        move++;
        console.log(move);
        
      } 
    });

    console.log(checkForWinner + "check for winner")
  function checkForWinner() {
    
    var space1 = $("#space1").text();
    var space2 = $("#space2").text();  
    var space3 = $("#space3").text();
    var space4 = $("#space4").text();
    var space5 = $("#space5").text();
    var space6 = $("#space6").text();
    var space7 = $("#space7").text();
    var space8 = $("#space8").text();
    var space9 = $("#space9").text();
    console.log("space1", space1)
    console.log("space2", space2)
    console.log("space3", space3)
    console.log("space4", space4)
    console.log("space5", space5)
    console.log("space6", space6)
    console.log("space7", space7)
    console.log("space8", space8)
    console.log("space9", space9)

    // check columns
    if((space1===space4) && (space4===space7) && (space1 != "")){
      console.log("space1",space1)
      console.log(space4)
      console.log(space7 )
      console.log("same")
      return(space7)
    } 
    if((space2===space5) && (space5===space8) && (space2 != "")){
      console.log("space2",space2)
      console.log(space5)
      console.log(space8 )
      console.log("same")
      return(space8)
    }
    if((space3===space6) && (space6===space9) && (space3 != "")){
      console.log("space3",space3)
      console.log(space6)
      console.log(space9 )
      console.log("same")
      return(space9)
    }
   
    //check rows
    if((space1===space2) && (space2===space3) && (space1 != "")){
      console.log("space1",space1)
      console.log(space2)
      console.log(space3 )
      console.log("same")
      return(space3)
    } 
    if((space4===space5) && (space5===space6) && (space4 != "")){
      console.log("space4",space4)
      console.log(space5)
      console.log(space6 )
      console.log("same")
      return(space6)
    }
    if((space7===space8) && (space8===space9) && (space7 != "")){
      console.log("space7",space7)
      console.log(space8)
      console.log(space9 )
      console.log("same")
      return(space9)
    }

    //check diagonaly
    if((space1===space5) && (space5===space9) && (space1 != "")){
      console.log("space1",space1)
      console.log(space5)
      console.log(space9 )
      console.log("same")
      return(space9)
    }
    if((space3===space5) && (space5===space7) && (space3 != "")){
      console.log("space3",space3)
      console.log(space5)
      console.log(space7 )
      console.log("same")
      return(space7)
    }
    return -1;
  }

});

function refreshPage(){
  if(confirm("Sure you want to restart the game??")){
    location.reload();
  }				
}




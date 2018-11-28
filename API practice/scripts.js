$.ajax({
  url: "https://api.icndb.com/jokes/random/3",

  success: function(data) {
    console.log(data);
    const jokeOne = data.value[0].joke;
    const jokeTwo = data.value[1].joke;
    const jokeThree = data.value[2].joke;
    $("#jokeText").html(jokeOne);
    $("#jokeText2").html(jokeTwo);
    $("#jokeText3").html(jokeThree);
  },
  error: function(request, error) {
    console.log(error);
    console.log(request);
  }
});

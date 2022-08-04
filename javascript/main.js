//if button is clicked
var input=''
document.querySelector(".js-go").addEventListener('click',function(){
  var container = document.querySelector(".js-container");
  container.innerHTML =''
  var input = document.querySelector("input").value;
  input=input.replace(/ /g,"+");
  var url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=HDIwAM6IdsKccj1MjkjnBYemg1DSpCUN`;
  console.log(url)
  // AJAX Request
  var GifAJAXCall = new XMLHttpRequest();
  GifAJAXCall.open( 'GET', url );
  GifAJAXCall.send();
  GifAJAXCall.addEventListener('load',function(e){
      var data = e.target.response;
      pushToDOM(data);
      });
});


// if the key ENTER is pressed
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  container = document.querySelector(".js-container");
  container.innerHTML =''
  input = document.querySelector("input").value;

     if(e.which === 13) {
      input=input.replace(/ /g,"+");
      input=input.replace(/ /g,"+");
      url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=HDIwAM6IdsKccj1MjkjnBYemg1DSpCUN`;
      console.log(url)
      // AJAX Request
      var GifAJAXCall = new XMLHttpRequest();
      GifAJAXCall.open( 'GET', url );
      GifAJAXCall.send();
      GifAJAXCall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data);
        });
      }
});







//Show Gif's
function pushToDOM(input) {
  var response = JSON.parse(input);
  var imageUrls = response.data;
  imageUrls.forEach(function(image){
  var src = image.images.fixed_height.url;
  var container = document.querySelector(".js-container");
  container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}
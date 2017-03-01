function populateImages(){

  // get the images needed as a list
  var imgList = [];
  var count = 1;
  var imageCounter = 1;
  var number_of_images = 10;
  for(var i = 0; i < number_of_images; i++){
    var text = 'url(../img/weddingImg/img_' + i + '.JPG)';
    console.log(text)
    var divImg = $('<div/>',{
      class : 'item',
      id : 'img' + (i)
    }).css('background-image', text);

    $('.long_container').append(divImg);
  }
}
// $('myOjbect').css('background-image', 'url(' + imageUrl + ')');
// $('.imagePreview').css('background-image', 'url(' + imageUrl + ')');


$(document).ready(function(){
  var window_width = $(window).width();
  var main_width = $(".main_container").width();
  var long_container = $(".long_container");
  var item = $(".item");
  var slide_number = 0;

  populateImages();

  long_container.css("width", main_width * 6);
  item.css("width", long_container.width() / 13);

  $(".see_next").click(function(){
    if(slide_number < 10){
      slide_number++;

      if(slide_number == 13){
        $(".see_next").animate({opacity:0});
      } else{
        $(".see_next").animate({opacity:1});
      }

      if(slide_number == 0){
        $(".see_previous").animate({opacity: 0});
      }else{
        $(".see_previous").animate({opacity: 1});
      }

      var item_width = $(".item").width();
      var pixels_moved = item_width * slide_number;

      long_container.animate({
        marginLeft: -pixels_moved
      });
    }
  });

  $(".see_previous").click(function(){
    if(slide_number > 0){
      slide_number--

      if(slide_number == 0){
        $(".see_previous").animate({opacity:0});
      } else{
        $(".see_previous").animate({opacity:1});
      }

      if(slide_number == 13){
        $(".see_next").animate({opacity: 0});
      }else{
        $(".see_next").animate({opacity: 1});
      }

      var item_width = $(".item").width();
      var pixels_moved = item_width * slide_number;

      long_container.animate({
        marginLeft: -pixels_moved
      });
    }
  });

});

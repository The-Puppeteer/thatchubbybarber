var token = '547633796.c2e52e8.6f2ad21b461b4c82987b98673c5410f3',
    num_photos = 33;
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){

          $(document).ready(function(){
      $('.carousel').carousel();
    });
    
            $('ol').append('<a class="carousel-item"><img src="'+data.data[x].images.low_resolution.url+'"></a>');
        }
    },
    error: function(data){
        console.log(data);
    }
});

$( document ).ready(function(){
$('.button-collapse').sideNav({
      closeOnClick: true
    }
  );
});

  $(document).ready(function(){
      $('.parallax').parallax();
    });
   
   $(document).ready(function(){
    $('ul.tabs').tabs();
  });

     $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });




  $(document).ready(function() {
    $('select').material_select();
  });

      $( document ).ready(function() {
      $('select').not('.disabled').material_select();
    });




    

  $('.carousel.carousel-slider').carousel({fullWidth: true});
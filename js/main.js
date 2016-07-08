
$(document).ready(function(){
	map();
    animate_seasons();
    animate_breakfast();
    animate_lunch();
    animate_dessert();
    animate_supper();
    figcaption_animate();
    icon_figcaption_animate();
});

	
	
function map(){	
	var map = new GMaps({
        scrollwheel: false,
	  div: '.mapa',
	  lat: 50.2600674,
	  lng: 19.0127743,
		zoom: 13
	});
    
    map.addMarker({
      lat: 50.2653894,
      lng: 19.0192153,
      title: 'Kafej',
       icon: "https://lh3.googleusercontent.com/-iZr8ayQRBsE/VyM5bokpoFI/AAAAAAAACeM/EASB8HyGXKEjaZars5i3suwyKN6JrwuKQCCo/s34/blue_MarkerK.png",
        
        infoWindow: {
            content:'<div class="marker-place"><p class="marker-title">Kafej, </p><p class="marker-title">ul. Chorzowska 5</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/meringue_cones-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        }
         
        });
    
    map.addMarker({
      lat: 50.2576216,
      lng: 18.9684003,
      title: 'Strefa Centralna',
        
        icon: "https://lh3.googleusercontent.com/-ybpJ1fl9T4s/VyM5bx8dsPI/AAAAAAAACeM/-yoKRp2pQhw15bn8LCGNiDjIdjzDyAaHQCCo/s34/darkgreen_MarkerS.png",

        infoWindow: {
            content: '<div class="marker-place"><p class="marker-title">Strefa Centralna, </p><p class="marker-title">Pl. Sejmu Śląskiego 2</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/salatka-pomidor-mocarella-pexels-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        },
        });
    
    map.addMarker({
      lat: 50.2572527,
      lng: 19.0224143,
      color: 'blue',
      title: 'Złoty Osioł',
        
        icon: "https://lh3.googleusercontent.com/-dJJR5DLEAW8/VyM5cZ5aalI/AAAAAAAACeM/80Q1gOC6MhgNJUR9X9jYcjvfen6cTEEpwCCo/s34/pink_MarkerZ.png",

        infoWindow: {
            content: '<div class="marker-place"><p class="marker-title">Złoty Osioł, </p><p class="marker-title">ul. Mariacka 1</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/croutons_soup-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        },
        });
    
    map.addMarker({
      lat: 50.2553818,
      lng: 19.0165431,
      title: 'Śląska Prażalnia Kawy',
        
        icon: "https://lh3.googleusercontent.com/-ALguO3zjc0E/VyM5c7yH8DI/AAAAAAAACeU/F6gZsxi8rrMpyX05Hjcv6xfdAOD_4HHwgCCo/s34/red_MarkerS.png",

        infoWindow: {
            content: '<div class="marker-place"><p class="marker-title">Śląska Prażalnia Kawy, </p><p class="marker-title">Plac Miarki 1</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/dessert_strawberry-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        },
        });
    
    map.addMarker({
      lat: 50.2540134,
      lng: 19.0207183,
      color: 'blue',
      title: '8 stolików',
        
        icon: "https://lh3.googleusercontent.com/-8x1Lpl6xK9s/V0rnHoQlaKI/AAAAAAAACfI/P2KVFz6VdhE0qLSiEKnrXN4zs5HXDeRuQCCo/s34/orange_MarkerS.png",

        infoWindow: {
            content: '<div class="marker-place"><p class="marker-title">8 Stolików, </p><p class="marker-title">ul. Jagiellońska 21</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/food-healthy-coffee-cup-pexels-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        },
        });
    
    map.addMarker({
      lat: 50.2596966,
      lng: 19.0163681,
      color: 'blue',
      title: 'Kofeina',
        
        icon: "https://lh3.googleusercontent.com/-LQ1PspAhPEQ/VyM5cQvqFjI/AAAAAAAACeU/Fv5Hpk2xipAlmP9T86yoDa8fCtrEpP-PACCo/s34/purple_MarkerK.png",

        infoWindow: {
            content: '<div class="marker-place"><p class="marker-title">Kofeina, </p><p class="marker-title">ul. 3 Maja 13</p><div class="marker-img"><figure><img class="img-responsive" src="image/min/haMburger-pexels-photo-min.jpg"></figure></div></div>'
        },
        oclick: function(){
            (this.infoWindow).open(this.map, this);
        }
        });
}

function animate_seasons() {
    
    $('.four-seasons-figcaption').on('click', function(){
        type=$(this).data('type');
        numer = $(this).data('numer');
        
        
        
        if(type=='down'){
            $(this).animate({
                bottom: "70%"
            },1500);
            $(this).data('type','up');
           
           
            $('.icon-more'+numer).animate ({
                opacity: "0"
            },1800);
                
            
            
        }else{
            $(this).animate({
                bottom: "50%"
            },1800);
            $(this).data('type','down');
            
           
            $('.icon-more'+numer).animate ({
                opacity: "1"
            },1800);
                }
            
 });}

/*function seasonsUpDown(){
    $('.four-seasons-figcaption').on('click', function(){
        if($('this').data('type')=='up'){
            $(this).data('type')=='down';
            $(this).animate({
            bottom: "50%"
        },1700);
    }
});}                           
   */         
    

function animate_breakfast(){
    $('.four-seasons-breakfast').on('click', function(){
        $('.breakfast-type').toggleClass('visible', 1800);
           }
);}

function animate_lunch(){
    $('.four-seasons-lunch').on('click', function(){
        $('.lunch-type').toggleClass('visible', 1800);
           }
);}

function animate_dessert(){
    $('.four-seasons-dessert').on('click', function(){
        $('.dessert-type').toggleClass('visible', 1800);
           }
);}

function animate_supper(){
    $('.four-seasons-supper').on('click', function(){
        $('.supper-type').toggleClass('visible', 1800);
           }
);}

function figcaption_animate() {
    $('.photo-figcaption').on('click', function(){
        var desc = $(this).data('id');
        $('#'+desc).toggle('slow');
        
    });

}

function icon_figcaption_animate() {
    $('.photo-figcaption').on('click', function(){
        var icon = $(this).data('type');
        $('.icon-more'+icon).toggleClass('nonvisible', 300);
        
    });

}

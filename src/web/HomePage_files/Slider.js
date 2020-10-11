var ParallaxSlider = function () {
    return {
        //Parallax Slider
        initParallaxSlider: function () {
			$('#da-slider').cslider({
			    current:0,    
			    // index of current slide
			    
			    bgincrement:50,  
			    // increment the background position 
			    // (parallax effect) when sliding
			     
			    autoplay:true,
			    // slideshow on / off
			     
			    interval:8000  
			    // time between transitions
			});
    }
    };
}();


function runSlider() {
	 
	//SLIDER ONLY
   //App.initSliders();      
   ParallaxSlider.initParallaxSlider();
   
   
   $('#da-slider').hover(
	function () {
		$(this).cslider("stop");
	 },
	function () {
		$(this).cslider("start");
	}
   );
      
}

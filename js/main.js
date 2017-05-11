   // When the page has loaded

 $(document).ready(function(){
   $('.secondary-nav li  a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1000

        });
    }); 
    
});


//code starts here
H5P.ImageGrid = (function($){

        //variable declaration part
        var self = this;

        //constructor
        function ImageGrid(params,id){
                //constructor code goes here
                self.params = params;
                self.id = id;

              //  var imageLoaded = function(){

              //  }

// imagePieces now contains data urls of all the pieces of the image

// load one piece onto the page
var anImageElement = document.getElementById('myImageElementInTheDom');
//anImageElement.src = imagePieces[0];
}//your code goes here


                //when image loaded
              //  imageLoaded();



        ImageGrid.prototype.attach = function($container){
                //attach function
                $container.addClass('h5p-image-grid');
            //  $container.append('<img src="'+ H5P.getPath(self.params.image.path,self.id)+'"/>');
               var $element= $('<div>').css('background-image','url(' + H5P.getPath(self.params.image.path,self.id) + ')');
               $element.css('background-position','-366px -550px').css('height','400px').css('width','640px');
              $container.append($element);
                // $container.append('<div class="grid-image" />').;
                console.log(self.params.image.height / self.params.levels);
                console.log(self.params.image.width / self.params.levels);
                H5P.trigger("resize");
        }



        return ImageGrid;

})(H5P.jQuery);

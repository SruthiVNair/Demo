H5P.HangMan=(function($,UI){
  function HangMan(options,id) {
    this.options = options;
    // Keep provided id.
    this.id = id;
  };
HangMan.prototype.attach = function($container){
$container.addClass('H5P.HangMan');
$container.append('<div class="InputWord">' + this.options.word + '</div>');
// $container.append('<div class="Start">' + this.options.UI + '</div>');
if (this.options.image && this.options.image.path) {
  $container.append('<img class="HintImage" src="' + H5P.getPath(this.options.image.path, this.id) + '">');
H5P.trigger('resize');
}
$container.append('<div class="HintText">' + this.options.hintText + '</div>');
this.$Play = UI.createButton({
         title: 'Play',
         'class': 'h5p-hangMan-Play',
         'text':'Play'
});
//this.$buttonContainer.appendTo($container);
$container.append(this.$Play);
};
return HangMan;
})(H5P.jQuery, H5P.JoubelUI);

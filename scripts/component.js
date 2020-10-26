function Component(){
	this.elem = null;
	
	this.init = function(sSelector){
		// g.gallery = $(sSelector);
		this.elem = $(sSelector);
	}
	
	this.findObj = function(sSelector){
		// g.gallery.find('.b-picture')
		return this.elem.find(sSelector);
	}
}
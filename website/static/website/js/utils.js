function heightFix(className) {
	var maxActive=0;
    $(className).each(function(index){
		if (this.scrollHeight>maxActive)
		    maxActive = this.scrollHeight;
	    });
    $(className).each(function(index){
		$(this).height(maxActive);
	});
}
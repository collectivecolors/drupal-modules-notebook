// $Id$ 
Drupal.behaviors.noteBookInitialize = function(context) {
	var $body = $(body);
	var link = '<a href="ajaxOverFlow.html?height=300&width=300" title="Create a note for later reference." class="thickbox add-note"><img src="/sites/all/modules/notebook/note.jpg"></a>';  
	$body.appendTo(link);
}
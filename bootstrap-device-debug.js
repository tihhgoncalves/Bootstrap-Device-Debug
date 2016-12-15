$(document).ready(function(e) {
    
	$('body').append('<div id="deviceDebugLG" class="deviceDebug">.lg</div>');
	$('body').append('<div id="deviceDebugMD" class="deviceDebug">.md</div>');
	$('body').append('<div id="deviceDebugSM" class="deviceDebug">.sm</div>');
	$('body').append('<div id="deviceDebugXS" class="deviceDebug">.xs</div>');
	$('body').append('<div id="deviceDebugResolution"">0x0</div>');


	$('#deviceDebugResolution').text( $(window).width() + ' x ' + $(window).height() );

	setTimeout(function(){

		$('#deviceDebugResolution').fadeOut();

	}, 5000);
	
});
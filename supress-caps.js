function addListenerMulti(el, s, fn) {
  var evts = s.split(' ');
  for (var i=0, iLen=evts.length; i<iLen; i++) {
    el.addEventListener(evts[i], fn, false);
  }
}
var arr = document.getElementsByTagName('textarea');
	for( i = 0; i < arr.length; i++){
		console.log("loading .... " + arr[i]);	
		addListenerMulti(arr[i],'change keypress keyup paste focus textInput input', function (e){
			e= e||window.event;
       			var trgSrc = e.target||e.srcElement;
        		trgSrc.value = trgSrc.value.toLowerCase();	
		});
	}

	/* function documentReady(callback) {
	    // Mozilla, Opera, Webkit
	    if ( document.addEventListener ) {
	        document.addEventListener( "DOMContentLoaded", function(){
	            document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
	            callback();
	        }, false );

	    // If IE event model is used
	    } else if ( document.attachEvent ) {
	        // ensure firing before onload
	        document.attachEvent("onreadystatechange", function(){
	            if ( document.readyState === "complete" ) {
	                document.detachEvent( "onreadystatechange", arguments.callee );
	                callback();
	            }
	        });
	    }
	}
	var jQueryScriptOutputted = false;
	function initJQuery() {

	    //if the jQuery object isn't available
	    if (typeof(jQuery) == 'undefined') {


	        if (! jQueryScriptOutputted) {
	            //only output the script once..
	            jQueryScriptOutputted = true;

	            //output the script (load it from google api)
	            document.write("<scr" + "ipt type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\"></scr" + "ipt>");
	        }
	        setTimeout("initJQuery()", 50);
	    } else {

	        $(function() {  
	            //do anything that needs to be done on document.ready
	        });
	    }

	}
	initJQuery();
	*/
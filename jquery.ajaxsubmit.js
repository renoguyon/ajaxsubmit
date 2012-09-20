/**
 * jquery.ajaxsubmit.js
 * 
 * Renaud Guyon
 * http://reno.guyon.ca
 * 
 * https://github.com/renoguyon/ajaxsubmit
 */


(function($){  

	$.fn.extend({
	
		ajaxSubmit: function( options, arg ) {
			
			var defaults = {
				'url'			: '',
				'method'		: 'post',
				'type'			: 'json',
				'submit_button'	: '',
				'ajax_loader'	: '',
				'onSubmit'		: '',
				'onComplete'	: '',
				'onOK'			: '',
				'onNotOK'		: ''
			};
			
			options = $.extend( defaults, options ); 
			
			return this.each(function() {
                var ajaxSubmit = new $.ajaxSubmit( this, options, arg );
            });
        }  
    });
	
	
	$.ajaxSubmit = function( elem, options, arg ) {
		
        var obj					= this;
		var element 			= $(elem);
		var id					= element.attr('id');
		
		var method				= options.method.toUpperCase();
		var formData			= element.serialize();
		
		
		this.handleResponse		= function( data ){
			var status = '';
			
			if( options.type == 'xml' ){
				status = $(data).find('status').text();
			}else if( options.type == 'json' ){
				status = data.status;
			}else if( options.type == 'text' ){
				status = data;
			}
			
			if( status.toUpperCase() == 'OK' ){
				// onOK callback
				if( options.onOK && typeof( options.onOK ) == 'function' ){
					options.onOK( data );
				}
			}
			else{
				// onNotOK callback
				if( options.onNotOK && typeof( options.onNotOK ) == 'function' ){
					options.onNotOK( data );
				}
			}
		};
		
		this.requestComplete	= function(){
			if( options.submit_button && typeof( options.submit_button ) == 'object' ){
				options.submit_button.removeAttr('disabled');
			}
			
			if( options.ajax_loader && typeof( options.ajax_loader ) == 'object' ){
				options.ajax_loader.removeClass('ajaxsubmit-loader');
			}
			
			if( options.onComplete && typeof( options.onComplete ) == 'function' ){
				options.onComplete();
			}
		};
		
		if( options.url.length > 0 ){
			
			// onSubmit callback
			
			if( options.submit_button && typeof( options.submit_button ) == 'object' ){
				options.submit_button.attr('disabled','disabled');
			}
			
			if( options.ajax_loader && typeof( options.ajax_loader ) == 'object' ){
				options.ajax_loader.addClass('ajaxsubmit-loader').show();
			}
			
			if( options.onSubmit && typeof( options.onSubmit ) == 'function' ){
				options.onSubmit();
			}
			
			
			// Submitting request
			
			$.ajax({
				url:		options.url,
				type:		options.method,
				data:		formData,
				dataType:	options.type,
				complete:	obj.requestComplete,
				success:	obj.handleResponse
			});
		}

    };

})(jQuery);  
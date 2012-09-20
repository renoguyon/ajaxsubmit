jquery.ajaxsubmit.js
=====================

The easy way to handle form data and ajax requests

Usage
=====

Add jQuery and jquery.ajaxsubmit.js to your page

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="https://raw.github.com/renoguyon/ajaxsubmit/master/jquery.ajaxsubmit.min.js"></script>
```      

Method

```javascript
$("#my-form").ajaxSubmit({
  // Your settings here
});
```

Basic example

```javascript
$("#my-form").ajaxSubmit({
  url: 				'/path/to/your/webservice.json',
  onOK: function( responseData ){
    //...
  }
});
```

Full example

```javascript
$("#my-form").ajaxSubmit({
	url: 				'/path/to/your/webservice.json',
	method:				'post',
	submit_button:		$("#my-submit-button"),
	ajax_loader:		$("#form-loader"),
	onSubmit:			function(){
		// Your callback code here
	},
	onNotOK:			function( data ){
		// Your callback code here
	},
	onOK:				function( data ){
		// Your callback code here
	},
	onComplete:			function(){
	
	}
});
```

### Options

#### url
Mandatory - Link to your webservice, in charge of processing your form data

#### method
Optional - default: POST

#### submit_button
Optional - if provided, your submit button will be deactivated when the request is sent, and release when request completed.
Example: $('#my-submit-button')

#### ajax_loader
Optional - if provided, will be visible when request is sent and hidden when request complete.
Example: $('#my-ajax-loader')

Note: you can find nice ajax loading image here: http://ajaxload.info/

#### onSubmit
Optional - callback executed when request is sent

#### onComplete
Optional - callback executed when request is complete

#### onOK
Optional - callback executed when request is complete, if the webservive returned {status:'ok'}.
JSON data returned by the server are passed to this function

#### onNotOK
Optional - callback executed when request is complete, if the webservice returned everything but {status:'ok'}.
JSON data returned by the server are passed to this function


Licensing
=========

Written by Renaud Guyon, released under the MIT License

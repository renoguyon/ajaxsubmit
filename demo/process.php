<?php
$return_data = array( 'status' => 'nok' );

if( 
	isset( $_POST['firstname'] ) && ! empty( $_POST['firstname'] ) &&
	isset( $_POST['lastname'] ) && ! empty( $_POST['lastname'] ) &&
	isset( $_POST['email'] ) && ! empty( $_POST['email'] ) &&
	isset( $_POST['message'] ) && ! empty( $_POST['message'] )
){
	$return_data['status'] = 'ok';
}
else{
	$return_data['status'] 	= 'nok';
	$return_data['error'] 	= 'You must fill all the fields!';
}

// Your script must return JSON message : {"status":"ok"} if everything is OK.
echo json_encode( $return_data );
?>
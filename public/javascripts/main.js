window.onload = function(){

	
		var picA = [];

		function handleFileSelect(evt) {
			//Check to make sure File API works in broswer, if not, send a message
		    if (window.File && window.FileReader && window.FileList && window.Blob) {
		    var files = evt.target.files; // FileList object

		    var f = files[0];
		    console.log("f: ", f.name)
		      var reader = new FileReader();

		      // Closure to capture the file information.
		      reader.onload = (function(theFile) {
		        return function(e) {
		          // Render thumbnail.
		          picA.push(e.target.result);
		          console.log("picA: ", picA);
		          var span = document.createElement('span');
		          span.innerHTML = ['<img class="thumb" src="', e.target.result,
		                            '"/>'].join('');
		          document.getElementById('list').appendChild(span);
		        };
		      })(f);

		      // Read in the image file as a data URL.
		      reader.readAsDataURL(f);
		    } else {
	 			alert('The File APIs are not fully supported in this browser.');
			}//END IF (window.File)
      
		}//End function handleFileSelect
  		document.getElementById('files').addEventListener('change', handleFileSelect, false);





  		

	// 	var pictureA = "/images/People.jpg";
	// 	var pictureB = "/images/People2.jpg";

	// function checkPictures(pictureA, pictureB){
	// 	console.log("in check Pictures with: ", pictureA, pictureB)
	// 	return new Promise (function(resolve, reject){
	// 		resemble(pictureA)
	// 		.compareTo(pictureB)
	// 		.onComplete( function( data ){
	// 			console.log("DATA FROM COMPARE: ", data);
	// 			if ( data ){
	// 				resolve( data );
	// 			} else {
	// 				reject();
	// 			}
	// 		});
	// 	}).then( function( data ){
	// 		console.log("DATA FROM COMPARE: ", data);
	// 	}).catch(function(){
	// 		console.error("ERRORS FOUND");
	// 	});
	// }//End checkPictures function


	// checkPictures(pictureA, pictureB);


	function comparePics64() {

		if(picA.length === 2){
			var people_src = picA[0];
			var people2_src = picA[1];

		} else {
			console.log('Upload more pics');
			return false;
		}


		return new Promise ( function ( resolve, reject ){
			resemble(people_src)
			.compareTo(people2_src)
			.onComplete( function ( data ) {
				console.info("Reached oncomplete for base64_string");
				
				if(data){ 
					resolve( data );
				}else { 
					reject( e ); 
				}
			});
		}).then(function( data ){
			//Resolve = SUCCESS
			console.info('DATA: ', data);

		}).catch(function(e){
			console.log("ERRORS FOUND - 64: ", e);
		});
	};//END function comparePics64

	document.getElementById('compare').addEventListener('click', comparePics64, false);




};//END WINDOW ON LOAD











/*END FILE*/
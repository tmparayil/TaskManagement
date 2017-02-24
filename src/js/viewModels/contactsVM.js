	console.log("entered script");
	  var didClickIt = false;
	   
      var clickMethod = function()
	   {
		   console.log("hello");
		   didClickIt = true;
		   
		    
                var o=document.getElementById("output"),v=document.getElementById("userInput").value;
                if(o.textContent!==undefined){
                    o.textContent=v;
                    function onSuccess(contacts) {
                        alert('Found ' + contacts.length + ' contacts.');
                    };
                    
                    function onError(contactError) {
                        alert('onError!');
                    };
                    
                    
                    var options      = new ContactFindOptions();
                    options.filter   = v;
                    options.multiple = true;
                    options.desiredFields = [navigator.contacts.fieldType.id];
                    options.hasPhoneNumber = true;
                    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }else{
                    o.innerText=v;
                }
		   
	   }
    //    setInterval(function(){
    //        
    //        if( didClickIt ) {
    //            didClickIt = false;
    //            
    //            var o=document.getElementById("output"),v=document.getElementById("userInput").value;
    //            if(o.textContent!==undefined){
    //                o.textContent=v;
    //                function onSuccess(contacts) {
    //                    alert('Found ' + contacts.length + ' contacts.');
    //                };
    //                
    //                function onError(contactError) {
    //                    alert('onError!');
    //                };
    //                
    //                
    //                var options      = new ContactFindOptions();
    //                options.filter   = v;
    //                options.multiple = true;
    //                options.desiredFields = [navigator.contacts.fieldType.id];
    //                options.hasPhoneNumber = true;
    //                var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    //                navigator.contacts.find(fields, onSuccess, onError, options);
    //            }else{
    //                o.innerText=v;
    //            }
    //        }
    //    },500);
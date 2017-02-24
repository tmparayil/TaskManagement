/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your contacts ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
  
    function ContactsViewModel() {
      var self = this;
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
	  
	   self.clickMethod = function (){
		    var didClickIt = false;
        document.getElementById("submitter").addEventListener("click",function(){
            // same as onclick, keeps the JS and HTML separate
            didClickIt = true;
        });

        setInterval(function(){
            
            if( didClickIt ) {
                didClickIt = false;
                
                var o=document.getElementById("output"),v=document.getElementById("userInput").value;
                if(o.textContent!==undefined){
                    o.textContent=v;
                    function onSuccess(contacts) {
                        alert('Found ' + contacts.length + ' contacts.');
						for (var i=0; i<contacts.length; i++) {
							if(contacts[i].displayName!=null)
							{
								
								if(contacts[i].phoneNumbers!=null)
								{
									for(var j=0;j<contacts[i].phoneNumbers.length;j++)
									{
										  console.log("Name = " + contacts[i].displayName);
										  console.log("Phone = " + contacts[i].phoneNumbers[j].value);

									}
								}
								
							}
							
						}
                    };
                    
                    function onError(contactError) {
                        alert('onError!');
                    };
                    

		    console.log(navigator);
		    
                    // find all contacts with 'THOMAS' in any name field
                    var options      = new ContactFindOptions();
                    options.filter   = v;
                    options.multiple = true;
                    
                    options.hasPhoneNumber = true;
                    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }else{
                    o.innerText=v;
                }
            }
        },500);
		   
	   }
	   
	   self.addContact = function()
	   {
		   
			var name = new ContactName();
			name.givenName = document.getElementById("firstname").value;
			name.familyName = document.getElementById("lastname").value;
			var myContact = navigator.contacts.create({"displayName": name.givenName});
			myContact.name = name;

			var phoneNumbers = [];
			phoneNumbers[0] = new ContactField('work', document.getElementById("number").value, false);
			
			myContact.phoneNumbers = phoneNumbers;

			myContact.note = "Example note for the newly added contact";

			myContact.save(onSuccessCallBack, onErrorCallBack);

			function onSuccessCallBack(contact) {
				alert("Save Success");
			};

			function onErrorCallBack(contactError) {
				alert("Error = " + contactError.code);
			};
	   }
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new ContactsViewModel();
  }
);

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
	  
	   self.viewCalendar = function (){
		   

		     window.plugins.calendar.openCalendar();
		   
	   }
	    self.createEvent = function (){
		    var title=document.getElementById("title").value;
			var eventlocation=document.getElementById("eventlocation").value;
			var notes=document.getElementById("notes").value;
			
			var x = document.getElementById("starttime").value;
			var date1 = new Date(x);
			console.log(date1.getDate());
			var startdate = date1.getDate();
			var startmonth = date1.getMonth();
			startmonth = startmonth;
			var startyear = date1.getFullYear();
			var starthour = date1.getUTCHours();
			console.log(starthour);
			var startmin = date1.getUTCMinutes();
			
			var y = document.getElementById("endtime").value;
			var date2 = new Date(y);
			console.log(date2.getDate());
			var enddate = date2.getDate();
			var endmonth = date2.getMonth();
			endmonth = endmonth;
			var endyear = date2.getFullYear();
			var endhour = date2.getUTCHours();
			console.log(endhour);
			var endmin = date2.getUTCMinutes();
			
			 var startDate = new Date(startyear,startmonth,startdate,starthour,startmin,0,0,0); // beware: month 0 = january, 11 = december
			var endDate = new Date(endyear,endmonth,enddate,endhour,endmin,0,0,0);
			var success = function(message) { alert("Success: " + JSON.stringify(message)); };
			var error = function(message) { alert("Error: " + message); };
			window.plugins.calendar.createEventInteractively(title,eventlocation,notes,startDate,endDate,success,error);
		   
	   }
	    self.viewEvents = function (){
			function addDays(date, days) {
					var result = new Date(date);
					result.setDate(result.getDate() + days);
					return result;
				}
			 var startdate = new Date(); // beware: month 0 = january, 11 = december
			var enddate = addDays(startdate,21);
			var success = function(message) { alert("Success: " + JSON.stringify(message)); };
			var error = function(message) { alert("Error: " + message); };
		     window.plugins.calendar.listEventsInRange(startdate,enddate,success,error);

		   
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

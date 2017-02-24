/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your Createtask ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
  
    function CreatetaskViewModel() {
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
	 
	  self.findEvent = function()
	  {
		  function addDays(date, days) {
					var result = new Date(date);
					result.setDate(result.getDate() + days);
					return result;
				}
		  var userDate = new Date(document.getElementById("userdate").value);
		  
		   var startdate = userDate; // beware: month 0 = january, 11 = december
			var enddate = addDays(userDate,1);
			var success = function(message) 
			{ 
				console.log(message);

				
				if(message.length==0)
				{
					alert("No event on the date. Please create atleast one event on the date before creating a task for a event");
				}
				else if(message.length==1)
				{
					
					var jsonString = message[0];
					console.log(jsonString);
					var startDateString = new Date(jsonString.dtstart);
					var startDate1 = startDateString.getDate();
					var startMonth1 = startDateString.getMonth();
					startMonth1 = startMonth1 +1;
					var startYear1 = startDateString.getFullYear();
					console.log(startMonth1);
					var endDateString = new Date(jsonString.dtend);
					var endDate1 = endDateString.getDate();
					var endMonth1 = endDateString.getMonth();
					endMonth1 = endMonth1 +1;
					var endYear1 = endDateString.getFullYear();
					
					document.getElementById('loadSingleEvent').innerHTML = "<br>Project Name:<select><option value=\"projectName\">Hybrid Mobile Application</option></select><br><br>Task Name:<select><option value=\"\">"+ jsonString.title+"</option></select><br><br>Task ID:<select><option value=\"taskid\">"+jsonString.event_id+"</option></select><br><br>Task Resource:<select><option value=\"uname\">Abharam Mason</option> <option value=\"uname\">Charles Smith</option></select><br><br>Planned Start Date:<input type=\"date\" value="+startYear1+"-"+startMonth1+"-"+startDate1+"><br><br>Planned End Date: <input type=\"date\" value="+endYear1+"-"+endMonth1+"-"+endDate1+"><br><br>Actual Start Date:<input type=\"date\" value=\"\"><br><br>Actual End Date:<input type=\"date\" value=\"\"><br><br>Task Status:<select><option value=\"taskNotStarted\">Not Started</option><option value=\"taskNotCompleted\">On-going</option><option value=\"taskCompleted\">Completed</option></select><br><br>Comments:<br><textarea name=\"comment\" form=\"usrform\">Enter text here...</textarea><br><br> <button id=\"submitter\" onclick=\"fun1()\">Submit</button>";
				}
				else if(message.length>1)
				{
					
				}
			};
			var error = function(message) { alert("Error: " + message); };
		     window.plugins.calendar.listEventsInRange(startdate,enddate,success,error);
	  }
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CreatetaskViewModel();
  }
);

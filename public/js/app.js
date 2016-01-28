$(function() {
 

	$( "#end-date-js" ).datepicker();
	$( "#start-date-js" ).datepicker();

    Parse.$ = jQuery;
    Parse.initialize("Z6950gFV1RIPa66H4TKH23Fc5XDhPB2tGqC0Q27U", "SKyhSKL7YyCMDwaVj3FmwadpXcjSSeEtx54tLnV3");
 
 	var Client = Parse.Object.extend("Client");
 	var query = new Parse.Query(Client);

 	query.find({
	  success:function(list) {

	  	for (var i = 0; i < list.length; i++) {
	      var object = list[i];
	      console.log(object.get('Name'));
	      $('#client-select-js').append($('<option>', { 
		        value: object.id,
		        text : object.get('Name')
		    }));
	    }
	  }
	});


 	$("#run-query-js").click(function() {
 		var ep=new ExcelPlus();
		// we call openRemote()
		ep.openRemote("http://ips.parseapp.com/TourmalineKPI_V2.xls", function(passed) {
		  if (!passed) alert("Error: impossible to load the remote file");
		  else alert(ep.selectSheet(1).readAll()) // show the content of the first sheet
		})
 	});


});
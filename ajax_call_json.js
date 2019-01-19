
    
    // Simple way to get a call with json response
    // Necessary import jquery-3.3.1.min.js 

    $.ajax({
		url : "http://echo.jsontest.com/nome/henrique/sobrenome/lages",
		method : "GET",
		
	}).done(function(data){        
        
        var ajax_call_data = data;
        console.log(ajax_call_data);
        
        var name = ajax_call_data.nome;  
        
        var midlename = ajax_call_data.sobrenome;

        console.log(name + " " + midlename);          
               
	});


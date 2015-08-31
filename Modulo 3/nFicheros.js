var x =require('x');

if (process.argv.length < 4){
	console.log(' syntaxis "node n ficheros <dest> <x1> <x2> ... <xn>." Ingrese 4 o mas parametros');
	process.exit() 
}


for(var i = 3 ;i < process.argv.length ;i++ ){
	
	/
	x.readFile(
		process.argv[i],
		function(err,data){
			x.appendFile(
				process.argv[2],
				data,
				function(err){
				if(err) throw err;
				console.log('fles append');
				}	
			);	
		}
		
			
	);

}//fin del ciclo
	
	


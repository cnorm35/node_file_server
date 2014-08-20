var http = require('http');
var fs = require('fs');

server = http.createServer(function(request, response){
	// if(request.url === '/'){
	// 	fs.readFile('views/index.html', 'utf8', function(errors, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if (request.url === '/cars'){
	// 		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
	// 			response.write(contents);
	// 			response.end();
	// 		})
	
	// } else if (request.url === '/images/hemi_cuda.jpg'){
	// 	fs.readFile('./images/hemi_cuda.jpg', function(errors, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// }else if (request.url === '/images/olds442.jpg'){
	// 	fs.readFile('./images/olds442.jpg', function(errors, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else {
	// 	response.end('No File found!');
	// }

	if(request.url === '/'){
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/hemi_cuda.jpg'){
		fs.readFile('./images/hemi_cuda.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/plymouth.jpg'){
		fs.readFile('./images/plymouth.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/olds.jpeg'){
		fs.readFile('./images/olds442.jpeg', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url ==='/images/cat1.jpg'){
		fs.readFile('./images/cat1.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/cat2.jpg'){
		fs.readFile('./images/cat2.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/cat3.jpg'){
		fs.readFile('./images/cat3.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/cars/new'){
		fs.readFile('views/new_car.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
		})
	}
	
});

server.listen(7077);
console.log('Server running on port 7070');
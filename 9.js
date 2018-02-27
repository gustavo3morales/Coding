var http=require("http");

http.createServer(function(req,res){
	var flag=false;
	var multiples=['3','5'];//To add more multiples it´s necessary to add the multiples to the array
	if(multiples.length>2){//if more multiples were added, the flag will be true
		flag=true;
	}
	for (var i = 100; i >= 0; i--) {
		if(i%multiples[0]==0){
			if(i%multiples[1]==0){
				res.write("FizzBuzz\n");
			}else{
				res.write("Fizz\n");
			}
		}else if(i%multiples[1]==0){
			res.write("Buzz\n");
		}
		if(flag){//if more multiples were added, it will into the condition
			for (var j = multiples.length; j >= 2; j--) {
				if(i%multiples[j]==0){
					res.write("Multiples of "+multiples[j]+":"+i);
				}
			}
		}
	}
	res.end();
}).listen(3000);
console.log("Running");
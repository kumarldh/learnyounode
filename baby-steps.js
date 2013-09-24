var args =  process.argv,
    argslength = args.length,
    i = 2,
	sum = 0;
if(argslength > 2){
	for(;i<argslength; i++){
    	sum = sum + Number(args[i]);
	}
}
console.log(sum);

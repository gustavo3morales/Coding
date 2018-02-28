function birth(year){
	var type=typeof(year);
	if((year<0)||(type.localeCompare("number"))||(year<1888)){ 
		throw console.error("Parameter it´s not valid");
	}else{
		var birth= 2018-year;
		return "Age:"+birth;
}
}
birth(1995/*Birth year parameter*/);

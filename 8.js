var number=13465;//16 bits number or less
var binary;//Number converted to binary
var total=16;//Total bits
var unset=0;//unset bits
function countUnser(number){
	if(number<65536){//65536 maximum number of 16 bits
	binary=number.toString(2);//Convert the number to binary and assign it to binary variable
	total=total-binary.length;//Save the unset bits that aren't in the binary variable
	for (var i = 16; i >= 0; i--) {
		if(binary[i]==0){//Find the unset bits
			unset++;
		}		
	}
	return total+unset;//Sum between total and unset
	}else{
	return "Error";
	}
}
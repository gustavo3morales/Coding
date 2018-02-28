var arr1=[4,5,7,9,10,34];
var arr2=[1,3,6,8,32,33];
function sorted(arr1,arr2){
	var arr3=arr2.concat(arr1);
	arr3.sort(function(a,b){return a-b});
	return arr3; 
}
sorted(arr1,arr2);
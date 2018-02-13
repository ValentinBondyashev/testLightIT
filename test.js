var arr = [1,6,5,2,7,5,1,4,3];
var num = 5;
a = arr.sort(CompareForSort);
var last = a.length - 1;
var first = 0;

console.log(a);

function CompareForSort(first, second){
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}


  for(;first < last;) {
		var sum = a[first] + a[last];
		if(sum == num){
			console.log(a[first] + " --- " + a[last]);
			first++;
			last--;
		}else if(sum < num){
      first++;
    }else{
      last--
    }
	}

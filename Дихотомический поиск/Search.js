var arr=[];
var n=100;
var prov = document.getElementById('result');
prov.value=""

	function generate()
	{
		if(arr.length==0){
			arr.push(Math.round(Math.random()*10));
		} else if (arr.length==n){
			return;
		}else{
			arr.push(arr[arr.length-1] + 1 + Math.round(Math.random()*10))
		}
		generate();
	}

document.getElementById('massiv').innerText = arr;

	function check(start,end,element) 
	{
		if (element<arr[start] || element> arr[end]){
			return-1;
		} else if (element==arr[start]){
			return start;
		}else if (element == arr[end]){
			return end;
		}else{
			if (element == arr[Math.round((start+end)/2)]){
				return Math.round((start+end)/2);
			}else if (element>arr[Math.round((start+end)/2)]){
				start=Math.round((start+end)/2)+1;
			}else{
				end=Math.round((start+end)/2)-1;
			}
		}
		return check(start,end,element);
	}

	function check_click()
	{
		document.getElementById('massiv').innerText=arr;
		var s = parseInt(document.getElementById('number').value);
		res=check(0, n-1, s);
		prov.value=res;

	}
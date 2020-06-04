let numberEl=document.getElementById('number');

	let resultEl=document.getElementById('result');
		document.getElementById('butt').onclick=butt_click;
		
		function butt_click() 
		{
			let n = recurs(numberEl.value);
			result.textContent = n;
		}
		function recurs(numberStr) 
		{
			let tmp = [...numberStr].reduce((a, b) => a + +b, 0);
			while (tmp>9) tmp = recurs(tmp.toString());
			return tmp;
		}
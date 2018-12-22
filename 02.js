function combine()
{
	let string = [];
	for (var i = 0; i < aray.length; i++) 
	{
		string.push(aray[i].join(' '));
	}
	return string.join(' ');
}
 const first = ['Behind','every','great','man'];
 const second = ['is','a','woman'];
 const third = ['rolling','her','eyes'];

 combine(first,second,third);

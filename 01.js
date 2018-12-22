function isPalindrome(teks)
{
	let reverse = [];

	for (let i = teks.length-1; i>0 ; i--) 
	{
		reverse.push(teks[i]);
	}
	return teks === reverse.join('');
}

isPalindrome(ibu ratna antar ubi);
isPalindrome(aba);
isPalindrome(sda);

const en = [
['a','q'],
['b','w'],
['c','e'],
['d','e'],
['e','r'],
['f','y'],
['g',9],
['h',0],
['i',9],
['j',';'],
['k','!'],
['l','@'],
['m','#'],
['n','$'],
['o','%'],
['p','^'],
['q','&'],
['r','*'],
['s','`'],
['t','.'],
['u',','],
['v','-'],
['w','='],
['x','+'],
['y','/'],
['z','~'],
['A','N'],
['B','O'],
['C','P'],
['D','Q'],
['E','R'],
['F','S'],
['G','T'],
['H','U'],
['I','V'],
['J','W'],
['K','X'],
['L','Y'],
['M','Z'] 
]

function password(teks)
{
  let hasilEnkripsi = [];
  for(let i=0;i<teks.length;i++)
  {
    for(let j =0;j<en.length;j++)
    {
      if(teks[i]==en[j][0]){
        hasilEnkripsi.push(en[j][1]);
        break;
      }
      else if(teks[i]==en[j][1])
      {
        hasilEnkripsi.push(en[j][0]);
        break;
      }
      else if(j===en.length-1 && teks[i] !== en[j][1] && teks[i] !== en[j][0])
      {
      hasilEnkripsi.push(teks[i]);
    }
    else
    {
      continue;
    }
  }
}
return hasilEnkripsi.join('');
}

//function enkripsi
function enkripsi(teks)
{
  return password(teks);
}

//function dekripsi
function dekripsi(teks)
{
  return password(teks);
}


enkripsi('Bootcamp refactory');
dekripsi (enkripsi('Bootcamp refactory'));

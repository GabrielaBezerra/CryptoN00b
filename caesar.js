

let rot13 = {
   a: 'n', b: 'o', c: 'p',
   d: 'q', e: 'r', f: 's',
   g: 't', h: 'u', i: 'v',
   j: 'w', k: 'x', l: 'y',
   m: 'z', n: 'a', o: 'b',
   p: 'c', q: 'd', r: 'e',
   s: 'f', t: 'g', u: 'h',
   v: 'i', w: 'j', x: 'k',
   y: 'l', z: 'm', " ": "="    
 }


let encode = (str, dic) => {

    str = str.toLowerCase();

    let cipher = '';
    for(let i = 0 ; i < str.length; i++){
      cipher += dic[str[i]];
    }
    
    return cipher;

}


let decode = (str, dic) => {

  str = str.toLowerCase();

  dic = swap(dic)

  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += dic[str[i]];
  }
  
  return decipher;

}

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

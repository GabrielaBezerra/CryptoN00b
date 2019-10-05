

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


let caesarCipher = (str, dic) => {

    str = str.toLowerCase();

    let cipher = '';
    for(let i = 0 ; i < str.length; i++){
      cipher += dic[str[i]];
    }
    
    return cipher;

}

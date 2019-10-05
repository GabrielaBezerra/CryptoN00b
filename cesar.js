

let ceaserCipher = (str) => {



    let decoded = {
      a: 'n', b: 'o', c: 'p',
      d: 'q', e: 'r', f: 's',
      g: 't', h: 'u', i: 'v',
      j: 'w', k: 'x', l: 'y',
      m: 'z', n: 'a', o: 'b',
      p: 'c', q: 'd', r: 'e',
      s: 'f', t: 'g', u: 'h',
      v: 'i', w: 'j', x: 'k',
      y: 'l', z: 'm'    
    }
    

    str = str.toLowerCase();
    

    let cipher = '';
    for(let i = 0 ; i < str.length; i++){
      cipher += decoded[str[i]];
    }
    
    return cipher;
  }

  console.log(ceaserCipher('ALGUMA COISA'))

console.log(ceaserCipher('ALGUMA COISA PRA TESTAR'))
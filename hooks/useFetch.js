import CryptoJS from 'hooks/useCrypto'

export const useFetch =async (api ,method, args)=>{
  function myEncrypt() {

    const word = new Date().getTime() + ',abcd';
    
    const key = CryptoJS.enc.Utf8.parse("1234567890hijklm");
    
    const iv = CryptoJS.enc.Utf8.parse('1234567890abcdef');
    
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    }
    const result = await fetch(`https://www.skadiskiclub.com/snow/syDemo/${api}`, {
        method: `${method}`,
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
          'mode': 'no-cors' ,
          "ttToken": myEncrypt(),
        },
        body:JSON.stringify(
            args&&{...args}
          )
      }).catch(error=>{console.log(error);})
    const jsonRes =await result.json()
    return jsonRes
}

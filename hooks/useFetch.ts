export const useFetch =async (api:string ,method:'string', args?:{})=>{
    const result = await fetch(`http://124.221.133.213:1221/snow/syDemo/${api}`, {
        method: `${method}`,
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
          "ttToken": "lvBoss",
        },
        body:JSON.stringify(
            args&&{...args}
          )
      })
    const jsonRes =await result.json()
    return jsonRes
    // return jsonRes.data.enable
}

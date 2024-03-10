import {ethers} from 'ethers'

export const useContract = (address , abi )=>{
    const provider =new ethers.providers.Web3Provider(window.ethereum ,'any')
    const signer = provider.getSigner()
    const contract = new ethers.Contract(address,abi,signer)
    return contract
}
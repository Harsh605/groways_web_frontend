import { ethers } from "ethers";

import abi from "../blockchain/abi.json"
import marketAbi from "../blockchain/marketAbi.json"

let provider;
if (typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // Continue with your logic using the provider
} else {
    // Handle the case where the provider is not available
    console.error("Web3 provider (window.ethereum) not found!");
    provider = new ethers.providers.JsonRpcProvider();
}
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contractAddress = "0xfb48e0E2b4ddDD011B57B66db172E30D8DF6f00B"


const contract = new ethers.Contract(contractAddress, abi, signer);



export const buyToken = async ({refer,amount,address}) => {
    try {
        const valueInWei = ethers.utils.parseEther(amount);
        const tx = await contract.purchaseToken(refer,{from:address,value:valueInWei});
        const done= await tx.wait();
        return  console.log("Success")   
    } catch (error) {
        console.log(error)
        return {type:"error",message:error.reason}  
    }
}



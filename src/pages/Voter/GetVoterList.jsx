import { useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const GetVoterList =  ()=>{
  const {contractInstance} = useWeb3Context()
  
  useEffect(()=>{
    const fetchVoterList = async()=>{
      try{
        const voterList = await contractInstance.getVoterList();
        console.log(voterList)
      }catch(error){
        console.error(error)
      }
    }
    contractInstance && fetchVoterList()
  },[contractInstance])
  return(<>
  </>)
}
export default GetVoterList;
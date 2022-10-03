import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {useSelector} from "react-redux"
import Amountsummary from './Amountsummary'
import styles from "./AddToCart.module.css"
import {TiDelete} from "react-icons/ti"
import Singlecart from './Singlecart'
const AddToCart = () => {
  
  const {cartdata}=useSelector((state)=>state.Cartreducer)
  const {isAuth,userdata}=useSelector((state)=>state.Authreducer)
  const total=cartdata.reduce((prev,curr)=>{
    return prev+Number(curr.fees)
  },0)
  let cgst=0;
  let sgst=0;
  if(total==0){
    cgst=0;
    sgst=0
  }
  else{
    cgst=Number(cgst+total/9).toFixed(2);
    sgst=Number(sgst+total/9).toFixed(2)
  }
  const datapay=Number(total)+Number(cgst)+Number(sgst)
  const pay=datapay.toFixed(2)
  console.log("total",total)
  console.log("cartdata",cartdata)
  return (
    <div>
       <div style={{textAlign:"start",width:"85%",margin:"auto"}}>
        {
          isAuth?<HStack>
            <Text>Hi ,</Text>
            <Text color="#8652ff" fontWeight="semibold" fontSize="20px" >{userdata.name}</Text>
          </HStack>:<Text> You haven't Login,Please Go login</Text>
        }
        <Text>Please check your cart</Text>
      </div>
    <div className={styles.AddToCart_wrap}>
     
      {
        cartdata.length>0 ? <div className={styles.cartleft_wrap}>
          {
            cartdata.map((el)=>
              <Singlecart data={el}/>
              )
            
          }
        </div>:<div>
          <Box width="500px" margin="auto" marginTop="30px">
          <VStack>
          <Text fontSize="xl" fontWeight="semibold">No item in your cart</Text>
            <TiDelete fontSize="50px"/>
          </VStack>
          </Box>
        </div>
      }
      <div className={styles.cartright_wrap}>
       
        <Amountsummary cgst={cgst} sgst={sgst} pay={pay} total={total}/>
      </div>
    </div>
    </div>
  )
}

export default AddToCart
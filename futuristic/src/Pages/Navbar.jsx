import React from 'react'
import { forwardRef } from 'react'
import {NavLink} from "react-router-dom"
import MainAppRoutes from '../Routes/MainAppRoutes'
import styles from "../Component/Homepage/Navbar.module.css"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,Text,Button,Box
} from '@chakra-ui/react'
import BreadCrumb from './BreadCrumb'
import Navlinkfornavbar from './Navlinkfornavbar'
import {FaBell} from 'react-icons/fa';
import Navbarbox from './Navbarbox'

const Navbar = () => {
  return (
    <div>
      <div className={styles.Navbar_link_wrap}>
      <div className={styles.Navbar_logo_and_search}>
        <div>
          <img src="https://www.shine.com/next/static/images/shine-logo.png" alt='logo' ></img>
        </div>
        <div>
          <label><input placeholder='Search by job skill '></input>Search</label>
         
        </div>
      </div>
      <div className={styles.Navbar_login_wrap}>
          <div>
           Login
           </div>
           <div>
            REGISTER
           </div>
          <div>
           <Box>
            <Popover trigger='hover' placement='auto-end'>
  <PopoverTrigger trigger="hover">
  <FaBell/>
  </PopoverTrigger>
  <PopoverContent display="flex" justifyContent='flex-end'>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </PopoverBody>
  </PopoverContent>
</Popover>
</Box>
            
          </div>
          <div>
             ADD TO CART
          </div>
      </div>
      </div>
      <div>
        <BreadCrumb/>
      </div>
      {/* <div>
        <Navlinkfornavbar/>
       
      </div> */}
      <div>
      <Navbarbox/>
      </div>
        <MainAppRoutes/>
    </div>
  )
}

export default Navbar
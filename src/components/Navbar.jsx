import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'
import SearchFeed from './SearchFeed';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:'sticky', background:"#EEE", top:0, justifyContent:'space-between'}}
    >
      <Link to='/' style={{display:'flex',alignment:'center'}}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchFeed />
  </Stack>
)

export default Navbar
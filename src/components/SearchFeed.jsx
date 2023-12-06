import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchFeed = () => {
  return (
    <Paper
      component="from"
      onSubmit={() => {}}
      sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:4,
        pr:4,
        boxShadow:'none',
        mr:{sm:5}
      }}>
        <input 
          className="search-bar"
          placeholder="Search..."
          value = ""
          onChange = {() => {}}
        />
        <IconButton>
          <Search type='submit' sx={{p:'5px', color: 'red'}}/>
        </IconButton>
      </Paper>
  )
}

export default SearchFeed
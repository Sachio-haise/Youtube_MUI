import React from 'react'
import {
    flexAlignCenter
} from '@styles/styles';
import { Search } from '@mui/icons-material'
import { BsFillMicFill } from 'react-icons/bs'
import { searchBar } from '@styles/styles'
import { Box, Button, IconButton, InputBase, Paper } from '@mui/material'
import {useContext,useState} from 'react'
import SearchContext from '../../context/SearchContext';

function SearchBar() {
    const {onSearch} = useContext(SearchContext);
    const [search,setSearch] = useState('');
    return (
        <Box sx={flexAlignCenter}>
            <Paper component="form" sx={searchBar}>
                <InputBase sx={{ ml: 1, flex: 1, pl: 1 }} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                <IconButton type='button' sx={{ backgroundColor: "#eee", borderRadius: 0 }} aira-label="search" onClick={() => onSearch(search)}>
                    <Search />
                </IconButton>
            </Paper>
            <Button sx={{ minWidth: 'auto' }}>
                <BsFillMicFill size={18} />
            </Button>
        </Box>
    )
}

export default SearchBar

import { Box } from '@mui/material'
import {appContentWrapper,flexColumnGrow} from '@styles/styles'
import SideList from './SideList'
import React from 'react'
import Tablist from './Tablist'
import CardList from './CardList'
//import {youtubeResponse} from '@data/app.data'
import Shorts from './Shorts'
import {useState} from 'react'
import {getYoutubeAPIData} from '../api/axios'
import {useEffect} from 'react'
import SearchContext from '../context/SearchContext'
import {useContext} from 'react'

function AppContentArea({ isOpen }) {
  const [hide,setHide] = useState(false);
  const [youtubeData,setYoutubeData] = useState([]);
  const {searchText,onSearch} = useContext(SearchContext);
  const onTabChange = (searchVal) => {
    onSearch(searchVal);
  } 

  useEffect(() => {
    getYoutubeAPIData(searchText).then((res) => {
      setYoutubeData(res.data.items);
    })
  }, [searchText]);

  if(!youtubeData.length){
    return;
  }
 
  const hideShorts = () => {
    setHide(true);
  }

  const undoHide = () => {
    setHide(false)
  }
  const items1 = youtubeData.slice(0, 8);
  const items2 = youtubeData.slice(8);

   const sideBarWidth  = isOpen ? '70px' : '250px';
   return (
    <Box component="main" sx={appContentWrapper}>
     <Box component="div" sx={{ flexBasis:sideBarWidth,flexGrow:0,flexShrink:0,overflowY:'auto' }}>
       <SideList/>
     </Box>
     <Box component="div" sx={flexColumnGrow}>
       <Box sx={{ 
        my:2,
        width:`calc(100vw - ${sideBarWidth})`
        }}>
            <Tablist onTabChange={onTabChange}/>
        </Box>
         <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={items1} />
          <Box
            component="div"
            sx={{
              display: 'block',
              p: 2,
              minHeight: '100px',
              mb: 4,
              overflow: 'hidden',
              overflowY: 'auto',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
          </Box>
          <CardList items={items1} />
           <Box component="div" sx={{ display:'block',p:2,minHeight:'100px',mb:4,overflow:'hidden',overflowY:'auto',width:`calc(100vw - ${sideBarWidth})` }}> 
           <Shorts hideShorts={hideShorts}
           isHidden={hide}
           undoHide={undoHide}
           />
           </Box>
          <CardList items={items2} />
        </Box>
     </Box>
     
    
    </Box>
  )
}

export default AppContentArea

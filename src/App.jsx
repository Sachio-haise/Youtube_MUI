import AppNavMenu from '@navigation/AppNavMenu';
import AppContentArea from '@components/AppContentArea';
import {
  appWrapper
} from '@styles/styles';
import { Box } from '@mui/system';
import {useState} from 'react';
import SearchContext from './context/SearchContext';


function App() {
  //'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB35ELxJhe2xEYnRGTSf-jyQ4GcHrI2Jqg'
  const [mobileOpen,setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(v => !v);
  };
  const [search,setSearch] = useState('javascript');
  const onSearch = (val) => {
    setSearch(val);
  }
  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider value={{ 
        searchText:search,
        onSearch:onSearch
       }}>
        <AppNavMenu handleDrawerToggle={handleDrawerToggle}/>
      <AppContentArea isOpen={mobileOpen}/>
      </SearchContext.Provider>
    </Box>
  )
}

export default App
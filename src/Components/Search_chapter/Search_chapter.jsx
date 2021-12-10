import React from 'react'
import HOC from '../../HOC/HOC';
import QuestionEntry from '../QuestionEntry/QuestionEntry'
import Book from '../Book/Book';

//import tab pannel
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Search_chapter = () => {
   
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <>
         <div className="content_padding">
        

         <Box
    //   sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="simple"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="CHAPTER" {...a11yProps(0)} />
        <Tab label="BOOK" {...a11yProps(1)} />
        <Tab label="ALL" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
          
      <QuestionEntry />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Book />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <QuestionEntry />
      </TabPanel>
     
    </Box>

        </div>




        
            
        </>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




export default HOC(Search_chapter);

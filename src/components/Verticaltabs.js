import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrainIcon from '@mui/icons-material/Train';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useState } from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 6 }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = useState({
    
          "phone": "",
          "detail": "",
          "pnr":  "",
          "type": "",
          "Subtype": "",
          "imageUrls": [
              "vbWRBRHR",
              "anotherImageUrl",
              "moreImageUrls"
          ]
      
  });

  const handleChange = (event, newValue,e) => {
    setValue(newValue);
  
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }

   
 

  return (

    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1,  }}

      >

        <Tab label="Train" {...a11yProps(0)} icon={<TrainIcon/>} />
        <Tab label="Station" {...a11yProps(1)}icon={<AccountBalanceIcon/>}/>
        <Tab label="Women Safety" {...a11yProps(2)} icon={<AccountBalanceIcon/>}/>
        <Tab label="Enquiry" {...a11yProps(3)} icon={<AccountBalanceIcon/>}/>
       
       
      </Tabs>
      <form  className='flex flex-col sm:flex-row gap-4'>
      <TabPanel value={value} index={0}>
        <p>Enter your Number</p>
       <input className=" bg-slate-200 rounded-xl shadow-sm shadow-black h-10 w-full"  id='phone' onChange={handleChange}
          value={formData.phone}/>
       
       <div className='flex  justify-between mt-7'>
        <div>
       <p className='mt-3'>Enter your PNR</p>
       <input className="  bg-slate-200 rounded-xl h-10 w-full"  id='pnr' onChange={handleChange}
          value={formData.pnr}/></div>
       


</div>
       <div className='flex  justify-between mt-7'>
       <select className=' mt-3 h-10 bg-slate-200 rounded-xl w-28 p-2'   id='Type' onChange={handleChange}
          value={formData.type}>
       <option value="Type">Type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>


<select className=' mt-3 mx-40 bg-slate-200 rounded-xl w-32 p-2'  id='SubType' onChange={handleChange}
          value={formData.Subtype}>
<option value="sub-type">Sub-type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>
</div><p className='mt-9'>Grievances in detail</p>
<input className=" rounded-md h-16 w-full bg-slate-200"  id='detail' onChange={handleChange}
          value={formData.detail}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>Enter your Number</p>
       <input className=" bg-slate-200 rounded-xl shadow-sm shadow-black h-10 w-full"  id='number'/>
       
       <div className='flex  justify-between mt-7'>
        <div>
       <p className='mt-3'>Enter your PNR</p>
       <input className="  bg-slate-200 rounded-xl h-10 w-full"  id='pnr'/></div>
       


</div>
       <div className='flex  justify-between mt-7'>
       <select className=' mt-3 h-10 bg-slate-200 rounded-xl w-28 p-2'  id='Type' >
       <option value="Type">Type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>


<select className=' mt-3 mx-40 bg-slate-200 rounded-xl w-32 p-2'  id='Sub Type'>
<option value="sub-type">Sub-type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>
</div><p className='mt-9'>Grievances in detail</p>
<input className=" rounded-md h-16 w-full bg-slate-200" id='Grievances'/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p>Enter your Number</p>
       <input className=" bg-slate-200 rounded-xl shadow-sm shadow-black h-10 w-full"/>
       
       <div className='flex  justify-between mt-7'>
        <div>
       <p className='mt-3'>Enter your PNR</p>
       <input className="  bg-slate-200 rounded-xl h-10 w-full"/></div>
       


</div>
       <div className='flex  justify-between mt-7'>
       <select className=' mt-3 h-10 bg-slate-200 rounded-xl w-28 p-2' >
       <option value="Type">Type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>


<select className=' mt-3 mx-40 bg-slate-200 rounded-xl w-32 p-2'>
<option value="sub-type">Sub-type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>
</div><p className='mt-9'>Grievances in detail</p>
<input className=" rounded-md h-16 w-full bg-slate-200"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <p>Enter your Number</p>
       <input className=" bg-slate-200 rounded-xl shadow-sm shadow-black h-10 w-full"/>
       
       <div className='flex  justify-between mt-7'>
        <div>
       <p className='mt-3'>Enter your PNR</p>
       <input className="  bg-slate-200 rounded-xl h-10 w-full"/></div>
       


</div>
       <div className='flex  justify-between mt-7'>
       <select className=' mt-3 h-10 bg-slate-200 rounded-xl w-28 p-2' >
       <option value="Type">Type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>


<select className=' mt-3 mx-40 bg-slate-200 rounded-xl w-32 p-2'>
<option value="sub-type">Sub-type</option>
<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select>
</div><p className='mt-9'>Grievances in detail</p>
<input className="  rounded-md h-16 w-full bg-slate-200"/>
      </TabPanel>
      
    
     </form>
    </Box>

  );

};
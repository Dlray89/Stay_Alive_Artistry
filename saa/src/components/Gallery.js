import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { makeStyles, Divider, Button } from '@material-ui/core/';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { three_eye_art } from '../data/collection_three_eyes_data'
import { world_art } from '../data/collection_world_art_data'
import { Cartoon_Art } from '../data/cartoon_charcters'
import { Life_Art } from '../data/life_art_pic_data'
import HeaderPic from '../img/intro/gallery_header.png'
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'white',
  },
  header: {
      background:'url('+ HeaderPic +')',
      height:'70vh',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100%',
      backgroundPosition:'center',
      border:'solid 2px red',
      backgroundColor:'lightpink',
      backgroundAttachment:'scroll'
  },
  nav: {
      border:'solid 2px red',
      display:'flex',
      justifyContent:'space-evenly',
      padding:'1%'
  },
  navLinks: {
    textDecoration:'none',
    width:'80%'
  },
  navButtons:{
    border:'solid 2px green',
    width:'80%',
    background:'#db8b1e'
  },
     tabroot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  

}));


export default function AdvancedGridList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
          <div className={classes.header}>
            header
        </div>

        <div className={classes.nav}>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>Home</Button></Link>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>About SAA</Button></Link>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>Art Request</Button></Link>
        </div>
    

<div className={classes.tabroot}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
      <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', width:'30%', margin:'0 auto'}}>
          {three_eye_art.map(pic => (
              <img src={pic.img} width='20%' />
          ))}
          
      
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
    </div>
  );
}
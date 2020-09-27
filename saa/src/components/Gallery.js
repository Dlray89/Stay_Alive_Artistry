import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { makeStyles, Divider, Button, Card, CardContent, CardActionArea, CardActions, CardMedia, Tab, Tabs } from '@material-ui/core/';
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
import Modal from './UI/view_piece_modal'
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
     
      backgroundColor:'lightpink',
      backgroundAttachment:'scroll'
  },
  nav: {
    
      display:'flex',
      justifyContent:'space-evenly',
      padding:'1%'
  },
  navLinks: {
    textDecoration:'none',
    width:'80%'
  },
  navButtons:{
    border:'solid 1px #cb006d',
    width:'80%',
   
    color:'#cb006d',
    '&:hover': {
        background:'lightpink',
        color:'white'
    }
  },
  cardroot: {
      maxWidth:345,
      border:'solid 1px #cb006d',
      margin: '2% auto'
  },
  cardButtons: {
      border:'solid 1px white',
    width:'60%',
    background:'#cb006d',
    color:'white',
    '&:hover': {
        background:'lightpink',
        color:'white'
    }
  }
   

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
            
        </div>
        <Divider style={{background:"#cb006d"}} />

        <div className={classes.nav}>
            <Link to='/' className={classes.navLinks}><Button className={classes.navButtons}>Home</Button></Link>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>About SAA</Button></Link>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>Art Request</Button></Link>
        </div>
        <Divider style={{background:"#cb006d"}} />
        <div>
             <h1>Three eye collection</h1>
        </div>

        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
           
            {three_eye_art.map(pic => (
                <Card className={classes.cardroot}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image={pic.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pic.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pic.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Modal name={pic.title} pic={pic.img} painter={pic.author} details={pic.details} />
        <Button  className={classes.cardButtons} size="small" color="primary">
          Request Piece
        </Button>
      </CardActions>
    </Card>
            ))}
        </div>
    


    </div>
  );
}
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { makeStyles, Divider, Button, Card, CardContent, CardActionArea, CardActions, CardMedia, TextField, Select, MenuItem } from '@material-ui/core/';
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
import { saa_gallery } from '../data/gallery_intro'
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

const galleries = [
    {
        name: 'Three Eye Gallery'
    },
    {
        name: 'Cartoon Gallery'
    },
    {
        name:'World Art Gallery'
    },
    {
        name:'Women Empowerment Gallery'
    },
    {
        name:'Misc Art'
    }
]


export default function AdvancedGridList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [gallery, setGallery] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handle_galleryInput = (event) => {
      setGallery(event.target.value)
  }

  return (
      <div>
          <div className={classes.header}>
            
        </div>
        <Divider style={{background:"#cb006d"}} />

        <div className={classes.nav}>
            <Link to='/' className={classes.navLinks}><Button className={classes.navButtons}>Home</Button></Link>
            <Link to='/sidebar' className={classes.navLinks}><Button className={classes.navButtons}>About SAA</Button></Link>
            <Link className={classes.navLinks}><Button className={classes.navButtons}>Contact</Button></Link>
        </div>
        <Divider style={{background:"#cb006d"}} />
        <div style={{border:'solid 1px #cb006d', width:'94%', margin:'2% auto', background:'linear-gradient(to right, #fbd3e9, #cb006d)'}}>
             <h1>Stay Alive Artistry Art Gallery</h1>
        </div>

        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>

            <div style={{border:'solid 1px #cb006d', width:'25%', padding:'1%', height:'100vh', }}>
                ABOUT SAA

                <p style={{border:'solid 1px #cb006d', padding:'2%', fontSize:'12px', textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim odio, elementum posuere egestas quis, 
                convallis eget sem. Ut maximus convallis metus, vel dignissim purus imperdiet a. Cras feugiat massa sed neque 
                euismod, ut aliquam libero sagittis. Nunc auctor quam vel orci semper tristique. Vestibulum pretium, mi sed tristique 
                pharetra, metus augue faucibus eros, vitae sollicitudin sapien nulla eget magna. Nullam vitae consectetur dolor, a 
                volutpat odio. Fusce molestie eros ac semper vestibulum. Suspendisse sodales nibh sem, ut finibus erat cursus vitae. 
                Cras eu mi ut mauris eleifend interdum. Vestibulum ullamcorper commodo arcu sed finibus. Maecenas porttitor arcu ac 
                lacinia semper. Nam non suscipit nibh. Nulla dolor enim, iaculis eget tortor quis, sollicitudin aliquet enim. Aenean 
                ullamcorper sem eget leo tempor, et tempus velit ultrices
                </p>  
                 <div style={{display:'flex', flexDirection:'column', border:'solid 1px #cb006d'}}>

                     <h3>Request Art</h3>

                     <div style={{width:'90%', margin:'0 auto'}}>
                         <TextField style={{border:'solid 1px #cb006d', width:'100%', margin:'0 auto', borderRadius:'5px'}} variant='outlined' type='text' placeholder='Name' />
                     </div>
                    
                    <div style={{width:'90%', margin:'2% auto'}}>
                        <TextField style={{border:'solid 1px #cb006d', width:'100%', margin:'0 auto', borderRadius:'5px'}} type='email' variant='outlined' placeholder='Email'  />
                    
                    </div>

                    <div style={{width:'90%', margin:'0 auto'}}>
                        <TextField style={{border:'solid 1px #cb006d', width:'100%', margin:'0 auto', borderRadius:'5px'}} placeholder='Art Request details' type='text' variant='outlined' multiline rowsMax={5} />
                    </div>

                    <div style={{ width:'90%', margin:'2% auto'}}>
                        <Button style={{width:'100%', background:"#cb006d", color:'white'}} variant='outlined'>Send Request</Button>
                    </div>
                    


                </div>                              
                </div>

               
           <div style={{border:'solid 1px #cb006d', width:'65%', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {saa_gallery.map(pic => (
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
       
      </CardActions>
    </Card>
            ))}
            </div>
        </div>
    


    </div>
  );
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Saa from '../img/angel_price.gif'
import { Button, makeStyles } from "@material-ui/core"
import './intro.css'


const useStyles = makeStyles((theme) => ({
    button: {

        '&:hover': {
            background: '#db8b1e',
            color: '#cb006d'
        }
    }
}))



const Intro = () => {
    const classes = useStyles()
    const [toggle, setToggle] = useState(false)

    const handleToggel = () => {
        setToggle(true)
    }

    const closeToggle = () => {
        setToggle(false)
    }


    return (

        <div style={{ backgroundImage: 'url(' + Saa + ')', backgroundSize: '100%', backgroundRepeat: 'no-repeat', overflowY: 'hidden', height: '100vh' }}>

            <div style={{width: '30%', margin: '32% auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Link to='/gallery' className="slide-in-left" ><Button className={classes.button} color='secondary' variant='contained'>Gallery</Button></Link>
                <Link className='slide-in-top'><Button className={classes.button} color='secondary' variant='contained'>About</Button></Link>
                {toggle ? (
                    <div>Coming Soon</div>

                ) : (
                        <Link className='slide-in-right'><Button className={classes.button} color='secondary' variant='contained'>Request Art</Button></Link>

                    )}
            </div>





        </div>
    )
}

export default Intro
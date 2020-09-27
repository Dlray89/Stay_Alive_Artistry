import React, { useState } from 'react'
import { makeStyles ,Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        border:'solid 1px white',
    width:'100%',
    background:'#cb006d',
    color:'white',
    '&:hover': {
        background:'lightpink',
        color:'white'
    }
    }
}))

const Modal = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose= () => {
        setOpen(false)
    }

    return(
        <div style={{width:'70%', border:"solid 2px blue"}}>
            <Button className={classes.button} onClick={handleOpen}>View Piece</Button>
            <Dialog open={open}>
                <DialogTitle style={{margin:'0 auto', width:'83%', textAlign:'center'}}>{props.name} <br />{props.painter}</DialogTitle>
                <Divider style={{background:'#cb006d'}}  />
                <DialogContent>
                    <div style={{border:'solid 1px #cb006d', textAlign:'center', backgroundImage:'url('+ props.pic +')', height:'50vh', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'80%'}}>
                    
                    </div>
                    <Divider style={{background:'#cb006d', margin:'2% auto', width:'100%'}}  />
                    <DialogContentText style={{textAlign:'center'}}>
                           <span style={{color:'#cb006d'}}>Descriptions: </span>{props.details}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button className={classes.button}>Request This piece</Button>
                    <Button className={classes.button} onClick={handleClose}>Close</Button>
                </DialogActions>


            </Dialog>
            
        </div>
    )
}

export default Modal
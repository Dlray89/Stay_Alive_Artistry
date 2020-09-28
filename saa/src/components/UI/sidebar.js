import React from 'react'
import { List,ListItem, ListItemText, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        border:'solid 2px red'
    },
    listContainer: {
        border:'solid 2px blue'
    }
}))


const Sidebar = () => {
    const classes = useStyles()

    return(
        <div className={classes.root} >
            <List className={classes.listContainer}>
                
        
                    
            </List>
        </div>
    )
}

export default Sidebar
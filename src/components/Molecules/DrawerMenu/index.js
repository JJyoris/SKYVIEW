
import React from 'react'
import { makeStyles, Drawer } from '@material-ui/core'
import MenuList from '../../Atoms/MenuList'
const useStyles = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar
}))

const DrawerMenu = ({headerOptions, onClose, open, onClick}) => {
    const classes = useStyles();
    return (
        <Drawer
        variant="temporary"
        anchor="top"
        onClose={onClose}
        open={open} 
        transitionDuration={{ enter: 500, exit: 1000 }}
        >
            <div className={classes.toolbar}>               
                <MenuList headerOptions={headerOptions} onClick={onClick} />
             </div> 
            
        </Drawer>
    )
}

export default DrawerMenu

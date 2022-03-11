import {useState} from 'react'

import useStyles from './NavMenu.styles'

import {
    Box,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
    Button,
    Divider,
    ButtonBase,
    Link
} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'

const MENU_ITEMS = [
    ['Foster Marketplace', 'https://www.fostermarketplace.io/'],
    ['Fost Web Demo', 'https://demo.fostermarketplace.io/'],
    ['Extraordinary Turkey Circus', 'https://extraordinary-turkey-circus-86wvx.ondigitalocean.app/']
]

const NavMenu = () => {
    const [dropdownEl, setDropdownEl] = useState(null)
    const dropdownOpen = Boolean(dropdownEl)

    const handleToggleClick = event => {
        setDropdownEl(event.currentTarget)
    }
    const handleDropdownClose = () => {
        setDropdownEl(null)
    }

    const classes = useStyles()

    return (
        <div>
            <IconButton className={classes.menuToggle} onClick={handleToggleClick}>
                <img src="/img/menu-toggle.png" alt="" />
            </IconButton>
            <Menu
                getContentAnchorEl={null}
                anchorEl={dropdownEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                classes={{paper: classes.menu}}
                open={dropdownOpen}
                onClose={handleDropdownClose}
            >
                {/* {user && <Divider />} */}
                {MENU_ITEMS.map(([title, link], i) => (
                    <MenuItem key={`menu-item-${i}`}>
                        {/* <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon> */}
                        <Link
                            variant="subtitle2"
                            target="_blank"
                            href={link}
                            title={title}
                        >
                            {title}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default NavMenu

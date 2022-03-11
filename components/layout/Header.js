import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-scroll'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
    IconButton,
    Container,
    Box
} from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import MenuIcon from '@material-ui/icons/Menu'

import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import useWalletBalance from '../../hooks/useWalletBalance'
import {useWallet} from '@solana/wallet-adapter-react'

import {Toaster} from 'react-hot-toast'

import NavMenu from './NavMenu'

function ElevationScroll(props) {
    const {children} = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    })
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: `5em`,
        [theme.breakpoints.down('md')]: {
            marginBottom: '4em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2em'
        }
    },
    logo: {
        height: 50,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'auto'
        }
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: `50px`,
        width: `50px`,
        color: `#fff`,
        [theme.breakpoints.down('xs')]: {
            height: `40px`,
            width: `40px`
        }
    },
    drawer: {
        backgroundColor: theme.palette.secondary.main,
        padding: '0 6em'
    },
    link: {
        fontSize: '1.25em',
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.info.main
        }
    }
}))

const Header = () => {
    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    const [openDrawer, setOpenDrawer] = useState(false)

    const router = useRouter()

    return (
        <>
            <ElevationScroll>
                <Toolbar
                    disableGutters
                    style={{
                        margin: '0 auto',
                        width: '100%',
                        padding: 30,
                        backgroundColor: 'white'
                    }}
                >
                    <Link href="/" to="/" style={{maxWidth: '100%'}}>
                        <img src="img/logo.png" loading="lazy" className={classes.logo} />
                    </Link>
                    <Box flexGrow={1} />
                    <Box display="flex" alignItems="center">
                        <WalletMultiButton />
                        <Box marginLeft={2}>
                        <NavMenu />
                        </Box>
                    </Box>
                </Toolbar>
            </ElevationScroll>
        </>
    )
}
export default Header

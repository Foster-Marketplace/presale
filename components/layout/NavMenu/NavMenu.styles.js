import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    menuToggle: {
        '& img': {
            width: 24,
            height: 24,
            [theme.breakpoints.up('sm')]: {
                width: 36,
                height: 36
            }
        }
    },
    menu: {
        minWidth: '240px',
        backgroundColor: `${theme.palette.common.white} !important`
    }
}))

export default useStyles

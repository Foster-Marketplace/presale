import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from '@iconify/react';
// if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';

import { socialMedia } from "../data/socialMedia";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    color: "#999",
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Social = ({ color }) => {
  const classes = useStyles();
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, twitter, github, homepage } = socialMedia;

  // if you add twitter , it will be
  // const { instagram, facebook, github, homepage, twitter } = socialMedia;
  {
    //  and add this code to line 98,
    /* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
       <TwitterIcon className={classes.snsIcon} />
    </Grid> */
  }
  return (
    <Grid item  style={{marginLeft: "3.75em"}}>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/bunnyfreaksNFT"
      >
        <TwitterIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://discord.gg/NdvCYfgGNq"
      >
        {/* <GitHubIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        /> */}
        <Icon icon="mdi:discord" style={{marginRight: "0"}} className={classes.snsIcon}/>
      </Grid>
      {/* add social media*/}
    </Grid>
  );
};

export default Social;

import { Link } from 'react-scroll'

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";

import { routes } from "../../data/routes";
import Social from "../../components/Social";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #999",
    borderBottom: "1px solid #999",
    backgroundColor: "#090909",
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "12.5em",
  },
  link: {
    fontSize: "1.25em",
    color: "#999",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#999",
    marginTop: "25px",
    marginBottom: "25px",
    fontSize: "0.7500em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  footbar: {
    paddingTop: "1.5625em",
    paddingBottom: "1.5625em",
    margin: "0"
  }
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  return (
    <footer>
      <div className={classes.footer}>
        {/* <Container maxWidth="lg">
          <Grid item container alignItems="center" className={classes.footbar}>
            <Grid item container md={3} sm={3}>
              <Link href="/" to="">
                <img
                  src="logo.png"
                  loading="lazy"
                  height="70"
                />
              </Link>
            </Grid>
            <Grid item container md={9} sm={9} align="center" justifyContent="flex-end">
              {path.map(({ name, link }) => (
                <Grid item key={link} style={{ marginLeft: "3.28125rem" }}>
                  <Link href="" style={{textDecoration:"none"}} to={link} duration={2000} spy={true} smooth={true}>
                    <Typography
                      className={classes.link}
                      style={{
                        fontWeight: router.pathname === link && "bold",
                        borderBottom:
                          router.pathname === link && "1px solid #757ce8",
                      }}
                    >
                      {name}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container> */}
      </div>
    </footer>
  );
};

export default Footer;

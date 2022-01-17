import Layout from "../components/layout/Layout";
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: 200,
    height: 55,
    backgroundImage: "url('img/btn-bg2.png')",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 30,
    fontWeight: "bold !important",
    "&:hover": {
      color: "#536aba"
    }
  },
  btn_officer: {
    backgroundImage: "url('btn-bg2.png')",
    minHeight: '55px',
    minWidth: '300px',
    color: "#ffffff",
    textTransform: 'initial'
  },
  btn_sale: {
    width: 200,
    height: 55,
    backgroundImage: "url('btn-bg2.png')",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    borderRadius: 30,
    fontWeight: "bold !important",
    "&:hover": {
      color: "#536aba"
    },
    fontSize: "24px"
  },
  titleFontStyle: {
    fontSize: 72,
    lineHeight: "23.4px",
    color: "#999",
    fontWeight: "700"
  },
  contentFontStyle: {
    fontSize: 18,
    marginTop: 16,
    lineHeight: "23.4px",
    color: "#999",
    fontWeight: "400"
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
  marketImg: {
    zIndex: 0,
    background: "linear-gradient(0deg,rgba(7,7,7,.3),rgba(7,7,7,.3)),url(bg2.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "center",
    minHeight: 660,
  },
  clock: {
    color: 'white',
    backgroundColor: 'rgba(7, 7, 7, 0.16)',
    border: "1px solid #fff",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    borderRadius: 46,
    padding: "50px 0",
  }
}));

const index = (props) => {
  const classes = useStyles();

  const { camp } = props;

  return (
    <Layout
      title="Bunny Freaks"
      description="10,000 unique avatar collectibles with over 80 traits. Find the perfect match to your freaky side within and unleash it into the metaverse"
    >
      <Grid container justifyContent="space-between" style={{ padding: 30 }}>
        <Grid item sm={12} md={6}>
          <img src="img/1.png" style={{ width: "100%" }} />
        </Grid>
        <Grid item sm={12} md={5}>
          <Typography variant="h1" style={{ paddingTop: 30 }}>
            LIFT Token Presale
          </Typography>
          <Typography variant="h3" style={{ paddingTop: 30 }}>
            Introducing a new currency for the Digital Art World economy.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" style={{ padding: 30 }}>
        <Grid item xs={12}>
          <Typography variant="h1">
            LIFT I Token Presale I Phase 2
          </Typography>
          <Typography variant="h3">
            The first Community Governed, subscription-based, NFT Streaming Protocol on Solana.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" style={{ padding: "0px 30px" }}>
        <Grid item sm={12} md={7}>
          <div style={{ display: "flex" }}>
            
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <img src="img/2.png" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Layout >
  );
};

export default index;

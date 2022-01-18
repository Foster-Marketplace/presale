import Layout from "../components/layout/Layout";
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image';
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  priceContainer: {
    padding: 10,
    marginTop: 15,
    backgroundColor: "#EFF0F6",
    borderRadius: 10,
    color: "#5E2028",
    fontSize: 30,
    display: "flex",
    alignItems: "center"
  }
}));

const index = (props) => {
  const classes = useStyles();

  const { camp } = props;

  const [solPrice, setSolPrice] = useState(1);

  useEffect(() => {
    fetch("https://price-api.sonar.watch/prices/So11111111111111111111111111111111111111112")
      .then(response => response.json())
      .then(data => {
        setSolPrice(data.price);
      });

    setInterval(() => {
      fetch("https://price-api.sonar.watch/prices/So11111111111111111111111111111111111111112")
        .then(response => response.json())
        .then(data => {
          setSolPrice(data.price);
        });
    }, 5000);
  }, []);

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
        <Grid item sm={12} md={7} container alignItems="center">
          <div style={{ display: "flex" }}>
            <div>
              <Typography variant="h4">
                Hard Cap of Phase 2
              </Typography>
              <div className={classes.priceContainer}>
                <img src="img/sol_mark.png" />
                <span style={{ marginLeft: 15 }}>1500 SOL</span>
              </div>
            </div>
            <div style={{ marginLeft: 50 }}>
              <Typography variant="h4">
                Sol Token Price
              </Typography>
              <div className={classes.priceContainer}>
                <img src="img/sol_mark.png" />
                <span style={{ marginLeft: 15 }}>${solPrice}</span>
              </div>
            </div>
            <div style={{ marginLeft: 50 }}>
              <Typography variant="h4">
                Available LIFT
              </Typography>
              <div className={classes.priceContainer}>
                <img src="img/lift_mark.png" />
                <span style={{ marginLeft: 15 }}>450,000 LIFT</span>
              </div>
            </div>
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

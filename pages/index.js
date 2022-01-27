import Layout from "../components/layout/Layout";
import { Container, Grid, Typography, LinearProgress, Button, Box, Input, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image';
import { useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

import {
  LAMPORTS_PER_SOL,
  Connection,
  clusterApiUrl,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  priceContainer: {
    padding: 10,
    marginTop: 15,
    backgroundColor: "#EFF0F6",
    borderRadius: 10,
    color: "#5E2028",
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    fontWeight: "bold"
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    },
  }
}));

const index = (props) => {
  const classes = useStyles();

  const [solPrice, setSolPrice] = useState(1);
  const [amount, setAmount] = useState(0);
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana")
      .then(response => response.json())
      .then(data => {
        setSolPrice(parseFloat(data[0].current_price).toFixed(2));
      });

    setInterval(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana")
        .then(response => response.json())
        .then(data => {
          setSolPrice(parseFloat(data[0].current_price).toFixed(2));
        });
    }, 3000);
  }, []);

  async function purchaseToken() {
    var transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(process.env.NEXT_PUBLIC_DEPOSIT_WALLET), // owner's public key
        lamports: amount * LAMPORTS_PER_SOL // Investing 1 SOL. Remember 1 Lamport = 10^-9 SOL.
      }),
    );

    // Setting the variables for the transaction
    transaction.feePayer = publicKey;
    let blockhashObj = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhashObj.blockhash;

    // Request creator to sign the transaction (allow the transaction)
    let signed = await signTransaction(transaction);
    // The signature is generated
    let signature = await connection.sendRawTransaction(signed.serialize());
    // Confirm whether the transaction went through or not
    await connection.confirmTransaction(signature);

    let result = await axios({
      method: 'post',
      url: '/api/saveTransactions',
      data: {
        transaction: signature,
        wallet: publicKey.toString(),
        solPrice: solPrice,
        solAmount: amount,
        liftAmount: Math.floor(solPrice * amount / 0.01)
      }
    });
    if (result.status == 200) {
      alert("success");
    }
  };

  return (
    <>
      <Layout
        title="LIFT Token Presale"
        description="Seed Presale Investor Portal for LIFT Token, the native utility token for Foster Marketplace"
        ogImage="img/1.png"
        url="https://www.liftpresale.com/"
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
            <Typography variant="h4" style={{ paddingTop: 30 }}>
              read participation documentation&nbsp;
              <Link
                href="https://indd.adobe.com/view/c1afd2b2-6186-4271-b71d-fb35833c8d45"
                target="_blank"
                style={{ color: "#DEEFD0", textDecoration: "underline" }}
              >here</Link>
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
            <div className={classes.inputContainer}>
              <div style={{ marginBottom: 20 }}>
                <Typography variant="h4">
                  Hard Cap of Phase 2
                </Typography>
                <div className={classes.priceContainer}>
                  <img src="img/sol_mark.png" />
                  <span style={{ marginLeft: 15 }}>4500 SOL</span>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <Typography variant="h4">
                  Sol Token Price
                </Typography>
                <div className={classes.priceContainer}>
                  <img src="img/sol_mark.png" />
                  <span style={{ marginLeft: 15 }}>${solPrice}</span>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <Typography variant="h4">
                  Available LIFT
                </Typography>
                <div className={classes.priceContainer} style={{ backgroundColor: "#378287" }}>
                  <img src="img/lift_mark.png" />
                  <span style={{ marginLeft: 15 }}>45,000,000 LIFT</span>
                </div>
              </div>
            </div>
            <div className={classes.inputContainer}>
              <div className={classes.priceContainer}>
                <Input type="number" style={{ width: 80, fontSize: 20 }} onChange={(e) => {
                  setAmount(e.target.value);
                }} />
                <img src="img/sol_mark.png" />
                <span style={{ marginLeft: 5 }}>SOL</span>
              </div>
              <div className={classes.priceContainer}>
                <span style={{ marginRight: 5 }}>{Math.floor(solPrice * amount / 0.01)}</span>
                <img src="img/lift_mark.png" />
                <span style={{ marginLeft: 5 }}>LIFT</span>
              </div>
              <Button className={classes.priceContainer} style={{ backgroundColor: "#DEEFD0", textTransform: "none" }} onClick={purchaseToken}>
                Purchase LIFT
              </Button>
            </div>
          </Grid>
          <Grid item sm={12} md={4}>
            <img src="img/2.png" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Layout >
      <ParticlesBackground />
    </>
  );
};

export default index;

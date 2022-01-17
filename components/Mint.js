import { Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactClock from "./clock";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";

import { Toaster } from "react-hot-toast";
import useWalletNfts from "../hooks/useWalletNFTs";
import { shortenAddress } from "../utils/candyMachine";

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

const Mint = (props) => {
  const classes = useStyles();

  const [balance] = useWalletBalance();
  const {
    isSoldOut,
    mintStartDate,
    mintPresaleDate,
    isMinting,
    startMint,
    nftsData,
    isWhitelisted,
    wallet
  } = useCandyMachine();

  const [isLoading, nfts] = useWalletNfts();

  const { connected, publicKey } = useWallet();

  const [isPresaleLive, setIsPresaleLive] = useState(false);
  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (new Date(mintPresaleDate).getTime() < Date.now()) {
      setIsPresaleLive(true);
    }
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
  }, []);

  return (
    <>
      <Toaster />
      {/* {isSoldOut ? ( */}
      <>
        <Grid item container alignItems="center" style={{ marginTop: "200px" }}>
          <Typography style={{
            color: "white",
            fontSize: 72,
            fontWeight: "bold",
          }}>
            The Bunny Freaks<br /><label style={{
              fontSize: "72px",
              color: "#536aba"
            }}>is sold out!</label>
          </Typography>
        </Grid>
        <WalletMultiButton
          className={classes.btn}
        />
      </>
      {/* ) : (
        <>
          {!isPresaleLive ? (
            <>
              <Grid item container alignItems="center" style={{ marginTop: '200px' }}>
                <Grid
                  item
                  container
                  md={12}
                  sm={12}
                  xs={12}
                  direction="column"
                  alignItems="center"
                  className={classes.clock}
                >
                  <ReactClock
                    startDate={new Date(mintPresaleDate).getTime()}
                    text1="TIME UNTIL"
                    text2="PRESALE"
                    // complete={() => setIsPresaleLive(true)}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              {!isMintLive ? (
                <>
                  <Grid item container alignItems="center" style={{ marginTop: '200px' }}>
                    <Grid
                      item
                      container
                      md={12}
                      sm={12}
                      xs={12}
                      direction="column"
                      alignItems="center"
                      className={classes.clock}
                    >
                      <ReactClock
                        startDate={new Date(mintStartDate).getTime()}
                        text1="PRESALE IS LIVE!"
                        text2="TIME UNTIL PUBLIC SALE"
                        complete={() => setIsMintLive(true)}
                      />
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item container alignItems="center" style={{ marginTop: "200px" }}>
                    <Typography style={{
                      color: "white",
                      fontSize: 72,
                      fontWeight: "bold",
                    }}>
                      The Bunny Freaks<br /><label style={{
                        fontSize: "72px",
                        color: "#536aba"
                      }}>public sale is live!</label>
                    </Typography>
                  </Grid>
                </>
              )}
              {isPresaleLive && (
                <>
                  <Grid item container alignItems="center" id="Mint">
                    <Grid item
                      container
                      style={{ justifyContent: 'space-between' }}
                    >
                      <Typography
                        style={{
                          marginTop: '100px',
                          marginBottom: '25px',
                          fontSize: 17,
                          color: '#999999',
                        }}>
                        Available
                      </Typography>
                      <Typography
                        style={{
                          marginTop: '100px',
                          marginBottom: '25px',
                          fontSize: 17,
                          color: '#999999'
                        }}>
                        <span style={{ color: 'white' }}>{nftsData.itemsRedeemed}</span> / {nftsData.itemsAvailable}
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={nftsData.itemsRedeemed / nftsData.itemsAvailable * 100} style={{ width: '100%' }} />
                  <Grid item container alignItems="center">
                    <Grid item
                      container
                      md={12}
                      direction="column"
                      alignItems="center">
                      <Typography
                        style={{
                          marginTop: '50px',
                          fontSize: 32,
                          color: '#fff',
                        }}>
                        Price: 3 Sol
                      </Typography>
                      {connected ? (
                        <>
                          {publicKey && (
                            <Typography
                              style={{
                                marginTop: '20px',
                                fontSize: 16,
                                color: '#fff',
                              }}>
                              wallet address: {shortenAddress(publicKey.toString())}
                            </Typography>
                          )}
                          <Button
                            rel="noreferrer noopener"
                            className={classes.btn}
                            onClick={() => startMint(isMintLive)}
                            disabled={(!isMintLive && !isWhitelisted) || isMinting}
                          >
                            Mint
                          </Button>
                        </>
                      ) : (
                        <>
                          <WalletMultiButton
                            className={classes.btn}
                          />
                        </>
                      )}
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          )}
        </>
      )} */}
      {/* <Grid item container alignItems="center" style={{ marginTop: '200px' }}>
        <Grid
          item
          container
          md={12}
          sm={12}
          xs={12}
          direction="column"
          alignItems="center"
          className={classes.clock}
        >
          <ReactClock
            day={true}
            startDate="2021-12-22" />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Mint;

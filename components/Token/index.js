import React from "react";
import styles from "./styles.module.css";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Token() {
  return (
    <Grid
      className="container align-items-center"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} md={4}>
        <Image
          className="img-fluid"
          src={`/images/token.png`}
          height={420}
          width={420}
          alt={`Social Icon token`}
        />
        <Button className={styles.BuyNowButton} variant="contained">
          Buy Now
        </Button>
      </Grid>

      <Grid item xs={12} md={8}>
        <div className="my-auto my-auto">
          <Typography className={styles.TokenText} variant="p" color="initial">
            After losing all his savings in $LUNA, Wojak found relief in
            $SKOOMA. He is still poor af, but he does not give a shit about it
            anymore. $SKOOMA is the best drug to forget your rugged past! Get
            addicted now and don’t forget to involve your friends and family!
          </Typography>
        </div>
      </Grid>
      <div className="ms-3 mt-3">
        <Typography>
          <span className={styles.TokenHeader}>Token Contract: </span>{" "}
          <span className={styles.TokenContent}>
            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
          </span>
        </Typography>

        <Typography>
          <span className={styles.TokenHeader}>Max Supply: </span>{" "}
          <span className={styles.TokenContent}>69000000000</span>
        </Typography>

        <Typography>
          <span className={styles.TokenHeader}>Sell Tax: </span>{" "}
          <span className={styles.TokenContent}>4.2</span>
        </Typography>
      </div>
    </Grid>
  );
}

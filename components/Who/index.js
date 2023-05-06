import React from "react";
import styles from "./styles.module.css";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Who() {
  return (
    <div style={{ backgroundColor: "#7A1D4A", marginTop: 40, maxHeight: 400 }}>
      <Typography className={styles.Header}>Who is it For</Typography>
      <Grid
        className="container align-items-center"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} md={8}>
          <div className="my-auto my-auto">
            <Typography
              className={styles.TokenText}
              variant="p"
              color="initial"
            >
              After losing all his savings in $LUNA, Wojak found relief in
              $SKOOMA. He is still poor af, but he does not give a shit about it
              anymore. $SKOOMA is the best drug to forget your rugged past! Get
              addicted now and don’t forget to involve your friends and family!
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            className="img-fluid"
            src={`/images/sise.png`}
            height={776}
            width={343}
            alt={`Social Icon token`}
          />
          <Button className={styles.BuyNowButton} variant="contained">
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

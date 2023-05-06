import React from "react";
import styles from "./styles.module.css";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Who() {
  const whos = [
    { content: "100x Leverage traders", icon: "ok" },
    { content: "If you pay more to the gas than the actual token", icon: "ok" },
    { content: "Bald men over 35 years old", icon: "ok" },
    { content: "Not bald men over 35 years old", icon: "ok" },
    { content: "Anyone who is tired of scammer teams", icon: "ok" },
    { content: "People using Auto-Aim in PC games", icon: "error" },
    { content: "Influencers who dump on their community", icon: "error" },
    { content: "Do Kwon", icon: "error" },
    { content: "Sea Cucumbers because they resemble dicks", icon: "error" },
  ];

  return (
    <div className={styles.MainDiv}>
      <Typography className={styles.Header}>Who is it For</Typography>
      <Grid
        className="container align-items-center"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="flex-end"
      >
        <Grid xs={0} md={5}></Grid>
        <Grid className="mx-auto" item xs={12} md={7}>
          <div className="w-md-50 mt-4">
            {whos.map((who, index) => (
              <Typography key={index} className={styles.TokenText}>
                <span className="me-2">
                  <Image
                    src={`/images/icons/${who.icon}.png`}
                    height={21}
                    width={21}
                    alt={`Social Icon ${who.icon}`}
                  />
                </span>
                {who.content}
              </Typography>
            ))}
          </div>
        </Grid>

        <Grid className={styles.Sise} item xs={12} md={4}>
          <Image
            className={`${styles.Image}`}
            src={`/images/sise.png`}
            height={776}
            width={343}
            alt={`Social Icon token`}
          />
        </Grid>
      </Grid>
    </div>
  );
}

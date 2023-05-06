import React from "react";
import styles from "./styles.module.css";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function Famous() {
  const whos = [
    { name: "Donald Trump", icon: "trump" },
    { name: "Cookie Monster", icon: "cookie" },
    { name: "Elon Musk", icon: "musk" },
  ];
  return (
    <>
      <Divider style={{ height: 16, backgroundColor: "#D9D9D9" }} />

      <div
        className={`mx-auto d-flex align-items-center justify-content-center ${styles.HeaderParent}`}
      >
        <Typography className={`${styles.Header}`}>
          FAMOUS SKOOMA HEADS
        </Typography>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5">
        {whos.map((who, index) => (
          <div className="text-center me-5">
            <Image
              src={`/images/${who.icon}.png`}
              height={230}
              width={234}
              alt={`Social Icon ${who.icon}`}
            />

            <Typography key={index} className={`mt-5 ${styles.NameText}`}>
              {who.name}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
}

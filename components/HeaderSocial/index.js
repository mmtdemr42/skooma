import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export default function HeaderSocial() {
  const socials = [
    { icon: "telegram", url: "/" },
    { icon: "twitter", url: "/" },
    { icon: "dext", url: "/" },
    { icon: "etherscan", url: "/" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <Button
          key={index}
          className="bg-white mt-2 me-2 rounded-pill"
          variant="contained"
          href={social.url}
          style={{ width: 87, height: 26 }}
        >
          <Image
            src={`/images/icons/${social.icon}.png`}
            height={26}
            width={87}
            alt={`Social Icon ${social.icon}`}
          />
        </Button>
      ))}
      ;
    </>
  );
}

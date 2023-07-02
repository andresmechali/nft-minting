"use client";
// TODO: get this to work using SSR

import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Rinkeby } from "@thirdweb-dev/chains";

export default function NFTLayout({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider activeChain={Rinkeby}>{children}</ThirdwebProvider>;
}

"use client";
// TODO: get this to work using SSR

import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Rinkeby } from "@thirdweb-dev/chains";
import NFTLeft from "@/app/nft/[id]/NFTLeft";
import NFTRight from "@/app/nft/[id]/NFTRight";

export default function NFTLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider activeChain={Rinkeby}>
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        <NFTLeft />
        <NFTRight />
      </div>
    </ThirdwebProvider>
  );
}

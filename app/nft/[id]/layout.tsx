import React from "react";
import NFTLeft from "@/app/nft/[id]/NFTLeft";

export default function NFTLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <NFTLeft />
      <div></div>
    </div>
  );
}

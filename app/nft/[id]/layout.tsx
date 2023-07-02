import React from "react";
import NFTLeft from "@/app/nft/[id]/NFTLeft";
import NFTRight from "@/app/nft/[id]/NFTRight";

export default function NFTLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <NFTLeft />
      <NFTRight />
    </div>
  );
}

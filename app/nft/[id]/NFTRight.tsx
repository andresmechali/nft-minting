"use client";

import {
  useAddress,
  useDisconnect,
  useMetamask,
  useNFTDrop,
} from "@thirdweb-dev/react";
import { Collection } from "@/typings";
import Link from "next/link";
import { useEffect, useState } from "react";
import Claimed from "@/app/nft/[id]/Claimed";

type Props = {
  collection?: Collection;
};

export default function NFTRight({ collection }: Props) {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <>
      {/*  Header */}
      <header className="flex items-center justify-between">
        <Link href="/">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="mx-1 font-extrabold underline decoration-pink-600">
              PAPAFAM
            </span>{" "}
            NFT Market Place
          </h1>
        </Link>
        <button
          className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3"
          onClick={() => {
            address ? disconnect() : connectWithMetamask();
          }}
        >
          {address ? "Sign Out" : "Sign In"}
        </button>
      </header>

      <hr className="my-2 border" />

      {/* Subheader */}
      {address && (
        <p className="text-center text-sm text-rose-400">
          You're logged in with wallet {address.substring(0, 5)}...
          {address.substring(address.length - 5)}
        </p>
      )}

      {/* Content */}
      <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
        {collection ? (
          <>
            <img
              className="w-80 object-cover pb-10 lg:h-40"
              src="https://links.papareact.com/bdy"
              alt="Preview all NFTs"
            />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              {collection.title} | NFT drop
            </h1>

            <Claimed address={collection.address} />
          </>
        ) : (
          <div>
            Collection not found! Try another one.{" "}
            <Link href="/" className="text-pink-600">
              Back home
            </Link>
          </div>
        )}
      </div>

      {/* Mint button */}
      <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
        Mint NFT (0.01 ETH)
      </button>
    </>
  );
}

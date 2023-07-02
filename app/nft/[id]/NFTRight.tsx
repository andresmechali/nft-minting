// "use client";

import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function NFTRight() {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // ---

  return (
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
      {/*  Header */}
      <header className="flex items-center justify-between">
        <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
          The{" "}
          <span className="mx-1 font-extrabold underline decoration-pink-600">
            PAPAFAM
          </span>{" "}
          NFT Market Place
        </h1>
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

      {address && (
        <p className="text-center text-sm text-rose-400">
          You're logged in with wallet {address.substring(0, 5)}...
          {address.substring(address.length - 5)}
        </p>
      )}

      {/* Content */}
      <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
        <img
          className="w-80 object-cover pb-10 lg:h-40"
          src="https://links.papareact.com/bdy"
          alt="Preview all NFTs"
        />
        <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
          The PAPAFAM Ape Coding Club | NFT Drop
        </h1>
        <p className="pt-2 text-xl text-green-500">13/21 NFTs claimed</p>
      </div>

      {/* Mint button */}
      <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
        Mint NFT (0.01 ETH)
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useContract } from "@thirdweb-dev/react";

type Props = {
  address: string;
};

export default function Claimed({ address }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const { contract: nftContract, refetch } = useContract(address, "nft-drop");

  const handleRetry = async () => {
    setError(undefined);
    setLoading(true);
    try {
      const newNftDrop = await refetch();
      const newNftContract = newNftDrop.data;
      if (!newNftContract) return;
      const claimed = await newNftContract.getAllClaimed();
      const total = await newNftContract.totalSupply();
      setClaimedSupply(claimed.length);
      setTotalSupply(total.toNumber());
    } catch {
      const err = "Error fetching NFT supply";
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!nftContract) return;

    const fetchNFTDropData = async () => {
      const claimed = await nftContract.getAllClaimed();
      const total = await nftContract.totalSupply();
      setClaimedSupply(claimed.length);
      setTotalSupply(total.toNumber());
    };

    fetchNFTDropData()
      .catch(() => {
        const err = "Error fetching NFT supply";
        setError(err);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [address, nftContract]);

  if (error) {
    return (
      <p className="pt-2 text-xl text-rose-700">
        {error}
        <button
          className="w-30 ml-2 rounded-xl bg-gray-200 px-2 py-1 text-black hover:bg-gray-400"
          onClick={handleRetry}
        >
          Retry
        </button>
      </p>
    );
  }

  if (loading) {
    return (
      <p className="animate-pulse pt-2 text-xl text-green-500">
        Loading NFT supply...
      </p>
    );
  }

  return (
    <p className="pt-2 text-xl text-green-500">
      {claimedSupply}/{totalSupply} NFTs claimed
    </p>
  );
}

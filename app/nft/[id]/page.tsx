import NFTLeft from "@/app/nft/[id]/NFTLeft";
import NFTRight from "@/app/nft/[id]/NFTRight";
import React from "react";
import { client } from "@/sanity/lib/client";

type NFTProps = {
  params: {
    id?: string;
  };
};

export default async function NFTDropPage({ params: { id } }: NFTProps) {
  const query = `
    *[_type == "collection" && slug.current == $id][0] {
        _id,
        title,
        address,
        description,
        nftCollectionName,
        mainImage {
          asset
        },
        previewImage {
          asset
        },
        slug {
          current
        },
        creator-> {
          _id,
          name,
          address,
          slug {
            current
          }
        }
    }
`;

  const collection = await client.fetch(query, { id });

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <NFTLeft collection={collection} />
      </div>
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/*Loading...*/}
        <NFTRight collection={collection} />
      </div>
    </div>
  );
}

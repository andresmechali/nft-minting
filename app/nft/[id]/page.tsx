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
      <NFTLeft collection={collection} />
      <NFTRight collection={collection} />
    </div>
  );
}

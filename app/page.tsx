import { client } from "@/sanity/lib/client";
import { Collection } from "@/typings";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
  const query = `
    *[_type == "collection"] {
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

  const collections: Collection[] = await client.fetch(query);

  return (
    <div className="max-auto min-h-screen max-w-7xl flex-col px-10 py-20 2xl:px-0">
      <h1 className="tex-4xl mb-10 font-extralight">
        The{" "}
        <span className="mx-1 font-extrabold underline decoration-pink-600">
          PAPAFAM
        </span>{" "}
        NFT Market Place
      </h1>

      <main className="p-10">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collections.map((collection) => (
            <Link key={collection._id} href={`/nft/${collection.slug.current}`}>
              <div className="flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105">
                <img
                  className="h-96 w-60 rounded-2xl object-cover"
                  src={urlForImage(collection.mainImage)?.url()}
                  alt=""
                />
                <div className="p-5">
                  <h2 className="text-3xl">{collection.title}</h2>
                  <p className="mt-2  text-sm text-gray-400">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

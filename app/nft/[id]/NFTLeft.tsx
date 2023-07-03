import { Collection } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  collection?: Collection;
};

export default function NFTLeft({ collection }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
        <img
          className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
          src={
            collection
              ? urlForImage(collection.previewImage)?.url()
              : "https://i.pinimg.com/564x/24/58/5f/24585fc9b7433a224a6ff5506e346969.jpg"
          }
          alt={collection ? collection.description : "Not found"}
        />
      </div>
      <div className="space-y-2 p-5 text-center">
        <h1 className="text-4xl font-bold text-white">
          {collection?.nftCollectionName || "Not found!"}
        </h1>
        <h2 className="text-xl text-gray-300">{collection?.description}</h2>
      </div>
    </div>
  );
}

import Image from "next/image";

const PokeCard = () => {
  return (
    <div className="h-80 w-72">
      <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden rounded-md py-4">
        <Image
          src="/assets/img/blastoise.png"
          alt="Blastoise"
          className="h-full w-full object-contain"
          width="100"
          height="100"
          priority
          unoptimized
        />
      </div>
      <div className="px-8 py-1">
        <p className="text-gray-500 text-sm mb-3">#0009</p>
        <p className="text-2xl text-gray-900">Blastoise</p>
        <div>
          <p className="text-white bg-blue-300 text-sm inline px-4 rounded-sm">
            Water
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;

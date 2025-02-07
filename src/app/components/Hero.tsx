import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/products/cover.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="absolute top-20">
        <Image
          src="/logo.png"
          alt="Shamrock Spirits Logo"
          width={200}
          height={100}
          priority
        />
      </div>
      <div className="bg-black bg-opacity-60 p-4 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-yellow-300">
          Welcome to Shamrock Spirits
        </h1>
      </div>
    </div>
  );
}

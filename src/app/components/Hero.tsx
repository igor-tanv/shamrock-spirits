import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/products/cover.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="absolute top-16 left-4">
        <Image
          src="/shamrock-logo.jpeg"
          alt="Shamrock Spirits Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <h1 className="text-5xl font-bold text-yellow-300 mt-6">
        Welcome to Shamrock Spirits
      </h1>
      <p className="text-lg text-gray-200 mt-4">
        Premium Spirits, Crafted with Care
      </p>
    </div>
  );
}

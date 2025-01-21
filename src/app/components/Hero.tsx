import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-200 via-green-100 to-white py-20 text-center">
      <div className="absolute inset-0 -z-10">
        {/* Optional background image */}
        {/* <Image src="/background.jpg" alt="Background" layout="fill" objectFit="cover" /> */}
      </div>
      <Image
        src="/shamrock-logo.jpeg"
        alt="Shamrock Spirits Logo"
        width={150}
        height={150}
        priority
        className="mx-auto"
      />
      <h1 className="text-5xl font-bold text-green-900 mt-6">
        Welcome to Shamrock Spirits
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Premium Spirits, Crafted with Care
      </p>
    </div>
  );
}

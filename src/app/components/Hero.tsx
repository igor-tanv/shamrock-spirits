import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-green-100 py-20">
      <Image
        src="/shamrock-logo.jpeg"
        alt="Shamrock Spirits Logo"
        width={150}
        height={150}
        priority
      />
      <h1 className="text-4xl font-bold mt-5">Welcome to Shamrock Spirits</h1>
      <p className="text-lg mt-3">Premium Spirits Delivered with Care</p>
    </div>
  );
}

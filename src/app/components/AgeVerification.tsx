'use client'
import { useState, useEffect } from "react";

const AgeVerification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("ageVerified");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVisible(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com"; // Redirect if underage
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-black">Are you 18 or older?</h2>
        <p className="mb-4 text-black">You must be of legal drinking age to enter this site.</p>
        <button onClick={handleAccept} className="bg-green-600 text-white px-4 py-2 rounded-md mr-2">Yes</button>
        <button onClick={handleDeny} className="bg-red-600 text-white px-4 py-2 rounded-md">No</button>
      </div>
    </div>
  );
};

export default AgeVerification;
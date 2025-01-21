export default function Contact() {
    return (
      <div className="py-20 px-10 bg-green-200">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <p className="text-center">
          Email: <a href="mailto:info@shamrockspirits.com" className="text-blue-600 underline">info@shamrockspirits.com</a>
        </p>
        <p className="text-center mt-2">
          Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
        </p>
      </div>
    );
  }
  
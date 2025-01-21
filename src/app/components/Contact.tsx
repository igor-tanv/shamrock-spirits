export default function Contact() {
  return (
    <div className="py-20 px-10 bg-green-200">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
      <form className="max-w-xl mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            placeholder="Your name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="Your email"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

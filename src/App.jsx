import { useEffect, useState } from "react";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch("https://type.fit/api/quotes");
        const data = await res.json();
        setQuotes(data.slice(0, 3));
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setQuotes([{ text: "Unable to load quotes" }]);
      }
    }
    fetchQuotes();
  }, []);

  return (
    <div className="font-sans bg-blue-50">

      <section className="relative h-[75vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-500/60 backdrop-blur-sm"></div>

        <div className="relative text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Cancer Awareness & Support
          </h1>

          <p className="mt-5 text-lg opacity-90 leading-relaxed">
            Providing strength, awareness, and support to those fighting cancer.
            Together, we bring hope.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-7 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition-all"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">
          Get in Touch
        </h2>

        <form className="max-w-xl mx-auto bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl space-y-4 border border-blue-100">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg border h-32 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-100 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Inspirational Quotes
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {quotes.length === 0 ? (
            <p className="text-center col-span-3">Loading...</p>
          ) : (
            quotes.map((q, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-lg rounded-xl border border-blue-200 hover:scale-105 transition-all hover:shadow-2xl"
              >
                <p className="italic text-gray-700">“{q.text}”</p>
              </div>
            ))
          )}
        </div>
      </section>

      <footer className="py-6 text-center bg-blue-700 text-white font-semibold">
        © 2025 Cancer Awareness Initiative — Standing Strong Together 💙
      </footer>
    </div>
  );
}

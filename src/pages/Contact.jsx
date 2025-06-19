const Contact = () => {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300" required />
        <textarea rows="5" placeholder="Your Message" className="p-3 rounded border border-gray-300" required></textarea>
        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

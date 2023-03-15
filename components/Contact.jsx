import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} \nEmail: ${email} \nMessage: ${message}`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="m-5 pt-10 flex flex-col items-center justify-center mb-10 md:h-screen">
      <h1 className="text-4xl md:text-6xl mb-6 text-yellow-500">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md  bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl p-5">
        <div className="mb-4">
          <label htmlFor="name" className="block text-yellow-500 font-bold mb-2"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-yellow-500 leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-yellow-500 font-bold mb-2"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-yellow-500 font-bold mb-2"> Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-600 border-yellow-600 rounded-lg hover:scale-110 duration-200 text-white text-lg font-semibold py-3 px-6 "> Send Message </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

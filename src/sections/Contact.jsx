import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <span className="border-b-4 border-yellow-400 pb-1">Contact Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 -ml-4">
            <div className="flex items-center gap-4 text-lg">
              <Mail className="text-yellow-500" />
              <a href="mailto:firozzaman800528@gmail.com" className="link link-hover text-gray-800">
                firozzaman800528@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <Phone className="text-yellow-500" />
              <a href="tel:+8801780887716" className="link link-hover text-gray-800">
                +880 1780 887716
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <MessageCircle className="text-yellow-500" />
              <a href="https://wa.me/8801780887716" target="_blank" rel="noreferrer" className="link link-hover text-gray-800">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-white rounded-xl shadow-md p-6 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered border-[#F0B100] w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered border-[#F0B100] w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="textarea textarea-bordered border-[#F0B100] w-full"
            />

            <button
              type="submit"
              className="
                inline-block
                cursor-pointer
                bg-yellow-400
                hover:bg-yellow-500
                text-white
                font-semibold
                rounded-full
                shadow
                w-full
                transition
                mb-8
                text-base sm:text-lg md:text-xl
                px-4 sm:px-6 md:px-8
                py-2.5 sm:py-3 md:py-3.5
              "
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 text-center font-medium mt-2">
                ✅ Thank you! I will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;

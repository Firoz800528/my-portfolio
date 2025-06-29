const Footer = () => (
  <footer className="bg-gray-300 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p className="text-md">&copy; 2025 Md. Firozzaman. All rights reserved.</p>
      <div className="flex space-x-6 text-gray-500 dark:text-gray-400">
        <a
            href="https://github.com/Firoz800528"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/firoz-zaman-357423361/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/FZaman800528"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
      </div>
    </div>
  </footer>
);

export default Footer;

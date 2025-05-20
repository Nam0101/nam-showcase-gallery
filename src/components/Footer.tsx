import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="bg-navy-dark py-8 px-6 border-t border-slate-dark"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-semibold text-white">
              <span className="text-accent">Nam</span>Dev
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate text-sm">
              © {year} Nam Nguyen. All rights reserved.
            </p>
            <p className="text-slate-dark text-xs mt-1">
              Designed & Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

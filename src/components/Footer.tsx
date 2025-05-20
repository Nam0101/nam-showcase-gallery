
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark py-8 px-6 border-t border-slate-dark">
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
    </footer>
  );
};

export default Footer;

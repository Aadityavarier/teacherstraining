const Footer = () => {
  const quickLinks = ['About', 'Course', 'Trainers', 'Location', 'Contact'];

  const scrollToSection = (id) => {
    const sectionId = id === 'Location' ? 'branches' : id.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-darker-navy pt-16 pb-8 border-t-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 inline-block shadow-lg max-w-xs">
              <div className="bg-white rounded-xl p-2.5 inline-block shadow-inner hover:scale-105 transition-transform duration-200">
                <img
                  src="/RAPID.png"
                  alt="Rapid Teacher Training Institute"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-white/70 mt-4 text-xs font-bold tracking-wider font-sans">
                RAPID TEACHER TRAINING INSTITUTE
              </p>
              <p className="text-white/45 mt-2 text-xs font-sans leading-relaxed">
                Shaping Passionate Educators for a Better Tomorrow
              </p>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <span
                    onClick={() => scrollToSection(link)}
                    className="text-white/50 hover:text-accent transition cursor-pointer"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <div className="space-y-2">
              <p className="text-white/50">90225 82988</p>
              <p className="text-white/50">9820712536</p>
              <p className="text-white/50">
                <strong>Ambernath:</strong> 302, Om Dubey Dham, above Shobha Hospital, Ambernath-East
              </p>
              <p className="text-white/50">
                <strong>Palava:</strong> 1702, Serenity C Wing, Lakeshore Greens, Lodha Palava Phase 2, Dombivali East, 421204
              </p>
              <a
                href="https://wa.me/919022582988?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20ECCEd%20Teacher%20Training%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition inline-block"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Rapid Teacher Training Institute. All rights reserved.
          </p>
          <div className="border-t border-white/10 mt-4 pt-4 text-center">
            <p className="text-xs text-white/50">
              Designed & Built by{" "}
              <a
                href="https://aadityavarier.github.io/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 font-medium hover:text-[#d4521a] hover:underline transition-colors"
              >
                Aaditya Varier
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

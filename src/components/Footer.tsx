import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-lilac-cream py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Address Column */}
            <div>
              <h3 className="text-subheading font-medium text-lilac-olive-dark mb-4">Theracalm</h3>
              <p className="text-body text-lilac-olive mb-1">200 W Cesar Chavez St</p>
              <p className="text-body text-lilac-olive mb-4">Austin, TX 78701</p>
              <a href="mailto:contact@theracalm.com" className="text-body text-lilac-olive underline hover:text-lilac-olive-dark">
                contact@theracalm.com
              </a>
              <p className="text-body text-lilac-olive mt-1">(512) 555-0147</p>
            </div>

            {/* Hours Column */}
            <div>
              <h3 className="text-subheading font-medium text-lilac-olive-dark mb-4">Hours</h3>
              <p className="text-body text-lilac-olive mb-1">Monday to Friday</p>
              <p className="text-body text-lilac-olive">9am to 6pm</p>
            </div>

            {/* Find Column */}
            <div>
              <h3 className="text-subheading font-medium text-lilac-olive-dark mb-4">Find</h3>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-body text-lilac-olive hover:text-lilac-olive-dark transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-body text-lilac-olive hover:text-lilac-olive-dark transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-body text-lilac-olive hover:text-lilac-olive-dark transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-lilac-cream border-t border-lilac-sage py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-lilac-olive mb-4">
            <Link href="/privacy" className="hover:text-lilac-olive-dark transition-colors">
              Privacy & Cookies Policy
            </Link>
            <Link href="/good-faith" className="hover:text-lilac-olive-dark transition-colors">
              Good Faith Estimate
            </Link>
            <Link href="/terms" className="hover:text-lilac-olive-dark transition-colors">
              Website Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-lilac-olive-dark transition-colors">
              Disclaimer
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-lilac-olive">
            All Rights Reserved © {new Date().getFullYear()} Theracalm.
          </p>
        </div>
      </div>
    </footer>
  );
}

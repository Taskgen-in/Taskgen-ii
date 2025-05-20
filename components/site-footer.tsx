import Link from "next/link";
import Logo from "@/components/logo";
import { Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and tagline */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-gray-500">
              TaskGen.in provides professional work-from-home opportunities with flexible schedules and reliable payments.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-medium mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-gray-500 hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-500 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-500 hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-500 hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@taskgen.in" className="hover:text-primary">support@taskgen.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919344759416" className="hover:text-primary">+91 93447 59416</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                {/* WhatsApp SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 32 32" className="text-green-500">
                  <path d="M16 2.933c-7.355 0-13.333 5.978-13.333 13.333 0 2.293.622 4.525 1.797 6.478l-1.888 6.91a1.333 1.333 0 0 0 1.624 1.623l6.912-1.888a13.277 13.277 0 0 0 6.454 1.886h.002c7.355 0 13.333-5.978 13.333-13.333S23.355 2.933 16 2.933zm0 24c-2.035 0-4.042-.541-5.777-1.566l-.411-.241-4.102 1.12 1.123-4.093-.267-.42c-1.111-1.756-1.701-3.786-1.701-5.797C5.867 9.701 10.298 5.267 16 5.267c5.701 0 10.133 4.434 10.133 10.134 0 5.701-4.432 10.133-10.133 10.133zm5.732-7.222c-.314-.158-1.86-.918-2.146-1.022-.287-.105-.496-.157-.705.157-.207.314-.805 1.021-.986 1.229-.181.207-.362.236-.676.079-.314-.158-1.326-.487-2.526-1.552-.934-.834-1.562-1.863-1.748-2.177-.181-.314-.019-.483.138-.64.142-.141.314-.366.472-.548.157-.181.209-.314.314-.523.105-.209.052-.393-.026-.548-.08-.157-.705-1.705-.966-2.335-.254-.609-.513-.527-.705-.537-.182-.008-.392-.01-.603-.01-.208 0-.547.079-.834.393-.287.314-1.093 1.068-1.093 2.605 0 1.537 1.119 3.02 1.276 3.229.158.209 2.201 3.366 5.337 4.593.746.321 1.327.513 1.782.657.749.239 1.432.205 1.97.124.601-.09 1.86-.761 2.122-1.497.262-.736.262-1.366.183-1.497-.078-.131-.286-.209-.6-.367z"/>
                </svg>
                <a
                  href="https://wa.me/919344759416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp: +91 93447 59416
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary">
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-primary">
                {/* Twitter SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary">
                {/* Instagram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Our Location - Google Map */}
          <div>
            <h3 className="text-sm font-medium mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ minHeight: 170, minWidth: 230 }}>
              <iframe
                title="TaskGen Office Location"
                src="https://www.google.com/maps?q=SF+No.+598%2F2%2C+6th+Floor%2C+Gautam+Complex%2C+Udayampalayam+road%2C+Nava+India+Rd%2C+Coimbatore%2C+Tamil+Nadu+641028&output=embed"
                width="100%"
                height="170"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              SF No. 598/2, 6th Floor, Gautam Complex, Udayampalayam road, Nava India Rd, Coimbatore, Tamil Nadu 641028
            </p>
          </div>
        </div>

        {/* Footer copyright and social */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} TaskGen.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

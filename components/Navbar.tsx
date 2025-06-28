"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Package,
  Briefcase,
  FileText,
  Phone,
  Info,
  Code,
} from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Ecommet
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center lg:space-x-8 md:space-x-6 space-x-2">
            <Dropdown
              label="Services"
              icon={<Layers size={16} />}
              items={[
                { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
                { label: "Web & Mobile Apps", href: "/web-mobile-apps" },
                { label: "Business Software", href: "/business-software" },
              ]}
            />
            <Dropdown
              label="Products"
              icon={<Package size={16} />}
              items={[
                { label: "Magento Extensions", href: "/magento-extensions" },
                { label: "Shopify Apps", href: "/shopify-apps" },
                { label: "Saas Products", href: "/saas-products" },
              ]}
            />
            <NavLink
              href="#"
              label="Portfolio"
              icon={<Briefcase size={16} />}
            />
            <NavLink href="#" label="Blog" icon={<FileText size={16} />} />
            <NavLink href="#" label="About Us" icon={<Info size={16} />} />
            <NavLink href="#" label="Contact" icon={<Phone size={16} />} />
          </div>

          <div className="inline-flex justify-between items-center gap-2">
            <div>
              <a href="#contact">
                <button
                  className="inline-flex overflow-hidden focus:outline-none items-center justify-center rounded-lg
             bg-[#2563EB] hover:bg-blue-800 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2"
                >
                  <Code size={16} />
                  Start a Project
                </button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden w-[24px] h-[24px]">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className={`md:hidden bg-white shadow-lg px-4 pb-4 space-y-2 transition-all duration-300 absolute w-full z-40 ${
            mobileOpen ? "block" : "hidden"
          }`}
        >
          <MobileLink label="Home" />
          <MobileDropdown
            label="Services"
            items={[
              { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
              { label: "Web & Mobile Apps", href: "/web-mobile-apps" },
              { label: "Business Software", href: "/business-software" },
            ]}
          />
          <MobileDropdown
            label="Products"
            items={[
              { label: "Magento Extensions", href: "/magento-extensions" },
              { label: "Shopify Apps", href: "/shopify-apps" },
              { label: "Saas Products", href: "/saas-products" },
            ]}
          />
          <MobileLink label="Portfolio" />
          <MobileLink label="Blog" />
          <MobileLink label="About Us" />
          <MobileLink label="Contact" />
        </div>
      )}
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => (
  <Link
    href={href}
    className="flex items-center gap-1 hover:text-[#2563EB] transition"
  >
    {icon}
    {label}
  </Link>
);

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  label: string;
  icon?: ReactNode;
  items: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ label, items, icon }) => (
  <div className="relative group">
    <div className="flex items-center gap-1 hover:text-[#2563EB] transition cursor-pointer">
      {icon}
      {label}
      <ChevronDown size={16} />
    </div>
    <div className="absolute left-0 top-full w-60 mt-1 rounded-md bg-white shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 pointer-events-auto">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileLink: React.FC<{ label: string }> = ({ label }) => (
  <Link href="#" className="block py-2 px-2 hover:bg-gray-100 rounded">
    {label}
  </Link>
);

const MobileDropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded"
      >
        {label}
        <ChevronDown
          className={`transform transition ${open ? "rotate-180" : ""}`}
          size={16}
        />
      </button>
      {open && (
        <div className="pl-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block py-2 px-2 hover:bg-gray-100 rounded"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

"use client";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";
import {
  useIsMobileMenuOpen,
  useToggleMobileMenu,
  useCloseMobileMenu,
  useIsDarkMode,
  useSetTheme,
  useTheme,
} from "@/store";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const navLinks = [
  { name: "about me", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "portfolio", href: "#main-works" },
  { name: "contacts", href: "#main_contact" },
];

export const NavBar = () => {
  const isMobileMenuOpen = useIsMobileMenuOpen();
  const toggleMobileMenu = useToggleMobileMenu();
  const closeMobileMenu = useCloseMobileMenu();
  const isDarkMode = useIsDarkMode();
  const setTheme = useSetTheme();
  const currentTheme = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".theme-dropdown")) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const themeOptions = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <>
      <div className="fixed w-full max-w-[100vw] z-50 top-0 right-0 left-0">
        <motion.nav
          className={`shadow-lg transition-all duration-300 ${
            isDarkMode
              ? "bg-linear-to-r from-slate-900 to-slate-800"
              : "bg-linear-to-r from-sky-600 to-emerald-600"
          }`}
          id="navbar"
        >
          <div className="flex items-center justify-between max-w-7xl px-4 py-3 mx-auto">
            <div className="flex items-center gap-8">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-red-400 animate-spin mask-[linear-gradient(transparent,white)]">
                  <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                    <span className="font-bold bg-linear-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                      HD
                    </span>
                  </div>
                </div>
              </div>
              <span className="font-semibold text-white">Haftamu Desta</span>
            </div>

            <div className="hidden sm:flex items-center gap-8">
              <div className="flex items-center gap-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                {navLinks.map((item, i) => (
                  <MenuItem key={item.name} index={i} href={item.href}>
                    {item.name}
                  </MenuItem>
                ))}
              </div>

              <div className="relative theme-dropdown">
                <button
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 text-white"
                  aria-label="Theme switcher"
                >
                  {isDarkMode ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </button>

                {isThemeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute right-0 mt-2 w-36 rounded-lg shadow-lg border overflow-hidden z-50 ${
                      isDarkMode
                        ? "bg-slate-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {themeOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => {
                            setTheme(
                              option.value as "light" | "dark" | "system",
                            );
                            setIsThemeDropdownOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors ${
                            currentTheme === option.value
                              ? "bg-sky-600 text-white"
                              : isDarkMode
                                ? "text-gray-200 hover:bg-slate-700"
                                : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {option.label}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </div>

            <button
              className="sm:hidden z-50 p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.nav>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className={`sm:hidden absolute top-16 left-0 right-0 shadow-xl z-40 ${
              isDarkMode
                ? "bg-slate-900/95 backdrop-blur-sm"
                : "bg-linear-to-r from-sky-600 to-emerald-600"
            }`}
          >
            <div className="flex flex-col px-4 py-6 space-y-3">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-colors capitalize font-bold text-lg"
                >
                  {item.name}
                </a>
              ))}

              <div className="border-t border-white/20 pt-4 mt-2">
                <p className="text-sm text-white/80 mb-2 px-4">Theme</p>
                <div className="flex gap-2 px-4">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value as "light" | "dark" | "system");
                          closeMobileMenu();
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                          currentTheme === option.value
                            ? "bg-white text-sky-600"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="h-16"></div>
    </>
  );
};

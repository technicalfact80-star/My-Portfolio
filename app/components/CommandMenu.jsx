"use client";
import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { 
  Terminal, Smartphone, User, FileText, 
  Mail, ExternalLink, Moon, Sun, Check, Search 
} from "lucide-react";

export default function CommandMenu({ isDarkMode, setIsDarkMode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Toggle on Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("technicalfact80@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateTo = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Prompt Button at Bottom Right */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 dark:bg-[#161617]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-white/20 transition-all cursor-pointer"
      >
        <Search size={13} />
        <span>Spotlight</span>
        <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-[10px] font-mono text-gray-500 dark:text-gray-400">
          ⌘K
        </kbd>
      </button>

      {/* Backdrop & Command Palette */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="fixed inset-0" 
            onClick={() => setOpen(false)} 
          />
          <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#161617] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <Command className="w-full">
              {/* Search Bar Input */}
              <div className="flex items-center px-4 border-b border-gray-100 dark:border-white/10">
                <Search size={18} className="text-gray-400 mr-3" />
                <Command.Input
                  placeholder="Type a command or search sections..."
                  className="w-full py-4 text-sm bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                  autoFocus
                />
                <kbd className="text-[10px] font-mono px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-gray-500">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <Command.List className="max-h-80 overflow-y-auto p-2 text-sm">
                <Command.Empty className="py-6 text-center text-xs text-gray-500">
                  No matching results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-3 py-1.5">
                  <Command.Item
                    onSelect={() => navigateTo("about")}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <User size={16} />
                    <span>Go to About Me</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("projects")}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <Smartphone size={16} />
                    <span>View Projects & Phone Simulator</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("contact")}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <Mail size={16} />
                    <span>Contact Information</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Quick Actions" className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-3 py-1.5 mt-2">
                  <Command.Item
                    onSelect={copyEmail}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={16} />
                      <span>Copy Email Address</span>
                    </div>
                    {copied && <span className="text-xs text-green-500 flex items-center gap-1"><Check size={12} /> Copied</span>}
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      if (setIsDarkMode) setIsDarkMode(!isDarkMode);
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span>Toggle {isDarkMode ? "Light" : "Dark"} Mode</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open("https://github.com/technicalfact80-star", "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Terminal size={16} />
                      <span>Open GitHub Profile</span>
                    </div>
                    <ExternalLink size={14} className="text-gray-400" />
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
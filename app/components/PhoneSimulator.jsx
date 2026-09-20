"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, Battery, RefreshCw, ChevronRight, ArrowLeft,
  Bell, Smartphone, User, Camera, Cast, Mic, ShieldAlert,
  MapPin, Slash, Keyboard, History, Phone, MessageSquare,
  Shield, Globe, Image as ImageIcon, CheckCircle2, Search,
  Download, ArrowDownToLine, Info, Sparkles
} from "lucide-react";
import { assets } from "../assets/assets";

export default function PhoneSimulator() {
  const [currentTab, setCurrentTab] = useState("home");
  const [activeScreen, setActiveScreen] = useState("dashboard");
  const [activeGuideTab, setActiveGuideTab] = useState("parent");

  const [appToggles, setAppToggles] = useState({
    chatgpt: false,
    directpay: false,
    flashget: false,
    freedrama: false,
    gallery: false,
    instagram: false,
    jiohotstar: false
  });

  const toggleApp = (key) => {
    setAppToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="projects" className="w-full py-20 px-[12%] max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      
      {/* Header Section (Consistent with About & Services) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">
          Mobile Architecture
        </h4>
        <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">
          FlashGet Kids Suite
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70 leading-relaxed">
          An enterprise-grade child security, real-time geolocation supervision, and ambient telemetry ecosystem built with Flutter, Supabase, and Android Foreground Daemons.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ================= LEFT SIDE: COMPREHENSIVE SUITE CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Main App Highlight Card with About-Me Style Border & Hover Effects */}
          <div className="border-[0.5px] border-gray-400 dark:border-white/20 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#11001f]/40 hover:bg-lightHover dark:hover:bg-darkHover/40 hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
                {assets?.flashget_parents ? (
                  <Image 
                    src={assets.flashget_parents} 
                    alt="FlashGet Kids Icon" 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                ) : (
                  <Shield size={32} className="text-white" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-Ovo font-semibold text-gray-800 dark:text-white">FlashGet Kids Suite</h3>
                  <span className="text-[10px] px-2.5 py-0.5 font-bold uppercase rounded-full border border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                    v1.0.5
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-white/60 mt-1 font-Ovo">
                  Flutter Client • Supabase Sync • Zero-Battery Foreground Daemon
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-2xl font-Ovo text-gray-600 dark:text-white/80 leading-relaxed text-sm">
              Engineered to ensure complete child security and protection against digital threats. Uses encrypted WebSockets to transmit live geolocation coordinates, real-time screen captures, app usage barriers, and safety alerts from the monitored child unit directly to the parent controller.
            </p>

            {/* Core Architectural Features Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                { title: "Live GPS & Geofencing", desc: "Instant boundaries and geocode resolutions", icon: <MapPin size={16} className="text-purple-600 dark:text-purple-400" /> },
                { title: "Live Camera & Audio Cast", desc: "One-way sound and screen cast feeds", icon: <Cast size={16} className="text-purple-600 dark:text-purple-400" /> },
                { title: "Application Lockdown", desc: "Remote policy enforcement per package", icon: <Slash size={16} className="text-red-500" /> },
                { title: "Input Telemetry", desc: "Stealth key capture for emergency keywords", icon: <Keyboard size={16} className="text-emerald-500" /> },
                { title: "Calls & SMS Sync", desc: "Monitors incoming and outgoing transmissions", icon: <Phone size={16} className="text-amber-500" /> },
                { title: "Tamper & Offline Alerts", desc: "Reports uninstall attempts and power cycles", icon: <ShieldAlert size={16} className="text-rose-500" /> }
              ].map((feat, i) => (
                <div 
                  key={i} 
                  className="border-[0.5px] border-gray-300 dark:border-white/10 rounded-xl p-3.5 bg-white/60 dark:bg-transparent hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-0.5 duration-300 transition-all flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-transparent shrink-0 mt-0.5 shadow-sm">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800 dark:text-white">{feat.title}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-white/60 mt-0.5 leading-snug">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct APK Download Buttons */}
            <div className="pt-6 border-t border-gray-300 dark:border-white/10">
              <span className="text-xs font-Ovo uppercase tracking-wider text-gray-500 dark:text-white/60 block mb-3">
                Direct Binary Distributions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://uwimazoxcjkvmdgfwwpt.supabase.co/storage/v1/object/public/app-releases/app-v1.0.5.apk"
                  download
                  className="flex items-center justify-between px-5 py-3.5 rounded-full border border-gray-400 dark:border-white/30 bg-white dark:bg-darkHover hover:bg-lightHover dark:hover:bg-darkHover/80 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white duration-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Download size={18} className="text-purple-600 dark:text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800 dark:text-white leading-tight font-Ovo">Parent Controller</p>
                      <p className="text-[10px] text-gray-500 dark:text-white/60">v1.0.5+ APK</p>
                    </div>
                  </div>
                  <ArrowDownToLine size={16} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://uwimazoxcjkvmdgfwwpt.supabase.co/storage/v1/object/public/app-releases/FlashgetKids-v1.0.4.apk"
                  download
                  className="flex items-center justify-between px-5 py-3.5 rounded-full border border-gray-400 dark:border-white/30 bg-white dark:bg-darkHover hover:bg-lightHover dark:hover:bg-darkHover/80 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white duration-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Download size={18} className="text-purple-600 dark:text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800 dark:text-white leading-tight font-Ovo">Child Stealth Daemon</p>
                      <p className="text-[10px] text-gray-500 dark:text-white/60">v1.0.5+ APK</p>
                    </div>
                  </div>
                  <ArrowDownToLine size={16} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Installation Guide Card */}
          <div className="border-[0.5px] border-gray-400 dark:border-white/20 rounded-2xl p-6 bg-white dark:bg-[#11001f]/40 hover:bg-lightHover dark:hover:bg-darkHover/40 duration-500 transition-all">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Info size={18} className="text-purple-600 dark:text-purple-400" />
                <h4 className="text-sm font-semibold font-Ovo text-gray-800 dark:text-white">Deployment & Pairing Instructions</h4>
              </div>
              <div className="flex border border-gray-300 dark:border-white/20 p-1 rounded-full text-xs font-semibold bg-gray-50 dark:bg-transparent">
                <button
                  onClick={() => setActiveGuideTab("parent")}
                  className={`px-3 py-1 rounded-full transition-all duration-300 font-Ovo ${activeGuideTab === "parent" ? "bg-white dark:bg-white/10 shadow-sm text-black dark:text-white font-bold" : "text-gray-500 dark:text-white/60"}`}
                >
                  Parent Device
                </button>
                <button
                  onClick={() => setActiveGuideTab("child")}
                  className={`px-3 py-1 rounded-full transition-all duration-300 font-Ovo ${activeGuideTab === "child" ? "bg-white dark:bg-white/10 shadow-sm text-black dark:text-white font-bold" : "text-gray-500 dark:text-white/60"}`}
                >
                  Child Device
                </button>
              </div>
            </div>

            <div className="pt-4 text-xs text-gray-600 dark:text-white/80 leading-relaxed font-Ovo">
              {activeGuideTab === "parent" ? (
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Download and install <strong>FlashGet-Parent.apk</strong> on your personal phone.</li>
                  <li>Enable <em>Install Unknown Apps</em> permission when prompted by Android OS.</li>
                  <li>Create or log in with your supervisor account to generate a secure <strong>6-digit Pairing Code</strong>.</li>
                  <li>All child telemetry streams will synchronize automatically within 2 seconds of connection.</li>
                </ol>
              ) : (
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Install <strong>FlashGet-Kids-Daemon.apk</strong> on the target child phone.</li>
                  <li>Grant <em>Accessibility Service</em>, <em>Device Admin</em>, and <em>Background Location</em> permissions.</li>
                  <li>Enter the 6-digit code provided by the Parent Controller app.</li>
                  <li>Enable <em>Autostart & Battery Optimization Exemption</em> to prevent the Android scheduler from suspending the background worker.</li>
                </ol>
              )}
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: iOS 18 SIMULATOR VIEWPORT ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center sticky top-24"
        >
          {/* iOS 18 Edge-to-Edge Bezel Chassis */}
          <div className="relative w-[340px] h-[700px] sm:w-[365px] sm:h-[745px] bg-[#1c1c1e] dark:bg-[#11001f] rounded-[58px] p-[10px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] border border-gray-500/30 dark:border-white/20 ring-1 ring-black select-none hover:shadow-black dark:hover:shadow-white duration-500 transition-all">
            
            {/* Screen Boundary */}
            <div className="relative w-full h-full bg-[#000000] rounded-[48px] p-[6px] overflow-hidden flex flex-col justify-between">
              
              {/* Inner Retina Viewport */}
              <div className="relative w-full h-full bg-[#F4F6F9] dark:bg-[#120024] rounded-[42px] overflow-hidden flex flex-col justify-between border border-black/40 dark:border-white/10 transition-colors duration-300">

                {/* iOS 18 Dynamic Capsule & Status Bar */}
                <div className="bg-[#6B46C1] dark:bg-[#430075] text-white pt-3 px-7 pb-1.5 flex justify-between items-center text-[11px] font-medium z-30 transition-colors duration-300">
                  <span className="font-mono tracking-tight text-[10px]">9:41</span>
                  
                  {/* Dynamic Island Capsule */}
                  <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500/80"></div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Wifi size={12} />
                    <Battery size={14} className="fill-white" />
                  </div>
                </div>

                {/* Scrollable Screen Content without scrollbar */}
                <div className="flex-1 overflow-y-auto no-scrollbar relative text-gray-800 dark:text-gray-100">
                  <AnimatePresence mode="wait">
                    
                    {/* ================= VIEW: DASHBOARD ================= */}
                    {currentTab === "home" && activeScreen === "dashboard" && (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Purple Header Banner */}
                        <div className="bg-[#6B46C1] dark:bg-[#430075] text-white px-5 pt-3 pb-6 rounded-b-[28px] shadow-sm transition-colors duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center border border-white/20 shadow-inner">
                                <Smartphone size={20} className="text-white" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5 font-bold text-sm tracking-wide">
                                  <span>LAVA LXX516</span>
                                  <span className="text-xs opacity-70">▾</span>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-purple-200 mt-0.5">
                                  <span className="flex items-center gap-1">
                                    <Wifi size={10} className="text-purple-300" /> Online
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Battery size={10} /> 74%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="p-2 rounded-full hover:bg-white/10 text-white/90 transition-colors">
                              <RefreshCw size={15} />
                            </button>
                          </div>

                          <div className="mt-3 text-[10px] text-purple-200 font-mono">
                            Last sync: Sep 14, 2026 • 02:54 PM
                          </div>
                        </div>

                        {/* Top Pull Tab */}
                        <div className="w-8 h-1 bg-purple-300 dark:bg-purple-400 rounded-full mx-auto -mt-2.5 mb-2 relative z-10 shadow"></div>

                        {/* Scroll Body */}
                        <div className="px-4 space-y-4 pb-6">
                          
                          {/* Usage Report Card */}
                          <div className="bg-white dark:bg-[#1c0136] rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-between transition-colors duration-300">
                            <div>
                              <div className="flex items-center gap-1 text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                                <span>Usage Report</span>
                                <ChevronRight size={14} className="text-gray-400" />
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-300 font-semibold mt-2">
                                <History size={13} />
                                <span>Screen Time: 9 Hr</span>
                              </div>
                            </div>
                            <div className="w-14 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-inner flex items-center justify-center text-white/90">
                              <Smartphone size={19} />
                            </div>
                          </div>

                          {/* Live Monitoring Section */}
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-gray-200 mb-2.5">Live Monitoring</h4>
                            <div className="grid grid-cols-3 gap-2.5">
                              <div className="bg-white dark:bg-[#1c0136] p-3 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-1.5">
                                  <Camera size={18} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-tight">Remote Camera</span>
                              </div>
                              <div className="bg-white dark:bg-[#1c0136] p-3 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-1.5">
                                  <Cast size={18} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-tight">Screen Mirror</span>
                              </div>
                              <div className="bg-white dark:bg-[#1c0136] p-3 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-1.5">
                                  <Mic size={18} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-tight">One-Way Audio</span>
                              </div>
                            </div>
                          </div>

                          {/* Live Location Card */}
                          <div className="bg-white dark:bg-[#1c0136] rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-white/10 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                                  <MapPin size={15} />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Live Location</h4>
                                  <p className="text-[10px] text-gray-400">Real-time tracking</p>
                                </div>
                              </div>
                              <RefreshCw size={13} className="text-gray-400" />
                            </div>

                            <div className="relative h-28 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 overflow-hidden my-2 flex items-center justify-center">
                              <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                              <div className="relative text-center z-10">
                                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900 shadow-md flex items-center justify-center mx-auto text-white">
                                  <MapPin size={15} />
                                </div>
                                <span className="text-[9px] font-bold text-blue-900 dark:text-blue-100 bg-white/90 dark:bg-gray-800/90 px-2 py-0.5 rounded shadow-sm mt-1 inline-block">
                                  Jss Public School
                                </span>
                              </div>
                              <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-emerald-500 text-white rounded text-[8px] font-bold flex items-center gap-1">
                                ● LIVE
                              </span>
                            </div>

                            <div className="flex items-center justify-between pt-1 text-xs">
                              <div>
                                <p className="font-bold text-gray-800 dark:text-gray-200 text-[10px]">8SF4+R5P, Lucknow - 899032</p>
                                <p className="text-[9px] text-gray-400">09-14 02:54 PM</p>
                              </div>
                              <ChevronRight size={16} className="text-gray-400" />
                            </div>
                          </div>

                          {/* App Blocker Trigger Card */}
                          <div 
                            onClick={() => setActiveScreen("appBlocker")}
                            className="bg-white dark:bg-[#1c0136] rounded-2xl p-3.5 shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-500 flex items-center justify-center">
                                <Slash size={18} />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">App Blocker</h4>
                                <p className="text-[10px] text-gray-400">Manage and restrict apps</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                                {Object.values(appToggles).filter(Boolean).length} Restricted
                              </span>
                              <ChevronRight size={16} className="text-gray-400" />
                            </div>
                          </div>

                          {/* Keyboard Monitoring Trigger Card */}
                          <div 
                            onClick={() => setActiveScreen("keystrokes")}
                            className="bg-white dark:bg-[#1c0136] rounded-2xl p-3.5 shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 flex items-center justify-center">
                                <Keyboard size={18} />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Keyboard Monitoring</h4>
                                <p className="text-[10px] text-gray-400">View live typing & clipboard logs</p>
                              </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                          </div>

                          {/* Call History Card */}
                          <div 
                            onClick={() => setActiveScreen("callLogs")}
                            className="bg-white dark:bg-[#1c0136] rounded-2xl p-3.5 shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 flex items-center justify-center">
                                <Phone size={18} />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Call History</h4>
                                <p className="text-[10px] text-gray-400">View real-time call logs</p>
                              </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                          </div>

                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: APP BLOCKER ================= */}
                    {activeScreen === "appBlocker" && (
                      <motion.div
                        key="appBlocker"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-white dark:bg-[#150129] min-h-full transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                          <div className="flex items-center gap-3">
                            <button onClick={() => setActiveScreen("dashboard")} className="p-1">
                              <ArrowLeft size={18} className="text-gray-700 dark:text-gray-200" />
                            </button>
                            <h3 className="font-bold text-sm text-gray-900 dark:text-white">App Blocker</h3>
                          </div>
                          <span className="text-xs text-gray-400">⋮</span>
                        </div>

                        <div className="my-3 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center gap-2 text-xs text-gray-400">
                          <Search size={14} /> Search apps...
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-white/5 text-xs">
                          {[
                            { id: "chatgpt", name: "ChatGPT" },
                            { id: "directpay", name: "Direct PAY4U" },
                            { id: "flashget", name: "Flashget Kids" },
                            { id: "freedrama", name: "FreeDrama" },
                            { id: "gallery", name: "Gallery" },
                            { id: "instagram", name: "Instagram" },
                            { id: "jiohotstar", name: "JioHotstar" },
                          ].map((app) => (
                            <div key={app.id} className="py-2.5 flex items-center justify-between">
                              <span className="font-semibold text-gray-800 dark:text-gray-200">{app.name}</span>
                              <div 
                                onClick={() => toggleApp(app.id)}
                                className={`w-9 h-5 rounded-full p-0.5 cursor-pointer transition-colors ${appToggles[app.id] ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-700"}`}
                              >
                                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${appToggles[app.id] ? "translate-x-4" : "translate-x-0"}`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: CALL LOGS ================= */}
                    {activeScreen === "callLogs" && (
                      <motion.div
                        key="callLogs"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-white dark:bg-[#150129] min-h-full transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                          <div className="flex items-center gap-3">
                            <button onClick={() => setActiveScreen("dashboard")} className="p-1">
                              <ArrowLeft size={18} className="text-gray-700 dark:text-gray-200" />
                            </button>
                            <h3 className="font-bold text-sm text-gray-900 dark:text-white">Call Logs</h3>
                          </div>
                          <RefreshCw size={14} className="text-purple-600 dark:text-purple-400" />
                        </div>

                        <div className="mt-3 space-y-2.5 text-xs">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">14 Sep 2026</div>
                          {[
                            { num: "63076 82XXX", time: "02:12 PM", type: "out" },
                            { num: "63076 82XXX", time: "02:11 PM", type: "out" },
                            { num: "63076 82XXX", time: "02:06 PM • 46s", type: "in" },
                            { num: "75718 19XXX", time: "02:05 PM", type: "out" },
                          ].map((c, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5">
                              <div className="flex items-center gap-2.5">
                                <span className={`text-xs ${c.type === "out" ? "text-blue-500" : "text-emerald-500"}`}>
                                  {c.type === "out" ? "↗" : "↙"}
                                </span>
                                <div>
                                  <p className="font-mono font-bold text-gray-800 dark:text-gray-200 text-[11px]">{c.num}</p>
                                  <p className="text-[9px] text-gray-400">{c.time}</p>
                                </div>
                              </div>
                              <span className="text-gray-400 text-xs">ⓘ</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: KEYSTROKES ================= */}
                    {activeScreen === "keystrokes" && (
                      <motion.div
                        key="keystrokes"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-white dark:bg-[#150129] min-h-full transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-white/10">
                          <button onClick={() => setActiveScreen("dashboard")} className="p-1">
                            <ArrowLeft size={18} className="text-gray-700 dark:text-gray-200" />
                          </button>
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">Keystroke Monitor</h3>
                        </div>

                        <div className="mt-4 space-y-3">
                          <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10">
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className="font-bold text-gray-800 dark:text-gray-200">Dialer</span>
                              <span className="text-[9px] text-gray-400 font-mono">02:10 PM</span>
                            </div>
                            <p className="font-mono text-xs text-purple-600 dark:text-purple-400">63076 82XXX</p>
                            <div className="mt-2 flex gap-2 text-[9px] font-mono">
                              <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">107 chars</span>
                              <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">17 entries</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10">
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className="font-bold text-gray-800 dark:text-gray-200">WhatsApp</span>
                              <span className="text-[9px] text-gray-400 font-mono">08:12 AM</span>
                            </div>
                            <p className="font-mono text-xs text-purple-600 dark:text-purple-400">Hello, Its you?</p>
                            <div className="mt-2 flex gap-2 text-[9px] font-mono">
                              <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">25 chars</span>
                              <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">6 entries</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: NOTICE CENTER TAB ================= */}
                    {currentTab === "notices" && (
                      <motion.div
                        key="notices"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-white dark:bg-[#150129] min-h-full transition-colors duration-300"
                      >
                        <h3 className="font-bold text-base text-center text-gray-900 dark:text-white mb-3">Notice Center</h3>
                        <div className="px-3 py-1.5 bg-gray-100 dark:bg-white/10 rounded-lg text-xs text-gray-400 flex items-center gap-2 mb-3">
                          <Search size={14} /> Search logs...
                        </div>
                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 text-xs">
                          <span className="px-3 py-1 rounded-full bg-purple-600 text-white font-bold">✓ All</span>
                          <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">WhatsApp</span>
                          <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">Instagram</span>
                          <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">Snapchat</span>
                        </div>

                        <div className="mt-4 space-y-3 text-xs">
                          <div className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1c0136]">
                            <div className="flex justify-between text-gray-700 dark:text-gray-200 font-bold">
                              <span>Phone: 63076 82XXX</span>
                              <span className="text-[9px] text-gray-400">02:12 PM</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-[10px] mt-0.5">Ongoing call detected</p>
                          </div>
                          <div className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1c0136]">
                            <div className="flex justify-between text-gray-700 dark:text-gray-200 font-bold">
                              <span>WhatsApp (+91 73987 70XXX)</span>
                              <span className="text-[9px] text-gray-400">02:05 PM</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-[10px] mt-0.5">Notification synced to parent</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: PROFILE ================= */}
                    {currentTab === "profile" && activeScreen !== "aboutApp" && (
                      <motion.div
                        key="profile"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 bg-white dark:bg-[#150129] min-h-full text-center transition-colors duration-300"
                      >
                        <div className="bg-[#6B46C1] dark:bg-[#430075] text-white py-3 -mx-5 -mt-5 mb-6 font-bold text-sm">
                          Profile & Settings
                        </div>

                        <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                          <Shield size={28} />
                        </div>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white">Parent Account</h3>
                        <p className="text-xs text-gray-400 font-mono mb-6">technicalfact80@gmail.com</p>

                        <div className="space-y-3 text-left">
                          <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                              <Smartphone size={16} />
                            </div>
                            <div>
                              <p className="font-bold text-xs text-gray-800 dark:text-gray-200">LAVA LXX516</p>
                              <p className="text-[9px] text-gray-400 font-mono">ID: 2dd61447...</p>
                            </div>
                          </div>

                          <div 
                            onClick={() => setActiveScreen("aboutApp")}
                            className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                                <span className="font-bold text-xs">i</span>
                              </div>
                              <div>
                                <p className="font-bold text-xs text-gray-800 dark:text-gray-200">About Application</p>
                                <p className="text-[9px] text-gray-400">Version 1.0.5 (2006)</p>
                              </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ================= VIEW: ABOUT APP ================= */}
                    {activeScreen === "aboutApp" && (
                      <motion.div
                        key="aboutApp"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 bg-white dark:bg-[#150129] min-h-full transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-white/10">
                          <button onClick={() => setActiveScreen("dashboard")} className="p-1">
                            <ArrowLeft size={18} className="text-gray-700 dark:text-gray-200" />
                          </button>
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">About Application</h3>
                        </div>

                        <div className="text-center my-6">
                          <div className="w-16 h-16 rounded-2xl bg-[#6B46C1] text-white flex items-center justify-center mx-auto shadow-md mb-2">
                            <Shield size={32} />
                          </div>
                          <h4 className="font-bold text-base text-gray-900 dark:text-white">Flashget Parent</h4>
                          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono text-[11px] font-bold mt-1 inline-block">
                            Version 1.0.5 (2006)
                          </span>
                        </div>

                        <div className="space-y-3 text-left text-xs">
                          <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10">
                            <span className="text-[9px] text-gray-400 block uppercase font-bold">Developer</span>
                            <p className="font-semibold text-gray-800 dark:text-gray-200 mt-0.5">SANGAM VERMA @Copyright, 2026</p>
                            <p className="text-gray-500 dark:text-gray-400 font-mono text-[9px]">technicalfact80@gmail.com</p>
                          </div>

                          <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#1c0136] border border-gray-200 dark:border-white/10">
                            <span className="text-[9px] text-gray-400 block uppercase font-bold">Protection Level</span>
                            <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                              <CheckCircle2 size={13} /> Real-time Stealth Guard Active
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="bg-white dark:bg-[#150129] border-t border-gray-200 dark:border-white/10 py-2.5 px-6 flex justify-between items-center z-30 transition-colors duration-300">
                  <button
                    onClick={() => { setCurrentTab("notices"); setActiveScreen("dashboard"); }}
                    className={`flex flex-col items-center p-1 cursor-pointer transition-colors ${currentTab === "notices" ? "text-[#6B46C1] dark:text-[#A78BFA]" : "text-gray-400"}`}
                  >
                    <Bell size={20} />
                  </button>

                  <button
                    onClick={() => { setCurrentTab("home"); setActiveScreen("dashboard"); }}
                    className={`flex flex-col items-center p-2 rounded-2xl cursor-pointer transition-all ${currentTab === "home" ? "bg-purple-100 dark:bg-purple-950/60 text-[#6B46C1] dark:text-[#A78BFA]" : "text-gray-400"}`}
                  >
                    <Smartphone size={20} />
                  </button>

                  <button
                    onClick={() => { setCurrentTab("profile"); setActiveScreen("dashboard"); }}
                    className={`flex flex-col items-center p-1 cursor-pointer transition-colors ${currentTab === "profile" ? "text-[#6B46C1] dark:text-[#A78BFA]" : "text-gray-400"}`}
                  >
                    <User size={20} />
                  </button>
                </div>

                {/* Home Gesture Indicator */}
                <div className="bg-white dark:bg-[#150129] pb-1.5 pt-0.5 flex justify-center transition-colors duration-300">
                  <div className="w-32 h-1 bg-gray-400/80 dark:bg-gray-600 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
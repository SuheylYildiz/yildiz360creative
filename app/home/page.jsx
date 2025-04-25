// trigger redeploy

'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const colors = {
  dark: "#023535",
  base: "#015958",
  primary: "#008F8C",
  accent: "#0CABA8",
  light: "#0FC2C0"
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#023535] text-white font-sans">
      {/* Top navigation */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-[#015958]">
        <h1 className="text-xl font-bold">Yildiz360Creative</h1>
        <nav className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-gray-300">Log in</Button>
          <Button style={{ backgroundColor: colors.light, color: colors.dark }} className="font-medium px-4 py-2 rounded-md hover:opacity-90">Sign up</Button>
        </nav>
      </header>

      {/* Hero section */}
      <main className="p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Yildiz360Creative
              <br />
              <span className="text-2xl font-medium block mt-4">Empowers Filmmakers With A Sleek</span>
              <span className="text-2xl font-medium block">All-In-One Workspace For Creative Collaboration</span>
            </h2>
            <div className="mt-6">
              <Button style={{ backgroundColor: colors.primary, color: 'white' }} className="px-6 py-3 text-lg font-semibold rounded-md hover:opacity-90">
                Start Building
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="w-[500px] h-[300px] bg-gradient-to-br from-[#0CABA8] to-[#0FC2C0] rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

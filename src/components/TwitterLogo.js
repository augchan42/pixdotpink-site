'use client';

import React from "react";
// import Image from "next/image";
// import twitterLogo from "./rabbit-logo-800.jpg";
import { Twitter } from "lucide-react";
import { Button } from "./ui/button";

function TwitterLogo() {
  return (
    <div className="flex justify-center items-center">
      <Button
        variant="ghost"
        size="icon"
        asChild
      >
        <a
          href="https://twitter.com/8bitoracle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
      <style jsx global>
        {`
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}
      </style>
    </div>
  );
}

export default TwitterLogo;

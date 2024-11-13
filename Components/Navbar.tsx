"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import "@/app/styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Portfolio.</h1>
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}


import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';
import "@/app/styles/hero.css"
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <Image src="/images/portfolio.png"
           alt="Profile" className="profile-pic"
           width={400}
           height={400}
            />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Hello, I'm <span>Amna</span></h1>
          <h2 className="hero-subheading">Frontend Developer | JavaScript Enthusiast</h2>
          <p className="hero-paragraph">
            I'm passionate about creating interactive and responsive web applications. 
            Let's build something amazing together!
          </p>
          <div className="hero-icons">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </Link >
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

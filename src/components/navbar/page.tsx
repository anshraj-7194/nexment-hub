"use client"

import styles from "./page.module.css"
import ThemeToggle from "@/components/ui/ThemeToggle/page"
import Sidebar from "@/components/sidebar/page"
import { useState } from "react";

export default function Navbar() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
      <nav className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.left} >
          <img src="/logo.png" className={styles.logo} />
          <a href="/" className={styles.name} ><h1 className={styles.shimmerText} data-text="Nexment">Nexment</h1></a>
        </div>
        <div className={styles.middle} >
          <a href="/" className={styles.button} >Home</a>
          <a href="/tools" className={styles.button} >Tools</a>
          <a href="/about" className={styles.button} >APIs</a>
          <a href="/blogs" className={styles.button} >Blogs</a>
        </div>
        <div className={styles.right} >
          <a href="/games" className={styles.icon} ><i className="fa-solid fa-gamepad"></i></a>
          <ThemeToggle />
          <a href="/profile" className={styles.cta} ><i className="fa-solid fa-circle-user"></i> Profile</a>
        </div>
        <div className={styles.smallNavbar} >
          <div className={styles.left2} >
            <img src="/logo.png" className={styles.logo} />
            <a href="/" className={styles.name} ><h1 className={styles.shimmerText} data-text="Nexment">Nexment</h1></a>
          </div>
          <div className={styles.right2} >
            <ThemeToggle />
            <button className={styles.hamburger} onClick={() => setSidebarOpen(true)} ><i className="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </div>
      </nav>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
    </>
  );
}
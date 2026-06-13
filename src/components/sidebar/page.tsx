"use client"

import styles from "./page.module.css"

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({isOpen, onClose, }: SidebarProps) {
  return (
  <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
    <div className={styles.top} >
      <h1>Menu</h1>
      <button className={styles.close} onClick={onClose} ><i className="fa-solid fa-xmark" ></i></button>
    </div>
    <div className={styles.divider} ></div>
    <div className={styles.bottom} >
      <a className={styles.button} href="/" ><i className="fa-solid fa-home"></i>  Home</a>
      <a className={styles.button} href="/tools" ><i className="fa-solid fa-tools"></i>  Tools</a>
      <a className={styles.button} href="/about" ><i className="fa-solid fa-file-code"></i>  APIs</a>
      <a className={styles.button} href="/blogs" ><i className="fa-solid fa-book"></i>  Blogs</a>
      <a className={styles.button} href="/games" ><i className="fa-solid fa-gamepad"></i>  Games</a>
      <a className={styles.button} href="/profile" ><i className="fa-solid fa-circle-user"></i>  Profile</a>
    </div>
  </div>
  );
}

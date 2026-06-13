import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.social}>
        <a href="https://x.com/founderNexment">
          <i className="fa-brands fa-x-twitter"></i>
          Twitter
        </a>

        <a href="https://github.com/anshraj-7194">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>

        <a href="https://discord.gg/qdJhTbRnD">
          <i className="fa-brands fa-discord"></i>
          Discord
        </a>

        <a href="https://www.youtube.com/@nexment-yt">
          <i className="fa-brands fa-youtube"></i>
          YouTube
        </a>
      </div>

      <div className={styles.footer}>
        <p>© 2026 Nexment. All rights reserved.</p>

        <p>Built with passion for developers.</p>

        <div className={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
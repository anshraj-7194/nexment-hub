import styles from "./page.module.css"

export default function Hero() {
  return (
  <div className={styles.main}>

    <h1>
    Open-Source Developer Tools.
    <br />
    <span>Built for Modern Workflows.</span>
    </h1>

    <p>
    Discover powerful developer tools, APIs, CLI utilities, and web
    applications designed to simplify development, improve productivity,
    and help you <span>build faster</span>, <span>ship smarter</span>,
    and <span>stay in control</span>.
    </p>


  <div className={styles.buttons}>
    <a href="/tools" className={styles.primary}>
      <i className="fa-solid fa-screwdriver-wrench"></i>
      Explore Tools
    </a>

    <a
      href="https://github.com/anshraj-7194"
      className={styles.secondary}
    >
      <i className="fa-brands fa-github"></i>
      GitHub
    </a>
  </div>
</div>
  );
}
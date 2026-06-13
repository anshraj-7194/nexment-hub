import Navbar from "@/components/navbar/page"
import Hero from "@/components/hero/page"
import Footer from "@/components/footer/page"
import styles from "./page.module.css"


export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <Hero />
      </section>
      <Footer />
    </>
  );
}

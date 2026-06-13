import styles from "./page2.module.css";

export default function Not() {
	return (
		<div className={styles.main}>
			<div className={styles.background}></div>

			<div className={styles.card}>
				<img
					src="/logo.png"
					alt="Logo"
					className={styles.logo}
				/>

				<div className={styles.container}>
					<h1>404</h1>

					<h3>
						The page you are looking for is currently unavailable.
					</h3>

					<p>
						If you want to admire this 404 page, feel free.
						Otherwise, there isn't much here except these two buttons.
					</p>
				</div>

				<div className={styles.actions}>
					<a
						href="https://nexment.in"
						className={styles.primaryBtn}
					>
						<i className="fa-solid fa-home" ></i>
						<span>Go Home</span>
					</a>

					<a
						href="https://github.com/anshraj-7194"
						className={styles.secondaryBtn}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa fa-star" ></i>

						<span>Star on GitHub</span>
					</a>
				</div>
			</div>
		</div>
	);
}
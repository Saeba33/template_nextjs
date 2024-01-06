import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Charles Proust</div>
      <div className={styles.text}>© 2024</div>
    </div>
  );
};

export default Footer;

import { Typography } from "@mui/material";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Typography variant="body2" className={styles["footer__copyright"]}>
        © demirdanis {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

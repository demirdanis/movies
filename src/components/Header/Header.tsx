import { Link, Stack, Typography } from "@mui/material";

import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" className={styles.logo}>
          IMDB Movies
        </Typography>
        <Link href="/">
          <MovieOutlinedIcon className={styles["menu-icon"]} />
        </Link>
      </Stack>
    </header>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";

import Link from "next/link";
import styles from "./NotFoundSection.module.scss";

const NotFoundSection = () => {
  return (
    <Box className={styles["not-found"]}>
      <Stack spacing={2} className={styles["not-found__container"]}>
        <Typography variant="h3" className={styles["not-found__title"]}>
          Oops! Movie Not Found
        </Typography>

        <Typography variant="h6" className={styles["not-found__subtitle"]}>
          We couldn't find the movie you were looking for.
        </Typography>

        <Box className={styles["not-found__button-container"]}>
          <Link href="/">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={styles["not-found__button"]}
            >
              Go Back to Movies List
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default NotFoundSection;

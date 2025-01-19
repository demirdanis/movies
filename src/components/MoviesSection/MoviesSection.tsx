/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";

import { IMoviesSection } from "./MoviesSection.types";
import MovieSectionGrid from "./MoviesSection.grid";
import styles from "./MoviesSection.module.scss";

export default function MovieSection({ grid }: Readonly<IMoviesSection>) {
  return (
    <Stack
      className={styles["movies-section"]}
      direction={"column"}
      justifyContent={"space-between"}
      paddingInline={3}
    >
      <Typography className={styles["movies-section__title"]} variant="h4">
        Movies
      </Typography>

      <MovieSectionGrid {...grid} />
    </Stack>
  );
}

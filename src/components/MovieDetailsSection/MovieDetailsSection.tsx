/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography } from "@mui/material";

import { IMovieDetailSection } from "./MovieDetailsSection.types";

export default function MovieDetailsSection({
  data,
}: Readonly<IMovieDetailSection>) {
  return (
    <Box sx={{ padding: 3 }}>
      {data ? (
        <Stack spacing={3}>
          <Box margin="auto">
            <img src={data.Poster} alt={data.Title} height={180} width="auto" />
          </Box>
          <Typography variant="h4">
            {data.Title} ({data.Year})
          </Typography>
          <Typography variant="body1">{data.Plot}</Typography>

          <Stack direction="row" spacing={2}>
            <Typography variant="body2">
              <strong>Rated:</strong> {data.Rated}
            </Typography>
            <Typography variant="body2">
              <strong>Runtime:</strong> {data.Runtime}
            </Typography>
            <Typography variant="body2">
              <strong>Genre:</strong> {data.Genre}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography variant="body2">
              <strong>Director:</strong> {data.Director}
            </Typography>
            <Typography variant="body2">
              <strong>Writer:</strong> {data.Writer}
            </Typography>
          </Stack>

          <Typography variant="body2">
            <strong>Actors:</strong> {data.Actors}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography variant="body2">
              <strong>IMDb Rating:</strong> {data.imdbRating}
            </Typography>
            <Typography variant="body2">
              <strong>Metascore:</strong> {data.Metascore}
            </Typography>
          </Stack>

          <Typography variant="body2">
            <strong>Awards:</strong> {data.Awards}
          </Typography>
          <Typography variant="body2">
            <strong>Language:</strong> {data.Language}
          </Typography>
          <Typography variant="body2">
            <strong>Country:</strong> {data.Country}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography variant="body2">
              <strong>Box Office:</strong> {data.BoxOffice}
            </Typography>
            <Typography variant="body2">
              <strong>Production:</strong> {data.Production}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <>error</>
      )}
    </Box>
  );
}

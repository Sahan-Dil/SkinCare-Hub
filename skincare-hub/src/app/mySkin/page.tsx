'use client'
import React, { useState, ChangeEvent } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const defaultTheme = createTheme();

export default function MySkin() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedImage(event.target.files[0]);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handleFileChange}
            />
          </Button>
        </Stack>
        {uploadedImage && (
          <ImageList variant="masonry" cols={3} gap={8}>
            <ImageListItem key={uploadedImage.name}>
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt={uploadedImage.name}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={uploadedImage.name} />
            </ImageListItem>
          </ImageList>
        )}
      </Grid>
    </ThemeProvider>
  );
}

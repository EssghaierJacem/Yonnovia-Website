import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function ContactForm({ sx, ...other }: BoxProps) {
  return (
    <Box sx={sx} {...other}>
      <Typography variant="h3">
        N'hésitez pas à nous contacter.
        <br />
        Nous serons ravis d'avoir de tes nouvelles.
      </Typography>
      <Box
        sx={{
          my: 5,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField fullWidth label="Nom" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Sujet" />
        <TextField fullWidth label="Entrez votre message ici." multiline rows={4} />
      </Box>

      <Button size="large" variant="contained">
        Soumettre
      </Button>
    </Box>
  );
}

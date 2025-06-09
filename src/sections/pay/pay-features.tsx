import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: 'Portefeuille digital',
    description: 'Un portefeuille virtuel pour apprendre à gérer son argent',
    icon: 'solar:heart-bold' as const,
  },
  {
    title: "Apprentissage de l'épargne",
    description: 'Des outils pour suivre ses économies et se fixer des objectifs',
    icon: 'solar:heart-bold' as const,
  },
  {
    title: 'Système de récompenses',
    description: 'Des récompenses pour encourager les bonnes pratiques financières',
    icon: 'solar:heart-bold' as const,
  },
];

// ----------------------------------------------------------------------

export function PayFeatures(props: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
      {...props}
    >
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            mb: 10,
            textAlign: 'center',
          }}
        >
          <m.div variants={varFade('inUp')}>
            <Typography variant="h2">Fonctionnalités Kid'Pay</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary' }}>
              Découvrez les outils financiers éducatifs pour les jeunes entrepreneurs.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, md: 4 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: 1,
                    borderRadius: 2,
                  }}
                >
                  <Iconify
                    icon={feature.icon}
                    width={48}
                    sx={{
                      mb: 3,
                      mx: 'auto',
                      color: 'primary.main',
                    }}
                  />

                  <Typography variant="h5" paragraph>
                    {feature.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{feature.description}</Typography>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

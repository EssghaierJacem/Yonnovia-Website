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
    title: 'Traduire la langue des signes',
    description:
      'Rend le contenu accessible aux enfants malentendants grâce à la reconnaissance et traduction de la langue des signes',
    icon: 'solar:pen-bold' as const,
  },
  {
    title: 'Lire à voix haute le contenu',
    description:
      "Propose une lecture audio de qualité pour faciliter l'apprentissage et l'accessibilité",
    icon: 'solar:volume-loud-bold' as const,
  },
  {
    title: 'Adapter les interfaces pour PMR',
    description:
      "Modifie l'expérience utilisateur pour répondre aux besoins des personnes à mobilité réduite",
    icon: 'solar:user-rounded-bold' as const,
  },
  {
    title: 'Motiver avec bienveillance',
    description:
      'Encourage chaque enfant avec des messages positifs et adaptés à son parcours personnel',
    icon: 'solar:heart-bold' as const,
  },
];

// ----------------------------------------------------------------------

export function CoachFeatures({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade('inDown')}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            CAPACITÉS
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography variant="h2" sx={{ my: 3 }}>
            ADA'Z sait
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary', mb: 8 }}>
            Notre assistant IA est conçu pour être accessible à tous les enfants, quels que soient
            leurs besoins spécifiques
          </Typography>
        </m.div>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: 1,
                    borderRadius: 2,
                    boxShadow: (theme) => theme.shadows[2],
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[10],
                    },
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

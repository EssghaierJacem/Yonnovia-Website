import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import type { IconifyName } from 'src/components/iconify/register-icons';

// ----------------------------------------------------------------------

const TECHNOLOGIES = [
  {
    icon: 'solar:monitor-smartphone-bold' as IconifyName,
    title: 'IA, Machine Learning, NLP',
    description:
      "Notre plateforme utilise des technologies avancées d'intelligence artificielle pour personnaliser l'apprentissage et accompagner les enfants dans leur parcours entrepreneurial.",
  },
  {
    icon: 'solar:maximize-square-3-bold' as IconifyName,
    title: 'Blockchain pour transactions éducatives',
    description:
      "Nous utilisons la blockchain pour sécuriser les transactions sur Kid'Pay et apprendre aux enfants les bases de la gestion financière responsable.",
  },
  {
    icon: 'solar:shield-check-bold' as IconifyName,
    title: 'Infrastructure sécurisée',
    description:
      'Notre plateforme est conforme aux normes RGPD et intègre un système de KYC parental pour garantir la sécurité des données et des interactions des enfants.',
  },
  {
    icon: 'solar:medal-star-bold' as IconifyName,
    title: 'Contenus conformes aux standards PMI',
    description:
      'Nos contenus pédagogiques sont alignés sur les standards du Project Management Institute (PMI) pour offrir une formation de qualité professionnelle adaptée aux enfants.',
  },
];

// ----------------------------------------------------------------------

export function ParcoursTechnology({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade('inUp')}>
            <Typography variant="h2">Technologie et sécurité au cœur de notre ADN</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Notre plateforme utilise les technologies les plus avancées pour offrir une expérience
              d'apprentissage sécurisée, innovante et enrichissante.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {TECHNOLOGIES.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    height: 1,
                    textAlign: 'center',
                    p: (theme) => theme.spacing(5, 3),
                    boxShadow: (theme) => theme.shadows[3],
                    borderRadius: 2,
                  }}
                >
                  <m.div variants={varFade('inDown')}>
                    <Iconify
                      icon={item.icon}
                      width={48}
                      sx={{ mb: 3, mx: 'auto', color: 'primary.main' }}
                    />
                  </m.div>

                  <m.div variants={varFade('inUp')}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </m.div>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

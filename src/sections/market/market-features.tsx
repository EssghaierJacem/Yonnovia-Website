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
import type { IconifyName } from 'src/components/iconify/register-icons';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: 'Espace personnel de vente',
    description:
      'Chaque enfant dispose de son propre espace pour présenter et vendre ses créations, avec un profil personnalisable et des options de mise en page.',
    icon: 'solar:shop-bold' as IconifyName,
  },
  {
    title: 'Apprentissage du marketing',
    description:
      "Des outils pour apprendre à promouvoir ses produits et services, avec des conseils adaptés à l'âge des enfants et des modèles de présentation.",
    icon: 'solar:chart-bold' as IconifyName,
  },
  {
    title: 'Gestion des commandes',
    description:
      "Un système simple pour gérer les commandes, le service client et les retours, permettant aux enfants d'apprendre les bases de la relation client.",
    icon: 'solar:bag-check-bold' as IconifyName,
  },
  {
    title: 'Transactions sécurisées',
    description:
      "Un système de paiement sécurisé avec Kid'Pay, permettant aux enfants d'apprendre la gestion financière dans un environnement contrôlé par les parents.",
    icon: 'solar:wallet-money-bold' as IconifyName,
  },
];

// ----------------------------------------------------------------------

export function MarketFeatures({ sx, ...other }: BoxProps) {
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
            <Typography variant="h2">Fonctionnalités Kid'Market</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Découvrez les outils mis à disposition des enfants entrepreneurs pour les aider à
              développer leurs projets.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
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
                      icon={feature.icon}
                      width={48}
                      sx={{ mb: 3, mx: 'auto', color: 'primary.main' }}
                    />
                  </m.div>

                  <m.div variants={varFade('inUp')}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {feature.description}
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

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
    title: 'Écosystème complet',
    description:
      "Yonnov'IA regroupe Mindz'Kid, ADA'Z, B-Bot, Formevo et d'autres solutions pour accompagner l'apprentissage, l'entrepreneuriat et la gestion d'entreprise à tous les âges.",
    icon: 'solar:tv-bold' as const,
  },
  {
    title: 'Innovation continue',
    description:
      "Des outils et méthodes à la pointe de l'IA pour l'éducation et le business, évoluant sans cesse pour répondre à vos besoins.",
    icon: 'solar:list-bold' as const,
  },
  {
    title: 'Accessibilité & inclusion',
    description:
      'Des interfaces pensées pour tous : enfants, adultes, PMR/PBS, avec commandes vocales, ergonomie et sécurité.',
    icon: 'solar:pen-bold' as const,
  },
  {
    title: 'Sécurité & conformité',
    description:
      'Données hébergées en France, conformité RGPD, environnement sécurisé pour les familles et les entreprises.',
    icon: 'solar:shield-check-bold' as const,
  },
];

// ----------------------------------------------------------------------

export function DecouvreFeatured({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade('inDown')}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            CARACTÉRISTIQUES
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Pourquoi choisir Yonnov'IA ?
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography sx={{ mx: 'auto', maxWidth: 700, color: 'text.secondary', mb: 8 }}>
            Yonnov'IA, c'est l'alliance de l'innovation, de l'accessibilité et de la sécurité pour
            l'apprentissage, l'entrepreneuriat et la gestion d'entreprise. Profitez d'une synergie
            unique entre Mindz'Kid, ADA'Z, B-Bot, Formevo et bien d'autres solutions, pour
            accompagner chaque étape de votre parcours, de l'enfance à la réussite professionnelle.
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

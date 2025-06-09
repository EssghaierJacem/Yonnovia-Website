import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const STEPS = [
  {
    number: 1,
    title: "L'Idée Créative",
    description:
      'Les enfants apprennent à identifier des problèmes et à imaginer des solutions créatives. Ils développent leur capacité à innover et à penser de manière critique.',
    icon: 'solar:lightbulb-bold',
    badge: 'Imaginatif',
    missions: [
      'Identifier un problème à résoudre',
      'Brainstorming de solutions',
      'Évaluer la faisabilité des idées',
    ],
  },
  {
    number: 2,
    title: "Le Plan d'Action",
    description:
      'Cette étape enseigne aux enfants à structurer leurs idées en plans concrets. Ils apprennent les bases de la planification de projet et de la gestion des ressources.',
    icon: 'solar:document-bold',
    badge: 'Méthodique',
    missions: [
      "Créer un plan d'action détaillé",
      'Identifier les ressources nécessaires',
      'Établir un calendrier simple',
    ],
  },
  {
    number: 3,
    title: 'La Création',
    description:
      "Les enfants passent à l'action en développant un prototype ou un premier service. Ils découvrent l'importance de la qualité et de l'amélioration continue.",
    icon: 'solar:tools-bold',
    badge: 'Créateur',
    missions: [
      'Développer un prototype',
      'Tester le produit ou service',
      'Améliorer en fonction des retours',
    ],
  },
  {
    number: 4,
    title: 'La Communication',
    description:
      'Apprendre à présenter son projet de manière convaincante et à utiliser différents canaux pour atteindre son public cible.',
    icon: 'solar:chat-round-dots-bold',
    badge: 'Communicant',
    missions: [
      'Créer une présentation de son projet',
      'Développer un argumentaire',
      "S'entraîner à pitcher son idée",
    ],
  },
  {
    number: 5,
    title: 'La Collaboration',
    description:
      "Les enfants découvrent l'importance du travail d'équipe et des partenariats. Ils apprennent à collaborer avec d'autres pour améliorer leur projet.",
    icon: 'solar:users-group-rounded-bold',
    badge: 'Collaboratif',
    missions: [
      'Former des partenariats',
      "Distribuer les rôles dans l'équipe",
      "Organiser des réunions d'équipe",
    ],
  },
];

// ----------------------------------------------------------------------

export function ParcoursSteps({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
          background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0)} 0%, ${
            theme.palette.background.neutral
          } 100%)`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
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
            <Typography variant="h2">Les 5 étapes du parcours Kid-Preneur</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Notre parcours guidé en 5 étapes pour accompagner les enfants du concept à la
              réalisation de leur projet entrepreneurial.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={5}>
          {STEPS.map((step) => (
            <Grid key={step.number} size={{ xs: 12, md: 6, lg: 4 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 4,
                    height: 1,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[10],
                      bgcolor: 'background.paper',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      py: 1.5,
                      px: 2,
                      borderBottomLeftRadius: 16,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      typography: 'subtitle2',
                    }}
                  >
                    {step.badge}
                  </Box>

                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      typography: 'h4',
                      mb: 3,
                    }}
                  >
                    {step.number}
                  </Box>

                  <Typography variant="h5" paragraph>
                    {step.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                    {step.description}
                  </Typography>

                  <Box>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Missions:
                    </Typography>
                    {step.missions.map((mission, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 0.5 }}
                      >
                        <Iconify
                          icon="solar:check-circle-bold"
                          sx={{ color: 'primary.main', width: 20, height: 20 }}
                        />
                        <Typography variant="body2">{mission}</Typography>
                      </Stack>
                    ))}
                  </Box>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

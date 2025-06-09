import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import type { IconifyName } from 'src/components/iconify/register-icons';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Développement de la confiance',
    description:
      'En accomplissant les missions de chaque étape, les enfants gagnent en confiance et développent leur estime de soi.',
    icon: 'solar:medal-ribbons-star-bold' as IconifyName,
  },
  {
    title: 'Créativité et innovation',
    description:
      'Le parcours stimule la pensée créative et encourage les enfants à trouver des solutions innovantes.',
    icon: 'solar:lamp-bold-duotone' as IconifyName,
  },
  {
    title: 'Compétences pratiques',
    description:
      "Les enfants acquièrent des compétences concrètes en gestion de projet, communication et travail d'équipe.",
    icon: 'solar:user-hand-up-bold' as IconifyName,
  },
  {
    title: 'Éducation financière',
    description:
      "Grâce à Kid'Pay et aux activités entrepreneuriales, les enfants comprennent la valeur de l'argent et les bases de la gestion financière.",
    icon: 'solar:wallet-money-bold' as IconifyName,
  },
  {
    title: "Apprentissage par l'action",
    description:
      "Notre pédagogie favorise l'apprentissage par la pratique, permettant aux enfants d'assimiler durablement les connaissances.",
    icon: 'solar:book-bookmark-bold' as IconifyName,
  },
  {
    title: "Préparation pour l'avenir",
    description:
      'Les compétences entrepreneuriales développées préparent les enfants aux défis du monde professionnel de demain.',
    icon: 'solar:rocket-bold' as IconifyName,
  },
];

// ----------------------------------------------------------------------

export function ParcoursBenefits({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
          background: `linear-gradient(180deg, ${
            theme.palette.background.neutral
          } 0%, ${alpha(theme.palette.background.default, 0)} 100%)`,
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
            <Typography variant="h2">Ce que votre enfant va développer</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Le parcours Kid-Preneur permet à votre enfant de développer de nombreuses compétences
              essentielles pour son avenir.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {BENEFITS.map((benefit) => (
            <Grid key={benefit.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <m.div variants={varFade('inUp')}>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="flex-start"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[8],
                      bgcolor: 'background.paper',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 1.5,
                      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Iconify
                      icon={benefit.icon}
                      width={28}
                      sx={{
                        color: 'primary.main',
                      }}
                    />
                  </Box>

                  <Stack spacing={0.5}>
                    <Typography variant="h6">{benefit.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {benefit.description}
                    </Typography>
                  </Stack>
                </Stack>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Léa, 10 ans',
    role: 'Kid-Preneur',
    quote:
      "Avec le parcours Kid-Preneur, j'ai créé ma propre ligne de bracelets écologiques. J'ai adoré apprendre à pitcher mon idée et à calculer mes prix. Maintenant, je vends mes créations sur Kid'Market!",
    avatar: `${CONFIG.assetsDir}/assets/images/avatar/avatar_1.jpg`,
  },
  {
    name: 'Thomas, 12 ans',
    role: 'Kid-Preneur',
    quote:
      "J'ai toujours eu plein d'idées, mais je ne savais pas comment les réaliser. Grâce au parcours, j'ai pu lancer mon service de tutorat en mathématiques pour les plus jeunes. Coach ADA'Z m'a beaucoup aidé!",
    avatar: `${CONFIG.assetsDir}/assets/images/avatar/avatar_2.jpg`,
  },
  {
    name: 'Julie, maman de Mathis',
    role: 'Parent',
    quote:
      'Le changement chez mon fils est incroyable! Il est devenu plus confiant et organisé. Son projet de livre digital lui a appris la persévérance et le sens des responsabilités. Une expérience très enrichissante!',
    avatar: `${CONFIG.assetsDir}/assets/images/avatar/avatar_3.jpg`,
  },
  {
    name: 'Marc, papa de Sophie',
    role: 'Parent',
    quote:
      "Ma fille a développé un véritable esprit d'entreprise grâce au parcours Kid-Preneur. Elle a appris la valeur du travail et de l'argent tout en s'amusant. Je recommande vivement ce programme!",
    avatar: `${CONFIG.assetsDir}/assets/images/avatar/avatar_4.jpg`,
  },
];

// ----------------------------------------------------------------------

export function ParcoursTestimonials({ sx, ...other }: BoxProps) {
  const theme = useTheme();

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
            <Typography variant="h2">Témoignages</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Découvrez ce que les enfants et leurs parents disent de notre parcours Kid-Preneur.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((testimonial) => (
            <Grid key={testimonial.name} size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 3,
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: theme.shadows[3],
                    borderRadius: 2,
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      width: 40,
                      height: 40,
                      opacity: 0.1,
                      borderRadius: '50%',
                      background: `url('${CONFIG.assetsDir}/assets/icons/quote.svg') no-repeat center/cover`,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      mb: 3,
                      mt: 2,
                      ml: 2,
                      minHeight: 120,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 'auto' }}>
                    <Image
                      alt={testimonial.name}
                      src={testimonial.avatar}
                      sx={{ width: 48, height: 48, borderRadius: '50%' }}
                    />

                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2">{testimonial.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {testimonial.role}
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const ECOSYSTEM_PARTS = [
  {
    title: "Kid'Play",
    description: 'Apprendre en jouant (vidéos, quiz, capsules, jeux de rôle)',
    icon: 'solar:play-circle-bold' as const,
  },
  {
    title: "Kid'Project",
    description: 'Simuler et gérer de vrais projets pas à pas',
    icon: 'solar:pen-bold' as const,
  },
  {
    title: "Kid'Market",
    description: 'Vendre ses créations sur un e-shop sécurisé',
    icon: 'solar:heart-bold' as const,
  },
  {
    title: "Kid'In",
    description: 'Réseau social sécurisé pour collaborer entre jeunes innovateurs',
    icon: 'solar:user-rounded-bold' as const,
  },
];

// ----------------------------------------------------------------------

export function DecouvreMission({ sx, ...other }: BoxProps) {
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
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <m.div variants={varFade('inRight')}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Découvre Mind'z'Kid
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                Un écosystème d'apprentissage en 4 volets :
              </Typography>

              {ECOSYSTEM_PARTS.map((part) => (
                <Box
                  key={part.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      p: 1,
                      borderRadius: '50%',
                      bgcolor: 'primary.lighter',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Iconify icon={part.icon} width={24} sx={{ color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {part.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {part.description}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Paper
                sx={{
                  p: 3,
                  mt: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  boxShadow: (theme) => theme.shadows[4],
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: 24,
                    transform: 'rotate(2deg)',
                  }}
                >
                  <Iconify icon="solar:heart-bold" width={32} sx={{ color: 'primary.main' }} />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    ml: 2,
                    fontWeight: 500,
                  }}
                >
                  "Mind'z'Kid, c'est comme une école de la vie… mais en plus fun !"
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    textAlign: 'right',
                    fontWeight: 'bold',
                  }}
                >
                  — YonnKid
                </Typography>
              </Paper>
            </m.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <m.div variants={varFade('inLeft')}>
              <Image
                alt="Mind'z'Kid Écosystème"
                src={`${CONFIG.assetsDir}/assets/images/about/what.webp`}
                ratio="16/9"
                sx={(theme) => ({
                  borderRadius: 3,
                  boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                  ...theme.applyStyles('dark', {
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                  }),
                })}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

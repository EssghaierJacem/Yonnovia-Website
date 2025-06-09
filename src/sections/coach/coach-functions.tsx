import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function CoachFunctions({ sx, ...other }: BoxProps) {
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
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <m.div variants={varFade('inRight')}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Qui est ADA'Z ?
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  mb: 5,
                }}
              >
                ADA'Z est un bot intelligent en forme de fennec agile, mascotte du programme. Il
                guide chaque enfant dans ses missions, propose des conseils adaptés, encourage et
                célèbre chaque progrès. Doté d'IA, il s'adapte à chaque profil (âge, niveau, besoin
                spécifique).
              </Typography>
            </m.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <m.div variants={varFade('inLeft')}>
              <Image
                alt="Coach ADA'Z"
                src={`${CONFIG.assetsDir}/assets/images/about/what.jpg`}
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

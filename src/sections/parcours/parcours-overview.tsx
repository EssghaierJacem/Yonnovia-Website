import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { RouterLink as Link } from 'src/routes/components/router-link';

// ----------------------------------------------------------------------

export function ParcoursOverview({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container
        component={MotionViewport}
        sx={{ py: { xs: 10, md: 15 }, textAlign: { xs: 'center', md: 'unset' } }}
      >
        <Grid container columnSpacing={{ md: 3 }} sx={{ alignItems: 'flex-start' }}>
          <Grid
            container
            size={{ xs: 12, md: 6, lg: 7 }}
            sx={{ pr: { md: 7 }, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
          >
            <Grid size={6}>
              <m.div variants={varFade('inUp')}>
                <Image
                  alt="Kid-Preneur learning"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-small.webp`}
                  ratio="1/1"
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

            <Grid size={6}>
              <m.div variants={varFade('inUp')}>
                <Image
                  alt="Kid-Preneur project"
                  src={`${CONFIG.assetsDir}/assets/images/about/vision.jpg`}
                  ratio="3/4"
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

          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography component={m.h2} variants={varFade('inRight')} variant="h2" sx={{ mb: 3 }}>
              Notre approche pédagogique
            </Typography>

            <Typography
              component={m.p}
              variants={varFade('inRight')}
              sx={[
                (theme) => ({
                  color: 'text.secondary',
                  ...theme.applyStyles('dark', {
                    color: 'common.white',
                  }),
                }),
                { mb: 2 },
              ]}
            >
              Le parcours Kid-Preneur est conçu pour développer l'esprit d'entreprise et la
              créativité des enfants à travers des activités ludiques et éducatives. Notre programme
              unique combine apprentissage théorique et mise en pratique.
            </Typography>

            <Typography
              component={m.p}
              variants={varFade('inRight')}
              sx={[
                (theme) => ({
                  color: 'text.secondary',
                  ...theme.applyStyles('dark', {
                    color: 'common.white',
                  }),
                }),
                { mb: 5 },
              ]}
            >
              Chaque enfant progresse à son rythme à travers les 5 étapes du parcours, en relevant
              des défis adaptés à son âge et à ses intérêts. Notre coach ADA'Z les accompagne tout
              au long de leur aventure entrepreneuriale.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <m.div variants={varFade('inRight')}>
                <Link href="/coach-adaz">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                  >
                    Découvrir Coach ADA'Z
                  </Button>
                </Link>
              </m.div>

              <m.div variants={varFade('inRight')}>
                <Link href="/kid-market">
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                  >
                    Kid'Market
                  </Button>
                </Link>
              </m.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

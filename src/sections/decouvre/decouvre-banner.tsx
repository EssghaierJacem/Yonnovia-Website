import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function DecouvreBanner({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `url(${CONFIG.assetsDir}/assets/background/overlay.svg)`,
              `url(${CONFIG.assetsDir}/assets/images/about/hero.webp)`,
            ],
          }),
          height: { md: 560 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['Découvre', "Mind'z'Kid"]}
            variants={varFade('inRight', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="h4"
              sx={{ mt: 3, color: 'common.white', fontWeight: 'fontWeightSemiBold' }}
            >
              L'écosystème d'apprentissage innovant
              <br />
              pour les entrepreneurs en herbe
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Button
              size="large"
              variant="contained"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              sx={{ mt: 5 }}
              onClick={() => {
                window.location.href = '/parcours-kid-preneur';
              }}
            >
              Découvrir le parcours
            </Button>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}

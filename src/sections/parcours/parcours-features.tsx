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
import type { IconifyName } from 'src/components/iconify/register-icons';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: "Kid'Market",
    description:
      'Une plateforme de vente où les enfants peuvent présenter et commercialiser leurs produits et services',
    icon: 'solar:shop-bold' as IconifyName,
    path: '/kid-market',
    color: 'primary' as const,
  },
  {
    title: "Réseau Kid'In",
    description:
      'Un réseau social sécurisé permettant aux enfants entrepreneurs de se connecter et de collaborer',
    icon: 'solar:users-group-rounded-bold' as IconifyName,
    path: '/reseau-kidin',
    color: 'info' as const,
  },
  {
    title: "Kid'Pay",
    description: 'Un système de paiement éducatif pour apprendre la gestion financière',
    icon: 'solar:wallet-money-bold' as IconifyName,
    path: '/kid-pay',
    color: 'success' as const,
  },
];

// ----------------------------------------------------------------------

export function ParcoursFeatures({ sx, ...other }: BoxProps) {
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
            <Typography variant="h2">Nos programmes complémentaires</Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Découvrez nos différents programmes qui enrichissent le parcours Kid-Preneur et
              offrent une expérience complète.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, md: 4 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: 1,
                    borderRadius: 2,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[10],
                      bgcolor: 'background.paper',
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                  onClick={() => {
                    window.location.href = feature.path;
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha(theme.palette[feature.color].main, 0.08),
                      mb: 3,
                    }}
                  >
                    <Iconify
                      icon={feature.icon}
                      width={40}
                      sx={{
                        color: `${feature.color}.main`,
                      }}
                    />
                  </Box>

                  <Typography variant="h5" paragraph>
                    {feature.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{feature.description}</Typography>

                  <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: `${feature.color}.main`,
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
                      En savoir plus
                    </Typography>
                    <Iconify icon={'eva:arrow-ios-forward-fill' as IconifyName} width={16} />
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

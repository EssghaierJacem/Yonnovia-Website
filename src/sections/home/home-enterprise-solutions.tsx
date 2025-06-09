import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        right: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(50%)',
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, right: 80 }} />
  </>
);

// ----------------------------------------------------------------------

const ENTERPRISE_SOLUTIONS = [
  {
    icon: 'mdi:robot',
    title: 'Plugins IA pour ERP',
    description: 'Développement de plugins IA pour ERP (Odoo, Dynamics 365)',
  },
  {
    icon: 'mdi:school',
    title: 'Formations en ligne',
    description: 'Formations en ligne via formevo.fr',
  },
  {
    icon: 'mdi:chart-timeline-variant',
    title: 'Analyse prédictive',
    description: 'Analyse prédictive (stocks, trésorerie, RH)',
  },
  {
    icon: 'mdi:view-dashboard',
    title: 'Tableaux de bord stratégiques',
    description: 'Tableaux de bord stratégiques (Smart BI)',
  },
  {
    icon: 'mdi:shield-check',
    title: 'e-KWC et conformité',
    description: 'e-KWC et solutions de conformité',
  },
  {
    icon: 'mdi:clipboard-check',
    title: 'Audit interne',
    description: 'Audit interne & évaluation du contrôle',
  },
];

// ----------------------------------------------------------------------

const TECH_STACK = [
  {
    icon: 'logos:nodejs-icon',
    title: 'Backend',
    description: 'Node.js, Python, Docker',
  },
  {
    icon: 'logos:react',
    title: 'Frontend',
    description: 'React.js',
  },
  {
    icon: 'logos:google-cloud',
    title: 'IA',
    description: 'Google AI, Deep Learning, NLP, ML',
  },
  {
    icon: 'logos:mongodb',
    title: 'Base de données',
    description: 'MongoDB',
  },
  {
    icon: 'mdi:api',
    title: 'Intégration',
    description: 'Intégration ERP & APIs ouvertes',
  },
  {
    icon: 'mdi:shield-lock',
    title: 'Sécurité',
    description: 'Authentification renforcée, e-KYC, logs..',
  },
];

// ----------------------------------------------------------------------

export function HomeEnterpriseSolutions({ sx, ...other }: BoxProps) {
  const renderHeader = () => (
    <SectionTitle
      caption="Solutions IA pour Entreprises"
      title="Ce que nous faisons d'autre"
      txtGradient="pour les entreprises"
      description="Nous développons des solutions IA innovantes pour optimiser les processus d'entreprise, automatiser les tâches répétitives et générer des insights stratégiques."
      sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
    />
  );

  const renderSolutions = () => (
    <Box sx={{ position: 'relative', zIndex: 10 }}>
      <Grid container spacing={3}>
        {ENTERPRISE_SOLUTIONS.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <m.div variants={varFade('inUp')}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: (theme) => theme.transitions.create('all'),
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z24,
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    mb: 3,
                  }}
                >
                  <Iconify icon={item.icon as any} width={36} />
                </Box>

                <Typography variant="h5" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                  {item.description}
                </Typography>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderTechHeader = () => (
    <Box sx={{ textAlign: 'center', mt: { xs: 8, md: 15 }, mb: { xs: 8, md: 10 } }}>
      <m.div variants={varFade('inDown')}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          Technologie & Architecture
        </Typography>
      </m.div>

      <m.div variants={varFade('inDown')}>
        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          B-Bot, une plateforme modulaire et cloud-native
        </Typography>
      </m.div>

      <m.div variants={varFade('inDown')}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
          Notre architecture technique est conçue pour être évolutive, sécurisée et performante,
          s'adaptant aux besoins spécifiques de chaque entreprise.
        </Typography>
      </m.div>
    </Box>
  );

  const renderTechStack = () => (
    <Box sx={{ position: 'relative', zIndex: 10 }}>
      <Grid container spacing={3}>
        {TECH_STACK.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <m.div variants={varFade('inUp')}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: (theme) => theme.transitions.create('all'),
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z24,
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Iconify icon={item.icon as any} width={36} />
                </Box>

                <Typography variant="h5" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                  {item.description}
                </Typography>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey[500], 0.04),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        {renderLines()}

        {renderHeader()}

        {renderSolutions()}

        {renderTechHeader()}

        {renderTechStack()}
      </Container>
    </Box>
  );
}

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useTabs } from 'minimal-shared/hooks';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import type { IconifyName } from 'src/components/iconify/register-icons';

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    name: 'Gestion & Management',
    icon: 'solar:list-bold' as IconifyName,
    color: 'primary.main',
    items: [
      'Facturation & conformité KYC',
      'Automatisation des tâches',
      'Intégration ERP (Odoo, Sage, etc.)',
      'Rapports & alertes automatiques',
    ],
  },
  {
    name: 'Éducation & Apprentissage',
    icon: 'solar:book-bookmark-bold' as IconifyName,
    color: 'info.main',
    items: [
      "Parcours Mindz'Kid & ADA'Z",
      'Coaching, entraide & ludification',
      'Développement de compétences entrepreneuriales',
      'Plateforme Formevo pour la formation continue',
    ],
  },
  {
    name: 'Accessibilité & Inclusion',
    icon: 'solar:users-group-rounded-bold' as IconifyName,
    color: 'success.main',
    items: [
      'Commandes vocales & ergonomie',
      'Accessibilité PMR/PBS',
      'Sécurité & conformité RGPD',
      'Support & accompagnement personnalisé',
    ],
  },
];

// ----------------------------------------------------------------------

export function ParcoursComparison({ sx, ...other }: BoxProps) {
  const tabs = useTabs('Pour les enfants');

  const renderDescription = () => (
    <Stack
      spacing={3}
      sx={{
        mb: 8,
        textAlign: 'center',
      }}
    >
      <m.div variants={varFade('inUp')}>
        <Typography variant="h2">Pourquoi choisir Yonnov'IA ?</Typography>
      </m.div>

      <m.div variants={varFade('inUp')}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
          Yonnov'IA, c'est l'écosystème qui réunit Mindz'Kid, ADA'Z, B-Bot, Formevo et bien d'autres
          solutions innovantes pour accompagner l'apprentissage, l'entrepreneuriat et la gestion
          d'entreprise. Profitez d'une synergie unique, d'une accessibilité renforcée et d'une
          expertise IA pour chaque étape de votre parcours, de l'enfance à la réussite
          professionnelle.
        </Typography>
      </m.div>
    </Stack>
  );

  const renderContentDesktop = () => (
    <Box gridTemplateColumns="repeat(3, 1fr)" sx={{ display: { xs: 'none', md: 'grid' } }}>
      {CATEGORIES.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          sx={(theme) => ({
            ...(category.name === 'Pour les parents' && {
              [theme.breakpoints.down(1440)]: {
                borderLeft: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
                borderRight: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
              },
            }),
          })}
        />
      ))}
    </Box>
  );

  const renderContentMobile = () => (
    <Stack spacing={5} alignItems="center" sx={{ display: { md: 'none' } }}>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={[
          (theme) => ({
            boxShadow: `0px -2px 0px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)} inset`,
          }),
        ]}
      >
        {CATEGORIES.map((tab) => (
          <Tab key={tab.name} value={tab.name} label={tab.name} />
        ))}
      </Tabs>

      <Box
        sx={[
          (theme) => ({
            width: 1,
            borderRadius: 2,
            border: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
          }),
        ]}
      >
        {CATEGORIES.map(
          (tab) => tab.name === tabs.value && <CategoryCard key={tab.name} category={tab} />
        )}
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        {renderDescription()}

        {renderContentDesktop()}

        {renderContentMobile()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CategoryCardProps = BoxProps & {
  category: {
    name: string;
    icon: IconifyName;
    color: string;
    items: string[];
  };
};

function CategoryCard({ category, sx, ...other }: CategoryCardProps) {
  const isForChildren = category.name === 'Pour les enfants';
  const isForParents = category.name === 'Pour les parents';
  const isForTeachers = category.name === 'Pour les enseignants';

  return (
    <Box
      sx={[
        () => ({
          px: 6,
          py: 8,
          gap: 5,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 auto' }}>
          <m.div variants={varFade('inLeft', { distance: 24 })}>
            <Typography variant="h4" component="h6">
              {category.name}
            </Typography>
          </m.div>

          <Box
            sx={{
              width: 32,
              height: 6,
              opacity: 0.24,
              borderRadius: 1,
              bgcolor: category.color,
              mt: 1,
            }}
          />
        </Box>

        <m.div variants={varFade('inLeft', { distance: 24 })}>
          <Iconify icon={category.icon} width={40} sx={{ color: category.color }} />
        </m.div>
      </Box>

      <Stack spacing={2.5}>
        {category.items.map((item) => (
          <Box
            key={item}
            component={m.div}
            variants={varFade('in')}
            sx={{
              gap: 1.5,
              display: 'flex',
              typography: 'body2',
              alignItems: 'center',
            }}
          >
            <Iconify width={16} icon="eva:checkmark-fill" sx={{ color: category.color }} />
            {item}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

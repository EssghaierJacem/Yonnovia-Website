import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Iconify } from 'src/components/iconify';
import type { IconifyName } from 'src/components/iconify/register-icons';

const SERVICES: {
  title: string;
  href: string;
  description: string;
  cta: string;
  icon: IconifyName;
}[] = [
  {
    title: 'Essayez B-Bot gratuitement',
    href: 'https://bbot.app',
    description:
      'Découvrez la puissance de B-Bot, notre assistant business 8-en-1, gratuitement et sans engagement.',
    cta: 'Accéder à B-Bot',
    icon: 'solar:box-minimalistic-bold',
  },
  {
    title: 'Réservez une démonstration personnalisée',
    href: '/contact',
    description:
      'Planifiez une démo sur-mesure avec nos experts pour explorer nos solutions adaptées à vos besoins.',
    cta: 'Réserver une démo',
    icon: 'solar:calendar-date-bold',
  },
  {
    title: 'Essayer nos Solutions entreprise',
    href: '/produits',
    description:
      "Testez l'ensemble de nos solutions innovantes pour la gestion, l'éducation et l'inclusion.",
    cta: 'Découvrir les solutions',
    icon: 'solar:box-minimalistic-bold',
  },
];

export function ServicesDecouverte() {
  return (
    <Stack spacing={4}>
      {SERVICES.map((service) => (
        <Box
          key={service.title}
          sx={{ p: 3, borderRadius: 2, bgcolor: 'background.neutral', boxShadow: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Iconify icon={service.icon} width={36} color="primary.main" />
            <Box>
              <Link
                href={service.href}
                target="_blank"
                rel="noopener"
                underline="hover"
                color="inherit"
              >
                <Typography variant="h5" sx={{ mb: 0.5 }}>
                  {service.title}
                </Typography>
              </Link>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>{service.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                rel={service.href.startsWith('http') ? 'noopener' : undefined}
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                {service.cta}
              </Button>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

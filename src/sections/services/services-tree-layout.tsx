import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Iconify } from 'src/components/iconify';
import type { IconifyName } from 'src/components/iconify/register-icons';
import Container from '@mui/material/Container';
import { Image } from 'src/components/image';

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
    title: 'Se former avec formevo.fr',
    href: 'https://formevo.fr',
    description:
      'Développez vos compétences et celles de vos équipes grâce à nos formations certifiantes.',
    cta: 'Découvrir Formevo',
    icon: 'solar:pen-bold',
  },
  {
    title: 'Essayer nos Solutions entreprise',
    href: '/produits',
    description:
      "Testez l'ensemble de nos solutions innovantes pour la gestion, l'éducation et l'inclusion.",
    cta: 'Découvrir les solutions',
    icon: 'solar:box-minimalistic-bold',
  },
  {
    title: "Les futurs projects managers Mind'z kid",
    href: '/contact',
    description:
      "Rejoignez notre programme pour devenir un chef de projet digital avec Mind'z kid.",
    cta: 'En savoir plus',
    icon: 'solar:list-bold',
  },
  {
    title: "Evaluer votre maturité digital avec Yann'IS Index",
    href: '/contact',
    description:
      "Mesurez la maturité digitale de votre organisation avec notre outil exclusif Yann'IS Index.",
    cta: 'Évaluer maintenant',
    icon: 'solar:eye-bold',
  },
  {
    title: "Evaluer votre Contrôle Interne avec Yann'IC Index",
    href: '/contact',
    description: "Analysez et améliorez votre contrôle interne grâce à Yann'IC Index.",
    cta: 'Évaluer le contrôle',
    icon: 'solar:flag-bold',
  },
  {
    title: 'Solliciter notre Expertise',
    href: '/contact',
    description:
      "Bénéficiez de l'accompagnement de nos experts pour vos projets de transformation digitale.",
    cta: 'Solliciter un expert',
    icon: 'solar:heart-bold',
  },
];

const LEFT_SERVICES = SERVICES.slice(0, 4);
const RIGHT_SERVICES = SERVICES.slice(4);

export function ServicesTreeLayout() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      {/* Tree Layout */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 6, md: 0 }}
        justifyContent="center"
        alignItems="stretch"
        sx={{ width: '100%' }}
      >
        {/* Left side */}
        <Stack
          spacing={4}
          sx={{
            width: { xs: '100%', md: '40%' },
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-end' },
            mb: { xs: 0, md: 0 },
          }}
        >
          {LEFT_SERVICES.map((service) => (
            <Box
              key={service.title}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'background.neutral',
                boxShadow: 1,
                maxWidth: 400,
                width: '100%',
                ml: { md: 'auto' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Iconify icon={service.icon} width={36} color="primary.main" />
                <Box>
                  <Link
                    href={service.href}
                    target={service.href && service.href.startsWith('http') ? '_blank' : undefined}
                    rel={service.href && service.href.startsWith('http') ? 'noopener' : undefined}
                    underline="hover"
                    color="inherit"
                  >
                    <Typography variant="h5" sx={{ mb: 0.5, fontSize: '1.1rem' }}>
                      {service.title}
                    </Typography>
                  </Link>
                  <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.9rem' }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={service.href}
                    target={service.href && service.href.startsWith('http') ? '_blank' : undefined}
                    rel={service.href && service.href.startsWith('http') ? 'noopener' : undefined}
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                    size="small"
                    sx={{ borderRadius: 2 }}
                  >
                    {service.cta}
                  </Button>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>

        {/* Center vertical line */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
          }}
        >
          <Box sx={{ width: 4, height: '100%', bgcolor: 'divider', borderRadius: 2 }} />
        </Box>

        {/* Right side */}
        <Stack
          spacing={4}
          sx={{
            width: { xs: '100%', md: '40%' },
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: { xs: 0, md: 0 },
          }}
        >
          {RIGHT_SERVICES.map((service) => (
            <Box
              key={service.title}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'background.neutral',
                boxShadow: 1,
                maxWidth: 400,
                width: '100%',
                mr: { md: 'auto' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Iconify icon={service.icon} width={36} color="primary.main" />
                <Box>
                  <Link
                    href={service.href}
                    target={service.href && service.href.startsWith('http') ? '_blank' : undefined}
                    rel={service.href && service.href.startsWith('http') ? 'noopener' : undefined}
                    underline="hover"
                    color="inherit"
                  >
                    <Typography variant="h5" sx={{ mb: 0.5, fontSize: '1.1rem' }}>
                      {service.title}
                    </Typography>
                  </Link>
                  <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.9rem' }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={service.href}
                    target={service.href && service.href.startsWith('http') ? '_blank' : undefined}
                    rel={service.href && service.href.startsWith('http') ? 'noopener' : undefined}
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                    size="small"
                    sx={{ borderRadius: 2 }}
                  >
                    {service.cta}
                  </Button>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'Comment B-Bot peut-il aider mon entreprise au quotidien ?',
    answer: (
      <Typography>
        B-Bot automatise la gestion, l'analyse et l'assistance de votre activité. Il vous fait
        gagner du temps sur la facturation, le suivi client, la conformité, et vous alerte sur les
        points clés de votre business.
      </Typography>
    ),
  },
  {
    question: 'Est-ce que B-Bot est compatible avec mon ERP ?',
    answer: (
      <Typography>
        Oui, B-Bot s'intègre facilement avec les principaux ERP du marché (Odoo, Dynamics, Sage,
        Cegid, etc.) pour centraliser et automatiser vos processus.
      </Typography>
    ),
  },
  {
    question: 'Mes données sont-elles sécurisées et conformes RGPD ?',
    answer: (
      <Typography>
        Absolument. B-Bot est 100% conforme RGPD et vos données sont hébergées en France, avec des
        protocoles de sécurité avancés.
      </Typography>
    ),
  },
  {
    question: 'B-Bot est-il accessible pour les personnes en situation de handicap ?',
    answer: (
      <Typography>
        Oui, B-Bot propose des commandes vocales et une interface adaptée pour garantir
        l'accessibilité à tous, y compris les PMR/PBS.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(FAQs[0].question);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = () => (
    <SectionTitle
      caption="FAQ & Assistance"
      title="Nous avons les"
      txtGradient="réponses"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = () => (
    <Stack
      spacing={1}
      sx={[
        () => ({
          mt: 8,
          mx: 'auto',
          maxWidth: 720,
          mb: { xs: 5, md: 8 },
        }),
      ]}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade('inUp', { distance: 24 })}
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          sx={(theme) => ({
            borderRadius: 2,
            transition: theme.transitions.create(['background-color'], {
              duration: theme.transitions.duration.short,
            }),
            '&::before': { display: 'none' },
            '&:hover': { bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16) },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          })}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6"> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );

  const renderContact = () => (
    <Box
      sx={[
        (theme) => ({
          px: 3,
          py: 8,
          textAlign: 'center',
          background: `linear-gradient(to left, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}, transparent)`,
        }),
      ]}
    >
      <m.div variants={varFade('in')}>
        <Typography variant="h4">Vous avez encore des questions ?</Typography>
      </m.div>

      <m.div variants={varFade('in')}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          Merci de décrire votre situation afin de recevoir les conseils les plus adaptés.
        </Typography>
      </m.div>

      <m.div variants={varFade('in')}>
        <Button
          color="inherit"
          variant="contained"
          href="/contact"
          startIcon={<Iconify icon="solar:letter-bold" />}
        >
          Contactez-nous
        </Button>
      </m.div>
    </Box>
  );

  return (
    <Box component="section" sx={sx} {...other}>
      <MotionViewport sx={{ py: 10, position: 'relative' }}>
        {topLines()}

        <Container>
          {renderDescription()}
          {renderContent()}
        </Container>

        <Stack sx={{ position: 'relative' }}>
          {bottomLines()}
          {renderContact()}
        </Stack>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const topLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon
        sx={{
          width: 30,
          height: 15,
          opacity: 0.24,
          position: 'static',
        }}
      />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

const bottomLines = () => (
  <>
    <FloatLine sx={{ top: 0, left: 0 }} />
    <FloatLine sx={{ bottom: 0, left: 0 }} />
    <FloatPlusIcon sx={{ top: -8, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
  </>
);

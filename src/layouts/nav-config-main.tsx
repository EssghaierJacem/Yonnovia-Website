import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Accueil',
    path: '/',
    icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
  },
  {
    title: 'À propos',
    path: paths.about,
    icon: <Iconify width={22} icon="solar:user-id-bold" />,
  },
  {
    title: 'Nos Produits',
    path: '/produits',
    icon: <Iconify width={22} icon="solar:box-minimalistic-bold" />,
  },
  {
    title: 'Nos Services',
    path: '/services',
    icon: <Iconify width={22} icon="solar:settings-bold" />,
  },
  {
    title: 'Communauté',
    path: '/communaute',
    icon: <Iconify width={22} icon="solar:users-group-rounded-bold" />,
  },
  {
    title: 'Contact',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:chat-round-dots-bold" />,
  },
];

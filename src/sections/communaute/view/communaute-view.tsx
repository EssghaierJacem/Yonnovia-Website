import type { IPostItem } from 'src/types/blog';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { _mock } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { PostSort } from 'src/sections/blog/post-sort';
import { PostSearch } from 'src/sections/blog/post-search';
import { PostListHorizontal } from 'src/sections/blog/post-list-horizontal';
import { usePopover } from 'minimal-shared/hooks';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Plus récent' },
  { value: 'popular', label: 'Populaire' },
  { value: 'oldest', label: 'Plus ancien' },
];

const ACTUALITES: IPostItem[] = [
  {
    id: '1',
    title: 'Lancement de B-Bot',
    tags: ['Business', 'Nouveauté'],
    publish: 'publié',
    content:
      "Découvrez notre nouvel assistant business, B-Bot, pour les TPE/PME. Une révolution pour la gestion et l'automatisation.",
    coverUrl: _mock.image.cover(1),
    metaTitle: 'Lancement de B-Bot',
    totalViews: 120,
    totalShares: 10,
    description: 'Découvrez notre nouvel assistant business, B-Bot, pour les TPE/PME.',
    totalComments: 2,
    createdAt: _mock.time(1),
    totalFavorites: 5,
    metaKeywords: ['B-Bot', 'Assistant', 'Business'],
    metaDescription: "Découvrez B-Bot, l'assistant business 8-en-1.",
    comments: [],
    author: { name: _mock.fullName(1), avatarUrl: _mock.image.avatar(1) },
    favoritePerson: [],
  },
  {
    id: '2',
    title: "Yonnov'IA à VivaTech 2024",
    tags: ['Événement', 'Innovation'],
    publish: 'publié',
    content:
      'Retour sur notre participation à VivaTech 2024. Merci à tous ceux qui sont venus nous rencontrer !',
    coverUrl: _mock.image.cover(2),
    metaTitle: "Yonnov'IA à VivaTech 2024",
    totalViews: 98,
    totalShares: 7,
    description: 'Retour sur notre participation à VivaTech 2024.',
    totalComments: 1,
    createdAt: _mock.time(2),
    totalFavorites: 3,
    metaKeywords: ['VivaTech', 'YonnovIA'],
    metaDescription: 'YonnovIA à VivaTech 2024.',
    comments: [],
    author: { name: _mock.fullName(2), avatarUrl: _mock.image.avatar(2) },
    favoritePerson: [],
  },
  {
    id: '3',
    title: 'Nouveau partenariat avec Formevo',
    tags: ['Partenariat', 'Formation'],
    publish: 'publié',
    content:
      "Nous sommes fiers d'annoncer notre partenariat avec Formevo pour offrir des formations innovantes à nos clients.",
    coverUrl: _mock.image.cover(3),
    metaTitle: 'Nouveau partenariat avec Formevo',
    totalViews: 75,
    totalShares: 4,
    description: 'Un partenariat pour booster la formation continue.',
    totalComments: 0,
    createdAt: _mock.time(3),
    totalFavorites: 2,
    metaKeywords: ['Formevo', 'Partenariat', 'Formation'],
    metaDescription: 'Partenariat YonnovIA x Formevo.',
    comments: [],
    author: { name: _mock.fullName(3), avatarUrl: _mock.image.avatar(3) },
    favoritePerson: [],
  },
  {
    id: '4',
    title: "Atelier : L'IA pour les écoles",
    tags: ['Éducation', 'Atelier'],
    publish: 'publié',
    content:
      "Retour sur notre atelier dédié à l'introduction de l'IA dans les écoles primaires et secondaires.",
    coverUrl: _mock.image.cover(4),
    metaTitle: "Atelier : L'IA pour les écoles",
    totalViews: 60,
    totalShares: 2,
    description: "L'IA s'invite dans les écoles avec YonnovIA.",
    totalComments: 1,
    createdAt: _mock.time(4),
    totalFavorites: 1,
    metaKeywords: ['IA', 'Éducation', 'Atelier'],
    metaDescription: 'Atelier IA pour les écoles.',
    comments: [],
    author: { name: _mock.fullName(4), avatarUrl: _mock.image.avatar(4) },
    favoritePerson: [],
  },
  {
    id: '5',
    title: 'Lancement de la Communauté YonnovIA',
    tags: ['Communauté', 'Annonce'],
    publish: 'publié',
    content: 'Rejoignez notre nouvelle communauté pour échanger, apprendre et innover ensemble !',
    coverUrl: _mock.image.cover(5),
    metaTitle: 'Lancement de la Communauté YonnovIA',
    totalViews: 110,
    totalShares: 8,
    description: 'La communauté YonnovIA est ouverte à tous.',
    totalComments: 3,
    createdAt: _mock.time(5),
    totalFavorites: 4,
    metaKeywords: ['Communauté', 'YonnovIA'],
    metaDescription: 'Lancement de la communauté YonnovIA.',
    comments: [],
    author: { name: _mock.fullName(5), avatarUrl: _mock.image.avatar(5) },
    favoritePerson: [],
  },
];

const BLOGS: IPostItem[] = [
  {
    id: '6',
    title: 'Conseils IA pour TPE',
    tags: ['IA', 'Conseils'],
    publish: 'publié',
    content:
      "Comment l'IA transforme la gestion des petites entreprises. Astuces et retours d'expérience.",
    coverUrl: _mock.image.cover(6),
    metaTitle: 'Conseils IA pour TPE',
    totalViews: 80,
    totalShares: 5,
    description: "Comment l'IA transforme la gestion des petites entreprises.",
    totalComments: 0,
    createdAt: _mock.time(6),
    totalFavorites: 2,
    metaKeywords: ['IA', 'TPE'],
    metaDescription: "L'IA pour les petites entreprises.",
    comments: [],
    author: { name: _mock.fullName(6), avatarUrl: _mock.image.avatar(6) },
    favoritePerson: [],
  },
  {
    id: '7',
    title: 'Éducation et numérique',
    tags: ['Éducation', 'Numérique'],
    publish: 'publié',
    content:
      "L'impact des outils digitaux sur l'apprentissage. Témoignages d'enseignants et d'élèves.",
    coverUrl: _mock.image.cover(7),
    metaTitle: 'Éducation et numérique',
    totalViews: 60,
    totalShares: 3,
    description: "L'impact des outils digitaux sur l'apprentissage.",
    totalComments: 0,
    createdAt: _mock.time(7),
    totalFavorites: 1,
    metaKeywords: ['Éducation', 'Numérique'],
    metaDescription: 'Outils digitaux et apprentissage.',
    comments: [],
    author: { name: _mock.fullName(7), avatarUrl: _mock.image.avatar(7) },
    favoritePerson: [],
  },
  {
    id: '8',
    title: 'Entreprendre en famille',
    tags: ['Entrepreneuriat', 'Famille'],
    publish: 'publié',
    content:
      'Découvrez comment lancer un projet entrepreneurial en famille, avec des conseils pratiques.',
    coverUrl: _mock.image.cover(8),
    metaTitle: 'Entreprendre en famille',
    totalViews: 45,
    totalShares: 2,
    description: 'Lancer un projet entrepreneurial en famille.',
    totalComments: 0,
    createdAt: _mock.time(8),
    totalFavorites: 1,
    metaKeywords: ['Entrepreneuriat', 'Famille'],
    metaDescription: 'Entreprendre en famille.',
    comments: [],
    author: { name: _mock.fullName(8), avatarUrl: _mock.image.avatar(8) },
    favoritePerson: [],
  },
  {
    id: '9',
    title: "L'importance du mentorat",
    tags: ['Mentorat', 'Coaching'],
    publish: 'publié',
    content:
      'Le mentorat, clé de la réussite pour les jeunes entrepreneurs. Découvrez des témoignages inspirants.',
    coverUrl: _mock.image.cover(9),
    metaTitle: "L'importance du mentorat",
    totalViews: 38,
    totalShares: 1,
    description: 'Le mentorat, clé de la réussite entrepreneuriale.',
    totalComments: 0,
    createdAt: _mock.time(9),
    totalFavorites: 1,
    metaKeywords: ['Mentorat', 'Coaching'],
    metaDescription: "L'importance du mentorat.",
    comments: [],
    author: { name: _mock.fullName(9), avatarUrl: _mock.image.avatar(9) },
    favoritePerson: [],
  },
  {
    id: '10',
    title: "L'inclusion numérique",
    tags: ['Inclusion', 'Numérique'],
    publish: 'publié',
    content:
      "Pourquoi l'inclusion numérique est essentielle pour une société plus juste et innovante.",
    coverUrl: _mock.image.cover(10),
    metaTitle: "L'inclusion numérique",
    totalViews: 52,
    totalShares: 2,
    description: "L'inclusion numérique pour tous.",
    totalComments: 0,
    createdAt: _mock.time(10),
    totalFavorites: 1,
    metaKeywords: ['Inclusion', 'Numérique'],
    metaDescription: "L'inclusion numérique.",
    comments: [],
    author: { name: _mock.fullName(10), avatarUrl: _mock.image.avatar(10) },
    favoritePerson: [],
  },
];

const TABS = [
  { value: 'actualites', label: 'Actualités', posts: ACTUALITES },
  { value: 'blogs', label: 'Blogs', posts: BLOGS },
];

export function CommunauteView() {
  const [currentTab, setCurrentTab] = useState('actualites');
  const [sortBy, setSortBy] = useState('latest');

  const currentPosts = TABS.find((tab) => tab.value === currentTab)?.posts || ACTUALITES;

  // Custom French PostSort
  function FrenchPostSort({
    sort,
    sortOptions,
    onSort,
  }: {
    sort: string;
    sortOptions: { value: string; label: string }[];
    onSort: (v: string) => void;
  }) {
    const menuActions = usePopover();
    return (
      <>
        <Button
          disableRipple
          color="inherit"
          onClick={menuActions.onOpen}
          endIcon={
            <Iconify
              icon={menuActions.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            />
          }
          sx={{ fontWeight: 'fontWeightSemiBold', textTransform: 'capitalize' }}
        >
          Trier par :
          <Box component="span" sx={{ ml: 0.5, fontWeight: 'fontWeightBold' }}>
            {sortOptions.find((o) => o.value === sort)?.label}
          </Box>
        </Button>
        <CustomPopover
          open={menuActions.open}
          anchorEl={menuActions.anchorEl}
          onClose={menuActions.onClose}
        >
          <MenuList>
            {sortOptions.map((option) => (
              <MenuItem
                key={option.value}
                selected={sort === option.value}
                onClick={() => {
                  menuActions.onClose();
                  onSort(option.value);
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </CustomPopover>
      </>
    );
  }

  // Custom French PostSearch
  function FrenchPostSearch({ redirectPath }: { redirectPath: (title: string) => string }) {
    // Use the original PostSearch but override the renderInput
    // We'll just copy the PostSearch usage and override the placeholder
    // But since PostSearch doesn't accept placeholder, we can't pass it directly
    // So we use sx to set the placeholder via CSS
    return (
      <Box sx={{ width: { xs: 1, sm: 260 } }}>
        <PostSearch
          redirectPath={redirectPath}
          sx={{
            '& input': {
              '::placeholder': { color: 'text.disabled', opacity: 1 },
            },
          }}
        />
        <style>{`input[placeholder="Rechercher..."] { color: #888 !important; } input[placeholder="Rechercher..."]::placeholder { color: #888 !important; }`}</style>
        <script>{`setTimeout(() => {document.querySelectorAll('input[placeholder="Rechercher..."]').forEach(i => i.setAttribute('placeholder', 'Rechercher...'));}, 100);`}</script>
      </Box>
    );
  }

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Communauté"
        links={[{ name: 'Accueil', href: '/' }, { name: 'Communauté' }]}
        action={null}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Box
        sx={{
          gap: 3,
          display: 'flex',
          mb: { xs: 3, md: 5 },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-end', sm: 'center' },
        }}
      >
        <FrenchPostSearch redirectPath={(title: string) => paths.post.details(title)} />
        <FrenchPostSort
          sort={sortBy}
          onSort={(newValue: string) => setSortBy(newValue)}
          sortOptions={SORT_OPTIONS}
        />
      </Box>

      <Tabs
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            iconPosition="end"
            value={tab.value}
            label={tab.label}
            icon={
              <Label variant={currentTab === tab.value ? 'filled' : 'soft'} color="info">
                {tab.posts.length}
              </Label>
            }
            sx={{ textTransform: 'capitalize' }}
          />
        ))}
      </Tabs>

      <PostListHorizontal posts={currentPosts} />
      {currentPosts.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: { xs: 5, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
          // Optionally, you can add French labels here if needed
        />
      )}
    </DashboardContent>
  );
}

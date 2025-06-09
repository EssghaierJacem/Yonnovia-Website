import type { BoxProps } from '@mui/material/Box';
import type { IPostItem } from 'src/types/blog';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { paths } from 'src/routes/paths';
import { _mock } from 'src/_mock';
import { PostItem, PostItemLatest } from 'src/sections/blog/post-item';

// ----------------------------------------------------------------------

const ACTUALITES: IPostItem[] = [
  {
    id: '1',
    title: 'Lancement de B-Bot',
    tags: ['Business', 'Nouveauté'],
    publish: 'published',
    content: 'Découvrez notre nouvel assistant business, B-Bot, pour les TPE/PME.',
    coverUrl: _mock.image.cover(1),
    metaTitle: 'Lancement de B-Bot',
    totalViews: 120,
    totalShares: 10,
    description: 'Découvrez notre nouvel assistant business.',
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
    title: "Yonnov'IA à VivaTech",
    tags: ['Événement', 'Innovation'],
    publish: 'published',
    content: 'Retour sur notre participation à VivaTech 2024.',
    coverUrl: _mock.image.cover(2),
    metaTitle: "Yonnov'IA à VivaTech",
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
];

const BLOGS: IPostItem[] = [
  {
    id: '3',
    title: 'Conseils IA pour TPE',
    tags: ['IA', 'Conseils'],
    publish: 'published',
    content: "Comment l'IA transforme la gestion des petites entreprises.",
    coverUrl: _mock.image.cover(3),
    metaTitle: 'Conseils IA pour TPE',
    totalViews: 80,
    totalShares: 5,
    description: "Comment l'IA transforme la gestion des petites entreprises.",
    totalComments: 0,
    createdAt: _mock.time(3),
    totalFavorites: 2,
    metaKeywords: ['IA', 'TPE'],
    metaDescription: "L'IA pour les petites entreprises.",
    comments: [],
    author: { name: _mock.fullName(3), avatarUrl: _mock.image.avatar(3) },
    favoritePerson: [],
  },
  {
    id: '4',
    title: 'Éducation et numérique',
    tags: ['Éducation', 'Numérique'],
    publish: 'published',
    content: "L'impact des outils digitaux sur l'apprentissage.",
    coverUrl: _mock.image.cover(4),
    metaTitle: 'Éducation et numérique',
    totalViews: 60,
    totalShares: 3,
    description: "L'impact des outils digitaux sur l'apprentissage.",
    totalComments: 0,
    createdAt: _mock.time(4),
    totalFavorites: 1,
    metaKeywords: ['Éducation', 'Numérique'],
    metaDescription: 'Outils digitaux et apprentissage.',
    comments: [],
    author: { name: _mock.fullName(4), avatarUrl: _mock.image.avatar(4) },
    favoritePerson: [],
  },
];

function renderPostList(posts: IPostItem[]) {
  return (
    <Grid container spacing={3}>
      {posts.slice(0, 3).map((post, index) => (
        <Grid
          key={post.id}
          sx={{ display: { xs: 'none', lg: 'block' } }}
          size={{ xs: 12, sm: 6, md: 4, lg: index === 0 ? 6 : 3 }}
        >
          <PostItemLatest post={post} index={index} detailsHref={paths.post.details(post.title)} />
        </Grid>
      ))}
      {posts.slice(0, 3).map((post) => (
        <Grid key={post.id} sx={{ display: { lg: 'none' } }} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <PostItem post={post} detailsHref={paths.post.details(post.title)} />
        </Grid>
      ))}
      {posts.slice(3).map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <PostItem post={post} detailsHref={paths.post.details(post.title)} />
        </Grid>
      ))}
    </Grid>
  );
}

export function CommunauteList({ sx, ...other }: BoxProps) {
  return (
    <Box sx={sx} {...other}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Actualités
      </Typography>
      {renderPostList(ACTUALITES)}

      <Typography variant="h3" sx={{ mb: 4, mt: 8 }}>
        Blogs
      </Typography>
      {renderPostList(BLOGS)}
    </Box>
  );
}

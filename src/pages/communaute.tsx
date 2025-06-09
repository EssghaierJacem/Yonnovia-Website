import { CommunauteView } from 'src/sections/communaute/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Communauté - YonnovIA',
  description:
    "Retrouvez les actualités et les blogs de la communauté Yonnov'IA : innovations, conseils, retours d'expérience et plus encore.",
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <CommunauteView />
    </>
  );
}

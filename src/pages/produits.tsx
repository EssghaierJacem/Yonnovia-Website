import { ProduitsView } from 'src/sections/produits/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Nos Produits - YonnovIA',
  description:
    "Découvrez l'ensemble des produits innovants proposés par Yonnov'IA pour accompagner votre transformation digitale.",
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <ProduitsView />
    </>
  );
}

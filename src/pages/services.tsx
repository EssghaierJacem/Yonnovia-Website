import { ServicesView } from 'src/sections/services/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Nos Services - YonnovIA',
  description:
    "Découvrez l'ensemble des services proposés par Yonnov'IA pour accompagner votre transformation digitale et booster votre performance.",
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <ServicesView />
    </>
  );
}

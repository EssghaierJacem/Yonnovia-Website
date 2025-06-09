import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: "MindzKid - YonnovIA",
  description:
    "Yonnovia est une startup française engagée dans la transformation digitale des TPE/PME grâce à l'intelligence artificielle. Nous croyons que l'IA ne doit pas être un luxe, mais un levier accessible à tous.",
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <HomeView />
    </>
  );
}

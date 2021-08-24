import Head from 'next/head';
import CommercialCategory from '../../components/commercial/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection/HeroSection';

const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Commercial Vehicle | Akij Motors</title>
      </Head>

      <main>
        <Layout>
          <HeroSection/>
           <CommercialCategory/>
        </Layout>
      </main>
    </>
  );
};

export default CommercialVehicle;

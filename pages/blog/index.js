import Head from 'next/head';
import BlogHero from '../../components/Blog/BlogHero/BlogHero';
import Layout from '../../components/Layout';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Akij Motors</title>
      </Head>

      <main>
        <Layout>
          <BlogHero />
        </Layout>
      </main>
    </>
  );
};

export default BlogPage;

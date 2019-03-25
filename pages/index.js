import Head from 'next/head';
import Link from 'next/link';

const Index = () => (
  <div>
    <Head>
      <title>INdex</title>
    </Head>

    <Link href={{ pathname: 'contact', query: { id: 13, lang: 'es' } }}>
      <a>Ir a contactos</a>
    </Link>
  </div>
);
export default Index;

import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>S.S. Compucare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Homepage

      <style jsx global>{
        `
        *{
          margin: 0;
        }
        `
      }</style>
    </Layout>
  )
}

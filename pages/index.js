import axios from 'axios';
import Head from 'next/head'
import { ENDPOINT } from '../utils/constants';

//views
import HomeView from '../views/Home';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <HomeView data={data} />
    </div>
  )
}

export async function getStaticProps(context) {
  const { data } = await axios({
    method: 'get',
    url: ENDPOINT,
  })

  return {
    props: {
      data: data
    },
    revalidate: 20
  }
}
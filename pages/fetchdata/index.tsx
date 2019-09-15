import { NextPage } from 'next';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
interface Props {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

const fetchdata: NextPage<Props> = ({ data = [] }) => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Fetch Data</h1>
    <p>This is the Fetch Data from getInitialProps</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <ul>
        {data.map((post, index) => {
          const { title, userId }: { title: string; userId: number } = post;
          return <li key={index}>{`userId: ${userId}: ${title}`}</li>;
        })}
      </ul>
    </p>
  </Layout>
);

fetchdata.getInitialProps = async ({}) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return { data: result.data };
  } catch (e) {
    return { data: [] };
  }
};

export default fetchdata;

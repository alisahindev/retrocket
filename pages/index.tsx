import Card from "components/Card";
import LastView from "components/LastView";
import Pagination from "components/Pagination";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../public/posts/1.json";

const Home: NextPage = ({ initalPosts, count }: any) => {
  const [posts, setPosts] = useState(initalPosts.posts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/posts/${page}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const { push } = useRouter();

  return (
    <>
      {posts?.map((post: any, index: number) => (
        <Card
          key={index}
          title={post.title}
          author={`${post.user.name} ${post.user.surname}`}
          img={post.featured_image_url}
          onClick={() => push(`/post/${post.id}`)}
        />
      ))}
      <Pagination
        setPage={setPage}
        loading={loading}
        selectedPage={page}
        pageCount={count}
      />
      <LastView />
    </>
  );
};

export async function getStaticProps() {
  const initalPosts = data;

  // get JSON count in posts folder for pagination
  // @ts-ignore
  const fileNames = await require.context("../public/posts", false, /\.json$/);
  // get file count in posts folder
  const jsonFiles = fileNames.keys().map((fileName: string) => {
    return fileName.replace(/^.*[\\\/]/, "").slice(0, -5);
  });
  const count = jsonFiles.length / 2;

  return {
    props: {
      initalPosts,
      count,
    },
  };
}

export default Home;

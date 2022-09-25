import Card from "components/Card";
import Pagination from "components/Pagination";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../public/posts/1.json";

const Home: NextPage = ({ initalPosts }: any) => {
  const [posts, setPosts] = useState(initalPosts.posts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/posts/${page}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        console.log(data.data);
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
      <Pagination setPage={setPage} loading={loading} selectedPage={page} />
    </>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch("http://localhost:3000/posts/3.json");
  // import posts from json file
  const initalPosts = data;
  // will receive `posts` as a prop at build time
  return {
    props: {
      initalPosts,
    },
  };
}

export default Home;

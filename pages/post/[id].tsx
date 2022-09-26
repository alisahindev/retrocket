import Card from "components/Card";
import { NextPage } from "next";
import React, { useEffect } from "react";

const Post: NextPage = ({ postData }: any) => {
  // set last view data to local storage
  useEffect(() => {
    localStorage.setItem("lastView", JSON.stringify(postData));
  }, [postData]);

  return (
    <div>
      <Card
        img={postData?.featured_image_url}
        title={postData?.title}
        author={`${postData?.user?.name} ${postData?.user?.surname}`}
        content={postData?.content}
        publish={postData?.published_at}
      />
    </div>
  );
};

export async function getStaticPaths() {
  //@ts-ignore
  const fileNames = await require.context(
    "../../public/post-details",
    false,
    /\.json$/
  );

  const paths = fileNames.keys().map((fileName: string) => {
    const id = fileName.replace(/^.*[\\\/]/, "").slice(0, -5);
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const postData = await import(
    `public/post-details/${parseInt(params.id)}.json`
  );
  const data = JSON.parse(JSON.stringify(postData));

  return {
    props: {
      postData: data,
    },
  };
}

export default Post;

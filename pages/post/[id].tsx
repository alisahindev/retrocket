import Card from "components/Card";
import { NextPage } from "next";
import React from "react";
import aa from "../../public/post-details/1.json";

const Post: NextPage = ({ postData }: any) => {
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

export async function getStaticPaths(context: any) {
  console.log(context, "context path");
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
  console.log(params, "heebelee");

  const postData = await import(`../public/post-details/${params.id}.json`);

  return {
    props: {
      postData,
    },
  };
}

export default Post;

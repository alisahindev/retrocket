import Card from "components/Card";
import { NextPage } from "next";
import React from "react";

const Authors: NextPage = ({ users }: any) => {
  return (
    <>
      {users.map((user: any, index: number) => (
        <Card
          key={index}
          title={`${user.name} ${user.surname}`}
          img={user.profile_image}
          isProfile={true}
        />
      ))}
    </>
  );
};

export async function getStaticProps() {
  // @ts-ignore
  const fileNames = await require.context("../public/users/", false, /\.json$/);
  const jsonFiles = fileNames
    .keys()
    .map((fileName: string) => {
      if (fileName.includes("public/users")) {
        return;
      }
      return fileName.replace(/^.*[\\\/]/, "").slice(0, -5);
    })
    .filter((file: string) => file !== undefined);

  const data = jsonFiles.map((file: string) => {
    return require(`../public/users/${file}.json`);
  });

  return {
    props: {
      users: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Authors;

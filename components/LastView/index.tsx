import Card from "components/Card";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./LastView.module.css";

const LastView = () => {
  const { push } = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("lastView")!));
  }, []);

  return (
    <>
      {data && (
        <div className={styles.container}>
          <h2 className={styles.title}>Son Görüntülenenler</h2>
          <Card
            title={data?.title}
            img={data?.featured_image_url}
            author={`${data?.user?.name} ${data?.user?.surname}`}
            onClick={() => push(`/post/${data?.id}`)}
            publish={data?.created_at}
          />
        </div>
      )}
    </>
  );
};

export default LastView;

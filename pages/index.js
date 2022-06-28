import Head from "next/head";
import Todoslayout from "../layouts/Todoslayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beautinda</title>
      </Head>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <Todoslayout>{page}</Todoslayout>;
};

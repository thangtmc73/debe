import { Page, Text, Card, Input } from "@geist-ui/core";
import NewConnection from "./components/NewConnection";
import styles from "./styles.module.scss";

export default function StartPage() {
  console.log("styles.cardSubTitle", styles.cardSubTitle);
  return (
    <div className={styles.container}>
      <div className={styles.slider}></div>
      <Page className={styles.main}>
        <Page.Content>
          <NewConnection />
        </Page.Content>
      </Page>
    </div>
  );
}

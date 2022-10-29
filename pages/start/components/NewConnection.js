import { Text, Card, Input, Divider, Button } from "@geist-ui/core";
import styles from "../styles.module.scss";

export default function NewConnection() {
  return (
    <Card className={styles.card} shadow={true}>
      <div style={{ marginBottom: "12px" }}>
        <Text marginBottom={0.1} h3>
          New Connection
        </Text>
        <Text small className={"cardSubTitle"}>
          Connect to a MongoDB deployment
        </Text>
      </div>
      <Input
        placeholder="eg mongodb+srv://username:password@cluster0-jtpxd.mongodb.net/admin"
        width="100%"
      >
        <Text h6>URI (Connection String)</Text>
      </Input>
      <Divider marginTop={"12px"} marginBottom={"12px"} />
      <Button type="success">Connect</Button>
    </Card>
  );
}

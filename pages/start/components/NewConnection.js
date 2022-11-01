import { useEffect, useState } from "react";
import { Text, Card, Input, Button, useInput } from "@geist-ui/core";
import styles from "../styles.module.scss";

const DEFAULT_VALUE = "mongodb://localhost:27017";
const REGEX_PREFIX = /^\w+:\/\//

export default function NewConnection() {
  const { state: connStr, bindings: connStrInputBindings } = useInput(DEFAULT_VALUE);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!connStr) {
      setError("");
      return;
    }
    if (!REGEX_PREFIX.test(connStr)) {
      setError(`Invalid connection string "${connStr}"`);
      return;
    }
    setError("");
  }, [connStr]);

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
        {...connStrInputBindings}
      >
        <Text h6>URI (Connection String)</Text>
      </Input>
      {error && <Text marginTop={"12px"} marginBottom="0px" h6 type="error">{error}</Text>}
      <Card.Footer>
        <Button disabled={!connStr || error} type="success-light">Connect</Button>
      </Card.Footer>
    </Card>
  );
}

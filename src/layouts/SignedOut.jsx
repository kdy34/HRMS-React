import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Menu style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        <Button.Group size="mini">
          <Button onClick={signIn} positive>
            Log In
          </Button>
          <Button primary>Sign Up</Button>
        </Button.Group>
      </Menu.Menu>
    </div>
  );
}
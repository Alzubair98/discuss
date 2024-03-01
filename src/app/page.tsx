import { Button } from "@nextui-org/react";
import * as action from "@/action";

export default function Home() {
  return (
    <div>
      <form action={action.signIn}>
        <Button type="submit">Sign in</Button>
      </form>

      <form action={action.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}

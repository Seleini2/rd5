import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {

  return (
    <main>
      <h1>My todos</h1>
    </main>
  );
}

export default App;

import Layout from "./Layout/Layout";
import { ServerProvider } from "./contexts/ServersContext";

function App() {
  return (
    <>
      <div className="app">
        <ServerProvider>
          <Layout></Layout>
        </ServerProvider>
      </div>
    </>
  );
}

export default App;

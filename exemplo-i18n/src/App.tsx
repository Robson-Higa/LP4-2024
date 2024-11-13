import { useRoutes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import routes from "./routes";
import Header from "./components/Header";

const App = () => {
  const elements = useRoutes(routes);

  return (
    <UserContextProvider>
      <Header />
      {elements}
    </UserContextProvider>
  );
};

export default App;

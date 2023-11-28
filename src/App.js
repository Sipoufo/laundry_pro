import { BrowserRouter } from "react-router-dom";
import RouteManagement from "./routes/RouteManagement";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <RouteManagement />
    </BrowserRouter>
  );
}

export default App;

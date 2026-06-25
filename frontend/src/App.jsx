import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import signup from "./pages/Dashbord";
import Dashbord from "./pages/Dashbord";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLogin />}/>
      <Route path="/signup" element={<signup />} />
      <Route path="/dashbord" element={<dashbord />} />
          </Routes>
    </BrowserRouter>
  );
}
export default App;
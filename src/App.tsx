import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/layout";
import AuthenticationContainer from "./features/authentication-container";
import DashboardContainer from "./features/authentication-container/dashboard-container";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
        <Route path="/login" element={<AuthenticationContainer />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

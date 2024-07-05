import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/layout";
import AuthenticationContainer from "./features/authentication-container";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
        <Route path="/login" element={<AuthenticationContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

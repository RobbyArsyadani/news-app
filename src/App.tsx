import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Layout } from "antd";

function App() {
  return (
    <Router>
      <Layout style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


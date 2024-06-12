import { Footer, Navbar } from "layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Grid>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Grid>
      </Router>

      <Footer />
    </>
  );
}

export default App;

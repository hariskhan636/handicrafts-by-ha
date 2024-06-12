import { Footer, Navbar } from "layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalog, ClutchBags, Home, Runners } from "pages";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />

      <Grid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/runners" element={<Runners />} />
          <Route path="/clutch-bags" element={<ClutchBags />} />
        </Routes>
      </Grid>

      <Footer />
    </>
  );
}

export default App;

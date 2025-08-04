import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";
import { FAQ } from './components/FAQ.jsx';
import { Footer } from "./components/Footer";
import Button from "./components/common/Button";
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

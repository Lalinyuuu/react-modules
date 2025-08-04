import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <div>
      <Provider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
      </Provider>
    </div>
  );
}

export default App;

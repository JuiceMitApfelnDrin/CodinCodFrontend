import Footer from "./section/Footer";
import FullLayout from "layouts/FullLayout";
import Header from "./section/Header";
import Main from "./section/Main";

const Index = () => {
  return (
    <FullLayout>
      <Header />
      <Main />
      <Footer />
    </FullLayout>
  );
};

export default Index;

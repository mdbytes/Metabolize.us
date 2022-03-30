import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

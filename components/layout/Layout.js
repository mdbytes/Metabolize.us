import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

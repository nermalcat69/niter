import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";

export default function Page() {
  return (
    <section className="min-h-screen px-10">
      <Header />
      <SectionOne />
      <Footer />
    </section>
  );
}

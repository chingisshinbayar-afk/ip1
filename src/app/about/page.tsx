import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <section className="about-page">
      <Header></Header>
      <p className="eyebrow">ABOUT US</p>
      <h1>About BookMart</h1>
      <p>BookMart бол programming, web development, AI болон technology номын жишээ онлайн дэлгүүр юм.</p>
      <h2>Our Goal</h2>
      <p>Оюутнуудад Next.js-ийн page, component, routing, static data гэсэн ойлголтыг практик байдлаар сурахад туслах.</p>
    <Footer></Footer>
    </section>
  );
}

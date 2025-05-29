import AboutView from "@/components/views/About/AboutView";
import ContactView from "@/components/views/contact/ContactView";
import FeatureView from "@/components/views/Features/FeatureView";
import HeroView from "@/components/views/Hero/HeroView";
import ProductView from "@/components/views/product/ProductView";

export default function Home() {
  return (
    <>
      <section id="/">
        <HeroView />
      </section>
      <section id="about">
        <AboutView />
      </section>
      <section id="features">
        <FeatureView />
      </section>
        <section id="product">
        <ProductView />
      </section>
      <section id="contact">
        <ContactView />
      </section>
    </>
  );
}

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact | Fondation Mobari Maria",
  description:
    "Contactez la Fondation Mobari Maria pour rejoindre notre mission, devenir partenaire ou soutenir nos actions humanitaires.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
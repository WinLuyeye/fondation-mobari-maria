export default function ContactMap() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl">
        <iframe
          src="https://maps.google.com/maps?q=Kinshasa%20R%C3%A9publique%20D%C3%A9mocratique%20du%20Congo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          loading="lazy"
          className="border-0"
        />
      </div>
    </section>
  );
}

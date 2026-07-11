import { Mail, Phone, MapPin } from "lucide-react";

const infos = [
  {
    icon: Mail,
    title: "Email",
    text: "contact@fondationmobarimaria.org",
  },

  {
    icon: Phone,
    title: "Téléphone",
    text: "+243 XXX XXX XXX",
  },

  {
    icon: MapPin,
    title: "Adresse",
    text: "Kinshasa, République Démocratique du Congo",
  },
];

export default function ContactInfo() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {infos.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                <Icon className="text-black" />
              </div>

              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

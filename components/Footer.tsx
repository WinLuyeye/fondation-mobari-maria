"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}

          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783444892/logo_m0zm6v.png"
                alt="Fondation Mobari Maria"
                width={100}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mb-6 leading-7 text-gray-400">
              La Fondation Mobari Maria œuvre pour la solidarité, l'inclusion
              sociale et l'autonomisation des personnes vulnérables en
              République Démocratique du Congo.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100082627152538"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF />
              </Link>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Navigation</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="transition hover:text-yellow-400">
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  href="/a-propos"
                  className="transition hover:text-yellow-400"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="/missions"
                  className="transition hover:text-yellow-400"
                >
                  Nos missions
                </Link>
              </li>

              <li>
                <Link
                  href="/projets"
                  className="transition hover:text-yellow-400"
                >
                  Nos projets
                </Link>
              </li>
            </ul>
          </div>

          {/* Domaines */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Nos actions</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Éducation</li>

              <li>Formation professionnelle</li>

              <li>Entrepreneuriat</li>

              <li>Action humanitaire</li>

              <li>Développement communautaire</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Contact</h3>

            <ul className="space-y-5 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-yellow-400" size={20} />

                <span>République Démocratique du Congo</span>
              </li>

              <li className="flex gap-3">
                <Phone className="shrink-0 text-yellow-400" size={20} />

                <span>+243 819292893 <br /> +243 81 2525 180</span>
              </li>

              <li className="flex gap-3">
                <Mail className="shrink-0 text-yellow-400" size={20} />

                <span>contact@fondationmobariamaria.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}

        <div className="mt-16 rounded-2xl bg-white/5 p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="mb-2 text-2xl font-bold">
                Rejoignez notre communauté
              </h3>

              <p className="text-gray-400">
                Recevez nos actualités et découvrez nos prochaines actions.
              </p>
            </div>

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-md bg-yellow-400 px-7 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Nous contacter
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {currentYear} Fondation Mobari Maria (FMM). Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

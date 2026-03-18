import React from "react";
import VolunteerImg from "../assets/VolunteerImg.jpg";
import { Link } from "react-router-dom";

const VolunteerHomeSection = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070b07] to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <span className="text-primary-500 text-xs tracking-[0.25em] uppercase font-medium">
            Volunteer Trek
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 leading-tight">
            Trek with purpose. Give back to the Himalayas.
          </h2>
          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Join our volunteer trekking journeys that blend mountain adventure
            with meaningful local impact. Support schools while experiencing
            authentic trails, culture, and connection.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-block px-8 py-3.5 bg-primary-500 hover:bg-primary-400 text-white font-semibold tracking-wider uppercase text-sm rounded-full transition-all"
            >
              Explore Volunteer Treks
            </Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={VolunteerImg}
            alt="Volunteer trek in the Himalayas"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VolunteerHomeSection;

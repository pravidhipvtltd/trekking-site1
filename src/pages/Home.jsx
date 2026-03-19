import Hero from "../components/Hero";
import SceneEmotional from "../components/SceneEmotional";
import SceneVisual from "../components/SceneVisual";
import SceneDestinations from "../components/SceneDestinations";
import SceneExperience from "../components/SceneExperience";
import SceneTestimonial from "../components/SceneTestimonial";
import SceneCTA from "../components/SceneCTA";
import VolunteerHomeSection from "../components/VolunteerHomeSection";
import ClintReviews from "../components/ClintReviews";

/**
 * Cinematic, story-driven homepage.
 * Each section is a scene in a journey through the Himalayas.
 */
export default function Home() {
  return (
    <>
      {/* Scene 1: Hero */}
      <Hero />
      {/* Scene 2: Emotional text */}
      {/* <SceneEmotional /> */}

      {/* Scene 3: Visual story */}
      {/* <SceneVisual /> */}

      {/* Scene 4: Destinations - full-bleed slides */}
      <SceneDestinations />

      {/* Volunteer Trek Section */}
      <VolunteerHomeSection />

      {/* Scene 5: Experience - Safety, Guides, Custom */}
      <SceneExperience />

      <ClintReviews tripadvisorUrl="#" />

      {/* Scene 6: Testimonial - large quote */}
      <SceneTestimonial />

      {/* Scene 7: Final CTA */}
      <SceneCTA />
    </>
  );
}

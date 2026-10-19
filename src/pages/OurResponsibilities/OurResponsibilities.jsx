import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const slidesData = [
  {
    image: "https://i.ibb.co/2pWFPyd/Golden-Hour-Mountain-Lake-Ride.png",
    title: "Places",
  },
  {
    image: "https://i.ibb.co/VdjbKJK/Golden-Hour-Garden-Friends-Selfie.png",
    title: "With Friends",
  },
  {
    image: "https://i.ibb.co/KpFHPjcR/Golden-Horizon-Wanderer.png",
    title: "Anywhere",
  },
  {
    image: "https://i.ibb.co/7tcZXRd6/Elegant-Networking-Reception.png",
    title: "Formal Events",
  },
  {
    image:
      "https://i.ibb.co/ZpVTMwq3/Sunlit-Backyard-Taco-Feast-with-Friends.png",
    title: "With Unlimited Food",
  },
  {
    image: "https://i.ibb.co/jP3LNWST/Golden-Hour-Confetti-Celebration.png",
    title: "Celebrate More",
  },
];

const OurResponsibilities = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (min-height: 650px)", () => {
        const list = container.current.querySelector(".list");
        const fill = container.current.querySelector(".fill");
        const pinSection = container.current.querySelector(".pin-section");

        const listItems = gsap.utils.toArray("li", list);
        const slides = gsap.utils.toArray(".slide", container.current);

        if (!listItems.length || !fill || !slides.length) {
          return;
        }

        // Initial state
        gsap.set(listItems, {
          color: "#111827",
        });

        gsap.set(slides, {
          autoAlpha: 0,
        });

        gsap.set(listItems[0], {
          color: "#0ae448",
        });

        gsap.set(slides[0], {
          autoAlpha: 1,
        });

        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top center",
        });

        // Scroll animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSection,

            // Pin only when the section reaches the top
            start: "top top",

            // Enough scroll distance for all six slides
            end: () => "+=" + window.innerHeight * 3,

            pin: true,

            // Reserve space for the pinned section
            pinSpacing: true,

            scrub: 1,

            invalidateOnRefresh: true,

            // Uncomment temporarily to debug
            // markers: true,
          },
        });

        // Give each slide its own animation step
        listItems.forEach((item, index) => {
          if (index === 0) return;

          const previousItem = listItems[index - 1];

          tl.to(
            previousItem,
            {
              color: "#111827",
              duration: 0.25,
            },
            index,
          )
            .to(
              item,
              {
                color: "#0ae448",
                duration: 0.25,
              },
              index,
            )
            .to(
              slides[index - 1],
              {
                autoAlpha: 0,
                duration: 0.25,
              },
              index,
            )
            .to(
              slides[index],
              {
                autoAlpha: 1,
                duration: 0.25,
              },
              index,
            );
        });

        // Progress bar animation
        tl.to(
          fill,
          {
            scaleY: 1,
            ease: "none",
            duration: tl.duration(),
          },
          0,
        );

        // Small pause at the end
        tl.to({}, { duration: 0.5 });
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <section className="pin-section min-h-screen lg:min-h-0 lg:h-screen text-white flex flex-col justify-center overflow-hidden py-6 lg:py-4">
        {/* Section Title */}
        <div className="text-center mb-5 lg:mb-8 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold libre">
            Our Responsibilities
          </h2>

          <p className="mt-3 text-base md:text-lg text-black/60">
            Bringing people together through meaningful experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10 items-center">
            {/* Left Side */}
            <div className="lg:col-span-2 flex gap-6 lg:gap-8 items-stretch">
              {/* Progress Bar */}
              <div className="w-1.5 shrink-0 bg-gray-300 rounded-full overflow-hidden">
                <div className="fill w-full h-full bg-amber-300" />
              </div>

              {/* Responsibility List */}
              <ul className="list flex flex-col justify-between gap-4 lg:gap-6 py-2 text-xl md:text-2xl lg:text-3xl font-semibold">
                <li className="text-black">Discover Events</li>
                <li className="text-black">Join Events</li>
                <li className="text-black">Create Events</li>
                <li className="text-black">Start Events</li>
                <li className="text-black">Enjoy Events</li>
                <li className="text-black">See Events</li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-3 w-full">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[min(50vh,520px)]">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`slide absolute inset-0 overflow-hidden rounded-2xl shadow-2xl ${
                      index === 0 ? "visible" : "invisible"
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center px-6">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurResponsibilities;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OurResponsibilities = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Your original GSAP code starts here

      const list = container.current.querySelector(".list");
      const fill = container.current.querySelector(".fill");

      const listItems = gsap.utils.toArray("li", list);
      const slides = gsap.utils.toArray(".slide");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=" + listItems.length * 50 + "%",
          pin: true,
          scrub: true,
          // markers: true
        },
      });

      if (fill && listItems.length > 0) {
        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top left",
        });
      }

      listItems.forEach((item, i) => {
        const previousItem = listItems[i - 1];

        if (previousItem) {
          tl.set(item, { color: "#0ae448" }, 0.5 * i)
            .to(
              slides[i],
              {
                autoAlpha: 1,
                duration: 0.2,
              },
              "<",
            )
            .set(previousItem, { color: "#fffce1" }, "<")
            .to(
              slides[i - 1],
              {
                autoAlpha: 0,
                duration: 0.2,
              },
              "<",
            );
        } else {
          gsap.set(item, { color: "#0ae448" });
          gsap.set(slides[i], { autoAlpha: 1 });
        }
      });

      tl.to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration(),
        },
        0,
      ).to({}, { duration: 0.2 });
    },
    { scope: container },
  );


return (
  <div ref={container}>
    <section className="pin-section min-h-screen bg-[#222c46] text-white flex flex-col justify-center overflow-hidden py-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold">Our Responsibilities</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Bringing people together through meaningful experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left Side - 40% */}
          <div className="lg:col-span-2 flex gap-6 lg:gap-8 items-stretch">
            {/* Progress Bar */}
            <div className="w-1.5 shrink-0 bg-gray-600 rounded-full overflow-hidden">
              <div className="fill w-full h-full bg-amber-300" />
            </div>

            {/* Responsibility List */}
            <ul className="list flex flex-col justify-between gap-6 py-2 text-2xl lg:text-3xl font-semibold">
              <li>Discover Events</li>
              <li>Join Events</li>
              <li>Create Events</li>
              <li>Start Events</li>
              <li>Enjoy Events</li>
              <li>See Events</li>
            </ul>
          </div>

          {/* Right Side - 60% */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[520px]">
              {[
                {
                  image:
                    "https://i.ibb.co/2pWFPyd/Golden-Hour-Mountain-Lake-Ride.png",
                  title: "Places",
                },
                {
                  image:
                    "https://i.ibb.co/VdjbKJK/Golden-Hour-Garden-Friends-Selfie.png",
                  title: "With Friends",
                },
                {
                  image:
                    "https://i.ibb.co/KpFHPjcR/Golden-Horizon-Wanderer.png",
                  title: "Anywhere",
                },
                {
                  image:
                    "https://i.ibb.co/7tcZXRd6/Elegant-Networking-Reception.png",
                  title: "Formal Events",
                },
                {
                  image:
                    "https://i.ibb.co/ZpVTMwq3/Sunlit-Backyard-Taco-Feast-with-Friends.png",
                  title: "With Unlimited Food",
                },
                {
                  image:
                    "https://i.ibb.co/jP3LNWST/Golden-Hour-Confetti-Celebration.png",
                  title: "Celebrate More",
                },
              ].map((slide, index) => (
                <div
                  key={index}
                  className="slide absolute inset-0 invisible overflow-hidden rounded-2xl shadow-2xl"
                >
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-3xl lg:text-5xl font-bold text-white text-center px-6">
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

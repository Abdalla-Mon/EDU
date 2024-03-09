"use client";
import HorizontalCard from "@/app/components/Cards/HorizontalCard";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import jsonData from "@/app/data.json";

gsap.registerPlugin(ScrollTrigger);

export default function PopularCourses() {
  const data = jsonData.courses;
  const ref = useRef(null);
  // useEffect(() => {
  //   gsap.from(".home_card", {
  //     scrollTrigger: {
  //       trigger: ".popular",
  //       start: "top top",
  //       end: "+=50%",
  //       pin: true,
  //       scrub: 1,
  //     },
  //     y: 100,
  //     opacity: 0,
  //     stagger: 0.2,
  //   });
  // }, []);
  return (
    <section className={"px-4 py-10  bg-[--bg_secondary] "}>
      <div className={"container mx-auto "}>
        <SectionHeading
          subTitle="Popular Courses"
          title="Pick A Course To Get Started
"
        />
        <div
          className={
            "grid  md:grid-cols-2 lg:grid-cols-3  gap-5 w-full popular"
          }
        >
          {data.map((course) => (
            <HorizontalCard
              key={course.id}
              item={course}
              className={"home_card"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

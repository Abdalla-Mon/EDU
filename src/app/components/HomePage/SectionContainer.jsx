"use client";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { AboutSectionContext } from "../../page";

export default function SectionContainer({ children }) {
  const wrapper = useRef();
  const { animation } = useContext(AboutSectionContext);

  useEffect(() => {
    if (animation) {
      gsap.to(wrapper.current, {
        height: "100%",
        duration: 0.5,
      });
    } else {
      gsap.to(wrapper.current, {
        height: "100%",
        duration: 0.5,
      });
    }
  }, [animation]);

  return (
    <div className={"second_section"}>
      {children}{" "}
      <div
        ref={wrapper}
        className={
          "wrapper bg-[--bg_secondary] fixed z-[-1] left-0 right-0 bottom-0  w-full  bg-contain bg-bottom "
        }
      ></div>
    </div>
  );
}

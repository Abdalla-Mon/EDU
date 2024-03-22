import { Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import i from "../../../../public/home/course2.jpg";
import n from "../../../../public/home/about2.webp";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function HomeAbout() {
  return (
    <section className={"px-4 py-10  about"}>
      <div className={"container mx-auto grid md:grid-cols-2 "}>
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
}

function RightSection() {
  return (
    <div>
      <div className={"md:p-10 relative"}>
        <Image
          src={i}
          className={
            "md:max-w-[600px] max-h-[600px] object-cover  rounded-lg my-auto"
          }
        />
        <Image src={n} className={" rounded-lg absolute bottom-0 right-0"} />
      </div>
    </div>
  );
}

function LeftSection() {
  return (
    <div className={"flex flex-col justify-center"}>
      <SectionHeading
        subTitle={"About Us"}
        center={false}
        title="Over 10 Years in Distant learning for Skill Development
"
      />
      <Typography variant={"h5"} className={"text-[--body_color]"}>
        {" "}
        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
        tempor incididunt labore dolore magna aliquaenim ad minim.
      </Typography>
      <div className={"flex flex-col gap-2 mt-5 "}>
        <DivWithIcon title={"Expert Trainers"} />
        <DivWithIcon title={" Online Remote Learning"} />
        <DivWithIcon title={"Lifetime Accesss"} />
      </div>
    </div>
  );
}

function DivWithIcon({ title }) {
  return (
    <div className={"flex gap-5 items-center"}>
      <FaCheck className={"text-[#F8941F] text-2xl"} />
      <Typography
        variant={"h6"}
        className={"text-[--heading_color] font-bold text-2xl"}
      >
        {title}
      </Typography>
    </div>
  );
}

"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className={"h-screen w-full bg-no-repeat bg-cover bg-center pt-[80px]"}
      style={{ backgroundImage: "url(/home/hero-background.png)" }}
    >
      <div className={"container mx-auto h-full"}>
        <div
          className={"flex flex-col lg:flex-row items-center gap-5 h-full px-4"}
        >
          <div className="h-3/6 lg:h-full lg:w-3/6 flex">
            <HeroText />
          </div>
          <div className="lg:w-3/6">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <motion.div
      layout
      className={" max-lg:text-center my-auto"}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Typography
        variant={"h2"}
        className={"font-bold  mb-1  max-md:text-5xl "}
      >
        Get <span className={"text-[--color_secondary]"}> 2500+</span>
        Best Online Courses From EduBlink
      </Typography>
      <Typography variant={"h4"}>
        We provide the best education for you
      </Typography>
    </motion.div>
  );
}

function HeroImage() {
  return (
    <motion.div
      layout
      className={"w-full"}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Image
        src="/home/hero_section2.png"
        alt="hero"
        className={"max-w-[600px] mx-auto w-full h-full "}
        width={600}
        height={1000}
        style={{ transform: "rotateY(180deg)" }}
      />
    </motion.div>
  );
}

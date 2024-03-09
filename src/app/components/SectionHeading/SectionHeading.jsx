import { Typography } from "@mui/material";

export default function SectionHeading({ title, subTitle, center = true }) {
  return (
    <div
      className={
        (center ? " items-center " : "") + "  flex flex-col  mb-8 gap-2"
      }
    >
      <Typography
        variant={"h5"}
        className={" font-bole text-[--body_color] mb-[-5px] "}
        sx={{ textTransform: "uppercase" }}
      >
        {subTitle}
      </Typography>
      <Typography
        variant={"h3"}
        className={"max-md:text-3xl font-bold text-[--heading_color]"}
      >
        {title}
      </Typography>
      <div className={"w-20 h-1 bg-[--color_primary]"} />
    </div>
  );
}

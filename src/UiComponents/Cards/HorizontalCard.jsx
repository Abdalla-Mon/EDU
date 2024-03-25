import Image from "next/image";
import { Rating, Typography } from "@mui/material";
import Link from "next/link";

export default function HorizontalCard({ item, className }) {
  return (
    <div
      className={
        "flex flex-col  gap-5 bg-white shadow-xl rounded-md p-5  relative " +
        className
      }
    >
      <div className={""}>
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={600}
          className={"w-full min-h-[400px] object-cover"}
        />
      </div>
      <div>
        <Typography
          variant={"h4"}
          className={
            "absolute bg-[--color_primary] w-[100px] h-[100px]  rounded-[50%] flex items-center justify-center top-10 left-10 text-[white]  font-bold  z-50 pt-1"
          }
        >
          {item.price}
        </Typography>
        <Typography variant={"h5"} className={"text-[--color_secondary]"}>
          {item.category}
        </Typography>
        <Link href={"courses/" + item.id}>
          <Typography
            variant={"h4"}
            className={
              "text-[--heading_color] font-[600]  hover:text-[--color_primary] cursor-pointer transition-all duration-300 ease-in-out"
            }
          >
            {item.title}
          </Typography>
        </Link>
        <Rating name="read-only" value={item.rating} readOnly />
      </div>
    </div>
  );
}

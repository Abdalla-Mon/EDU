import Link from "next/link";
import data from "./db/data.json";
import { List, ListItem, ListItemButton } from "@mui/material";

export default function NavList({ drawer }) {
  const { navList } = data;

  const renderList = (isPc) => (
    <List
      className={
        isPc ? "hidden md:flex gap-3 justify-center pc_list z-50" : "nav_list"
      }
    >
      {navList.map((item) => (
        <Item key={item.name} item={item} pc={isPc} />
      ))}
    </List>
  );

  return drawer ? renderList(false) : renderList(true);
}

export function Item({ item }) {
  return (
    <ListItem
      disablePadding
      className={
        "md:w-fit hover:text-[white]  hover:bg-[--color_primary] text-[--heading_color]  transition-all duration-300 ease-in-out "
      }
      style={{ fontWeight: "600" }}
    >
      <ListItemButton>
        <Link href={item.href} className="w-full capitalize">
          {item.name}
        </Link>
      </ListItemButton>
    </ListItem>
  );
}

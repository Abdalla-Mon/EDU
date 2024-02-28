"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";
import NavList from "@/app/components/Navbar/NavList";
export default function Drawer({ toggleDrawer, state }) {
    const list = () => (
          <Box className=" py-4 px-6 w-[280px] " role="presentation">
              <DrawerTop toggleDrawer={toggleDrawer} />
              <NavList drawer={true}></NavList>
          </Box>
    );

    return (
          <div>
              <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                    className="lap:hidden"
              >
                  {list("left")}
              </SwipeableDrawer>
          </div>
    );
}
function DrawerTop({ toggleDrawer }) {
    return (
          <div className="mb-3 flex justify-between p-2 ">
              <div className="img_container">
                  <Image
                        src="/logo.png"
                        alt="Edu"
                        width={100}
                        height={100}
                  />
              </div>
              <IconButton size="medium" onClick={toggleDrawer("left", false)}>
                  <IoClose />
              </IconButton>
          </div>
    );
}

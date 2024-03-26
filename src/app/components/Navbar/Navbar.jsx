"use client";
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { IoIosMenu } from "react-icons/io";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectAuth } from "@/lib/redux/slices/authSlice";
import Drawer from "@/app/components/Navbar/Drawer";
import NavList from "@/app/components/Navbar/NavList";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { handleRequestSubmit } from "@/helpers/functions/handleSubmit";
import { useToastContext } from "../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useAuth } from "../../../Contexts/Auth/AuthProvider";

export default function Navbar() {
  const { isLoggedIn, role } = useSelector(selectAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = "primary-menu";

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const router = useRouter();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to the login page
    }
  };
  const [navbar, setNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
    setLastScrollY(latest);
  });
  const animation = {
    animate: {
      y: navbar ? 0 : -100,
      backgroundColor: navbar && lastScrollY > 100 ? "#ffffff" : "transparent",
    },
    transition: { duration: 0.3 },
  };
  return (
    <motion.div
      initial={{ y: -100, backgroundColor: "transparent" }}
      {...animation}
      className="fixed navbar z-50 w-full "
    >
      <AppBar
        className="text-[--heading_color]  bg-[inherit] "
        sx={{
          boxShadow:
            navbar && lastScrollY > 100
              ? " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
              : " 0 0 0 transparent",
        }}
      >
        <Drawer toggleDrawer={toggleDrawer} state={state} />
        <Toolbar className={"container mx-auto"}>
          <Link href={"/"}>
            <Image src="/logo.png" alt="Edu " width={160} height={160} />
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <NavList drawer={false} />
          </Box>
          <div className="flex justify-center items-center gap-1">
            <IconButton
              size="medium"
              edge="end"
              aria-label="Search for a course"
              aria-haspopup="true"
              color="inherit"
            >
              <FaSearch />{" "}
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <RxAvatar />
            </IconButton>
            <IconButton
              className="md:hidden"
              size="medium"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
            >
              <IoIosMenu />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isLoggedIn && (
        <AccountMenu
          anchorEl={anchorEl}
          menuId={menuId}
          setAnchorEl={setAnchorEl}
          role={role}
        />
      )}
    </motion.div>
  );
}

function AccountMenu({ anchorEl, menuId, setAnchorEl, role }) {
  const isMenuOpen = Boolean(anchorEl);
  const router = useRouter();
  const handleMenuClose = () => {
    if (role) {
      router.push(`/dashboard/${role.toLowerCase()}`);
    }
    setAnchorEl(null);
  };
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();

  async function handleLogOut() {
    await handleRequestSubmit(
      {},
      setLoading,
      `auth/signout`,
      false,
      "Logging out...",
      setRedirect,
    );
    setAnchorEl(null);
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  );
}

import { useCallback, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function BasicGrid() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleProfileMenu = useCallback(() => {
    setShowProfileMenu((current) => !current);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{  }}>
        <Grid xs={12}>
          <Item className="flex justify-between">
            <div className="flex ">
              <img
                src="image/Netflix_Logo.png"
                alt=""
                className="md:w-[100px] md:h-[60px] w-[100px] h-[60px]"
              />

              <ul className="m:text-white m:flex m:items-center hidden">
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">Home </li>
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">
                  Tv Shows
                </li>
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">
                  Movies
                </li>
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">
                  New & Popular
                </li>
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">
                  My List
                </li>
                <li className="mx-2 cursor-pointer hover:text-[#ccc]">
                  Browse by Languages
                </li>
              </ul>

              <div
                onClick={toggleMobileMenu}
                className="text-white flex md:text-[12px] text-[8px] items-center ml-4 m:hidden cursor-pointer"
              >
                <p className="text-[12px]">Browse</p>
                <ArrowDropDownIcon />
                <MobileMenu visible={showMobileMenu} />
              </div>
            </div>

            <div className="flex items-center">
              <Box>
                <Toolbar>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon className="text-white" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Titles, peoples, genres"
                      //  inputProps={{ 'aria-label': 'search' }}
                      sx={{ color: "white" }}
                    />
                  </Search>
                </Toolbar>
              </Box>

              <NotificationsNoneIcon className="text-white mr-5" />
              
              <div onClick={toggleProfileMenu} className="flex ml-2 cursor-pointer">
                <img src="image/Profile.png" alt="" />
                <ArrowDropDownIcon className="text-white mr-5 mt-1" />
                <ProfileMenu visible={showProfileMenu}/>
              </div>
            </div>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

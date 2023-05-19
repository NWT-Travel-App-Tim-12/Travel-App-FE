import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Logo from "../Logo";
import { Styled } from "./index.styled";
import LogInButton from "../shared/LogInButton";
import SignUpButton from "../shared/SignUpButton";
import { useNavigate } from "react-router";
import CartButton from "../shared/CartButton";
import { SettingsIcon } from "@chakra-ui/icons";
import { BsPerson } from "react-icons/bs";
import TopbarLink from "../shared/TopbarLink";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../redux/interfaces";
import { logOut } from "../../redux/reducers/user/reducer";

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector((state: ReduxStore) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Styled.TopBar>
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Logo />
        <Flex gap={"2rem"} justifyContent={"center"} alignItems={"center"}>
          <TopbarLink to="/booking">Booking</TopbarLink>
          <TopbarLink to="/offers">Offers</TopbarLink>
          <TopbarLink to="/about">About Us</TopbarLink>
          <TopbarLink to="/contact">Contact Us</TopbarLink>
        </Flex>
        {!userStore.isUserLoggedIn ? (
          <Flex flexDirection={"row"} gap={"0.6rem"}>
            <LogInButton onClick={() => navigate("/login")} />
            <SignUpButton onClick={() => navigate("/signup")} />
          </Flex>
        ) : (
          <Flex gap={"0.6rem"} marginLeft={"3rem"}>
            <CartButton onClick={() => navigate("/cart")} />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsPerson />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<BsPerson />}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} icon={<BsPerson />}>
                  Logout
                </MenuItem>
                <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
      {/* <SearchInput /> */}
    </Styled.TopBar>
  );
};

export default TopBar;

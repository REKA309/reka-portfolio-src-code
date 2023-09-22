import React, { useState, useEffect ,useMemo} from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const tabToRouteMapping = useMemo(() => ({
    "/": 0,
    "/about": 1,
    "/skills": 2,
    "/projects": 3,
    "/achievements": 4,
    "/contact": 5,
  }), []); // Empty dependency array to ensure it's only created once

  useEffect(() => {
    // Get the current route's tab value from the mapping
    const route = location.pathname;
    const tabValue = tabToRouteMapping[route];
    if (tabValue !== undefined) {
      setValue(tabValue);
    }
  }, [location.pathname, tabToRouteMapping]);
  

  function handleClick(tab) {
    navigate(`/${tab}`);
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent" }}>
        <Toolbar>
          <img
            src="https://img.freepik.com/premium-vector/portrait-beautiful-young-woman_478440-398.jpg"
            alt="sample"
            className="circular-image"
            width={60}
            height={60}
          />
          <h1>&nbsp;&nbsp;Reka Nagaraj</h1>
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Home" onClick={() => handleClick("")} />
              <Tab label="About" onClick={() => handleClick("about")} />
              <Tab label="Skills" onClick={() => handleClick("skills")} />
              <Tab label="Projects" onClick={() => handleClick("projects")} />
              <Tab
                label="Achievements"
                onClick={() => handleClick("achievements")}
              />
              <Tab label="Contact" onClick={() => handleClick("contact")} />
            </Tabs>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

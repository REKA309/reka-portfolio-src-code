import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {useNavigate} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState(0);
  const navigate=useNavigate()
  const theme = useTheme();
  
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 console.log(isMatch)
function handleClick(tab)
{
    navigate(`/${tab}`)
}
  return (
    <React.Fragment >
      <AppBar sx={{ background: "transparent" }} >
        <Toolbar>
        
          <h1>&nbsp;&nbsp;Reka Nagaraj</h1>
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="About" onClick={()=>handleClick("about")} />
                <Tab label="SKills" onClick={()=>handleClick("skills")} />
                <Tab label="Projects" onClick={()=>handleClick("projects")} />
                <Tab label="Achievements" onClick={()=>handleClick("achievements")} />
                <Tab label="Contact" onClick={()=>handleClick("contact")}/>
              </Tabs>
              
            </>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
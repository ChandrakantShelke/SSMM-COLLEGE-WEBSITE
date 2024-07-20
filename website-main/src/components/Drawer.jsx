import { AdminPanelSettingsRounded, ArrowOutwardOutlined, Article, ArticleRounded, AssessmentRounded, BookOnline, DensityLargeOutlined, DensityMedium, DensityMediumOutlined, EmailRounded, ErrorOutline, ExpandMore, Feedback, GMobiledata, HelpCenterOutlined, HelpCenterRounded, HelpOutlineOutlined, HelpOutlined, Home, InboxOutlined, InfoOutlined, InfoRounded, MailLockOutlined, MailOutline, Person, PersonAdd, StarsOutlined, TimelineOutlined, Work, WorkOffSharp } from "@mui/icons-material";
import { AccordionActions, AccordionDetails, Accordion, AccordionSummary, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, IconButton, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const [width, setWidth] = useState(0);
  // const nav = useNavigate()

  const nav = useNavigate()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Enter' || event.key === 'Backspace')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

  const list = (anchor) => (
    <Box
      sx={{ width: (screen.width>767)?'40vw':'70vw'}}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2 style={{padding:'1rem'}}>Navigation</h2>


                                                    {/* ABOUT US */}
                                                    <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                // aria-controls="panel1-content"
                id="panel1-header"
              >
                About 
              </AccordionSummary>
              <AccordionDetails>
              <List>
              {[
                {'title':'About Us', 'icon':<InfoOutlined/>,'go': '/aboutus'}, 
                {'title':'History', 'icon':<TimelineOutlined/>,'go': '/history'},
                 {'title':'Core Values', 'icon':<StarsOutlined/>, 'go': '/corevalues'}, 
                 {'title':'Principal\'s Message', 'icon':<EmailRounded/>, 'go':'/principal_message'}, 
                 {'title':'Vission / Mission', 'icon':<ArrowOutwardOutlined/>,'go': '/vision_mission'}, 
                ]
                .map((item) => (
                <ListItem key={item['title']} disablePadding color={"black"} onClick={()=>{nav(item['go'])}} aria-expanded={false}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item['icon']}
                    </ListItemIcon>
                    <ListItemText primary={item['title']} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
              </AccordionDetails>
            </Accordion>
















                                                    {/* STUDENT'S SECTION */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                // aria-controls="panel1-content"
                id="panel1-header"
              >
                Students Corner
              </AccordionSummary>
              <AccordionDetails>
              <List>
              {[
                {'title':'Placement Cell', 'icon':<Work/>,'go': '/placement_cell'}, 
                {'title':'Admission', 'icon':<PersonAdd/>,'go': '/admission'},
                //  {'title':'Examination', 'icon':<ArticleRounded/>, 'go': '/examination'}, 
                 {'title':'Results', 'icon':<AssessmentRounded/>, 'go':'/results'}, 
                 {'title':'Students Support', 'icon':<HelpOutlined/>,'go': '/students_support'}, 
                //  {'title':'Activities', 'icon':<BookOnline/>,'go': '/activities'}, 
                //  {'title':'Alumni', 'icon':<BookOnline/>,'go': '/'}
                ]
                .map((item) => (
                <ListItem key={item['title']} disablePadding color={"black"} onClick={()=>{nav(item['go'])}} aria-expanded={false}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item['icon']}
                    </ListItemIcon>
                    <ListItemText primary={item['title']} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
              </AccordionDetails>
            </Accordion>


                                                    {/* ACAEDMICS */}
                                                    <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                // aria-controls="panel1-content"
                id="panel1-header"
              >
                Academics
              </AccordionSummary>
              <AccordionDetails>
              <List>
              {[
                {'title':'Courses', 'icon':<InboxOutlined/>, 'go': '/courses'}, 
                {'title':'Time-Table', 'icon':<MailLockOutlined/>, 'go': '/timetable'},
                 {'title':'Departments', 'icon':<BookOnline/>, 'go': '/departments'},
                 {'title':'Research & Innovations', 'icon':<BookOnline/>, 'go': '/research_and_innovations'}, 
                //  {'title':'Academic Activities', 'icon':<BookOnline/>},
                ]
                .map((item) => (
                <ListItem key={item['title']} disablePadding color={"black"} onClick={()=>{nav(item['go'])}} aria-expanded={false}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item['icon']}
                    </ListItemIcon>
                    <ListItemText primary={item['title']} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
              </AccordionDetails>
            </Accordion>
                  

                                                                {/* IQAC */}
                                                                <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                // aria-controls="panel1-content"
                id="panel1-header"
              >
                IQAC
              </AccordionSummary>
              <AccordionDetails>
              <List>
              {[
                {'title':'Committees', 'icon':<InboxOutlined/>}, 
                {'title':'Meetings', 'icon':<MailLockOutlined/>},
                 {'title':'Action Taken Report', 'icon':<BookOnline/>},
                 {'title':'Policy & Objectives', 'icon':<BookOnline/>}, 
                 {'title':'MoU', 'icon':<BookOnline/>},
                 {'title':'AISHE', 'icon':<BookOnline/>},
                 {'title':'Appraisal System', 'icon':<BookOnline/>},
                 {'title':'Best Practices', 'icon':<BookOnline/>},
                 {'title':'IQAC COntract', 'icon':<BookOnline/>},]
                .map((item) => (
                <ListItem key={item['title']} disablePadding color={"black"} aria-expanded={false}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item['icon']}
                    </ListItemIcon>
                    <ListItemText primary={item['title']} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
              </AccordionDetails>
            </Accordion>
            



                                                                            {/* FACILITIES */}
                                                                            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                // aria-controls="panel1-content"
                id="panel1-header"
              >
                Facilities
              </AccordionSummary>
              <AccordionDetails>
              <List>
              {[
                {'title':'Library', 'icon':<InboxOutlined/>}, 
                {'title':'NSS', 'icon':<MailLockOutlined/>},
                 {'title':'Laboratories', 'icon':<BookOnline/>},
                 {'title':'Spoken English Lab', 'icon':<BookOnline/>}, 
                 {'title':'Botanical Garden', 'icon':<BookOnline/>},
                 {'title':'Sports & Gymkhana', 'icon':<BookOnline/>},
                 {'title':'Resources', 'icon':<BookOnline/>},
                 {'title':'Extra Facilities', 'icon':<BookOnline/>},
                 {'title':'Welfare Scheme', 'icon':<BookOnline/>},
                 {'title':'Teaching & Learning Process', 'icon':<BookOnline/>},]
                .map((item) => (
                <ListItem key={item['title']} disablePadding color={"black"} aria-expanded={false}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item['icon']}
                    </ListItemIcon>
                    <ListItemText primary={item['title']} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
              </AccordionDetails>
            </Accordion>






            




      {/* <List>
        {['Students Corner', 'Mgmt & Admin', 'Faculties', 'Media', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}





      {/* <Divider /> */}
      <List>
        {[{title:'Home', icon:<Home/>, 'link':'/'}, 
        {title:'Faculty', icon:<Person/>, 'link':'/staff'}, 
          {title:'About', icon:<InfoRounded/>, 'link':'/aboutus'}, 
          // {title:'FAQs', icon:<ErrorOutline/>, 'link':''},
          {title:'Admin', icon:<AdminPanelSettingsRounded/>, 'link':'/admin'},
          {title:'Feedbacks', icon:<Feedback/>, 'link':'/feedbacks'}
        ].map((item) => (
          <ListItem key={item['title']} disablePadding onClick={()=>{nav(item['link'])}}>
            <ListItemButton>
              <ListItemIcon>
                {item['icon']}
              </ListItemIcon>
              <ListItemText primary={item['title']} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = 'right';

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} color={'default'}>
            <DensityMedium style={{color: '#800000', padding: '1rem'}} color="white" />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      {/* // ))} */}
    </div>
  );
}


// // import  { useState } from 'react';
// import './Drawer.css';

// const Drawer = () => {
 
 
//   return (
//     // <div>
//       <div className='drawer-menu' id='drw'>

//         AYOOO
//       </div>
//     // </div>
    
//   );
// };

// export default Drawer;

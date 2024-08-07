import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Askquestion = () => {

  const [rotations, setRotations] = useState({
    button1: 0,
    button2: 0,
    button3: 0,
    button4: 0,
    button5: 0,
    button6: 0,
  });

  const handleRotate = (button) => {
    // Update the rotation angle for the specified button by adding 45 degrees
    setRotations((prevRotations) => ({
      ...prevRotations,
      [button]: prevRotations[button] + 45,
    }));
  };


  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline /> */}
      <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[70px] py-[50px] ">
        <div className="max-w-[1170px] mx-auto px-[15px] items-center ">
          <h1 className="sm:text-5xl text-3xl font-bold text-white text-center">
            Frequently Asked Questions
          </h1>

          <Accordion className="py-[10px] mt-20 "  onClick={() => handleRotate('button1')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ transform: `rotate(${rotations.button1}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl"
            >
              What is Netflix
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="py-[10px] bg-black my-3 "  onClick={() => handleRotate('button2')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ transform: `rotate(${rotations.button2}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl "
            >
              How much does Netflix cost?
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more -
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad - all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="py-[10px] bg-black my-3 "  onClick={() => handleRotate('button3')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ transform: `rotate(${rotations.button3}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl"
            >
              Where cam I watch?
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="py-[10px] bg-black my-3 "  onClick={() => handleRotate('button4')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ transform: `rotate(${rotations.button4}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl"
            >
              How do I cancel?
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="py-[10px] bg-black my-3 "  onClick={() => handleRotate('button5')} >
            <AccordionSummary
              expandIcon={<AddIcon  style={{ transform: `rotate(${rotations.button5}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl"
            >
              What can I watch on Netflix?
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="py-[10px] bg-black my-3 " onClick={() => handleRotate('button6')}>
            <AccordionSummary
              expandIcon={<AddIcon  style={{ transform: `rotate(${rotations.button6}deg)` }}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-2xl"
            >
              Is Netflix good for kids?
            </AccordionSummary>
            <AccordionDetails className="text-[18px]">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </AccordionDetails>
          </Accordion>

          <div className="text-center text-white mt-10 text-[20px]">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="max-w-[650px] mx-auto mt-8 sm:px-[10px] px-[40px]">
              <form
                action=""
                className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-3"
              >
                <input
                  type="text"
                  className="rounded border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.5)] h-12 pl-3 py-8"
                  placeholder="Email Address"
                />
                <button className="bg-[red] rounded text-xl font-bold py-[13px] hover:bg-[rgb(193,17,25)] duration-300">
                  Get Started
                  <i className="fa-solid fa-chevron-right pl-3"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Askquestion;

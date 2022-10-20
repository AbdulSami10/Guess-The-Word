import React, { useState } from "react";
import "./MainWork.css";

const MainWork = () => {
  const [sectionOne, setSectionOne] = useState(true);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [sectionFour, setSectionFour] = useState(false);
  const [sectionFive, setSectionFive] = useState(false);
  const [sectionSix, setSectionSix] = useState(false);
  const [sectionSeven, setSectionSeven] = useState(false);

  const CompNum = Math.floor(Math.random() * 20 + 2);
  let updatedCompNum = CompNum / 2;
  console.log(updatedCompNum);
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Magical Game</h1>
        {sectionOne && (
          <section>
            <h2>Are You Ready To Play This Game</h2>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setSectionOne(false);
                setSectionTwo(true);
              }}
            >
              Yes
            </button>
          </section>
        )}
        {sectionTwo && (
          <section>
            <h2>Think Of a Number </h2>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setSectionThree(true);
                setSectionTwo(false);
              }}
            >
              thinked
            </button>
          </section>
        )}
        {sectionThree && (
          <section>
            <h2>Add Same Number Of Your Friend </h2>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setSectionThree(false);
                setSectionFour(true);
              }}
            >
              added
            </button>
          </section>
        )}
        {sectionFour && (
          <section>
            <h2>Add My {CompNum} to your total</h2>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setSectionFour(false);
                setSectionFive(true);
              }}
            >
              ok!
            </button>
          </section>
        )}
        {sectionFive && (
          <section>
            <h2>Give Half Of the Total to Needy One</h2>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setSectionFive(false);
                setSectionSix(true);
              }}
            >
              donate it!!
            </button>
          </section>
        )}
        {sectionSix && (
          <section>
            <h2>Return The amount of your friend which you have borrowed</h2>
            <button
              type="button"
              className="btn "
              onClick={() => {
                setSectionSeven(true);
                setSectionSix(false);
              }}
            >
              ok!
            </button>
          </section>
        )}
        {sectionSeven && (
          <section>
            <h2>the remaining umber is I think {updatedCompNum}</h2>
            <button type="button" className="btn">
              donate it!!
            </button>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};
export default MainWork;

import React from "react";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img
              src="https://www.seoclerk.com/pics/000/856/508/e76eb83d2a7f9cb0c0c548686751af8f.jpg"
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle1}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/072/414/original/fall-horiztonal-sales-banner-vector.jpg"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;

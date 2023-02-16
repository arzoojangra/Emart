import React, { Component } from "react";
import "./Template1.css";

function Template1() {
  return (
    <div>
      <div className="header">Sample Website</div>

      <div className="main">
        <div className="main-left">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
        </div>

        <div className="main-right">
          Heading
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="images-tab">
        <div className="images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU" />
        </div>
        <div className="images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn71LxNoyr3qYXprx6VT-avXod9iPtgYG5Y9FWGIH89t-wwKiEJxZI_sVozV_IbtmpMKo&usqp=CAU" />
        </div>
        <div className="images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbmSfemii3dps00qLZfnVBoxNLD5Q8VRCnK7DYJe8D7iN73s_Gz5KAt4mza-LCemniDs&usqp=CAU" />
        </div>
        <div className="images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_4SCyRFSoJ4UZ32hnFWk6SLFi3e5HsVOmjBxwdo8dm2Bhi4WS3d528iOCyf1gVNvS5Y&usqp=CAU" />
        </div>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
}

export default Template1;

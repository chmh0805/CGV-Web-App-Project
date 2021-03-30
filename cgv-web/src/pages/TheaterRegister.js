import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { isAdmin } from "../utils/AuthUtil";

const TheaterRegister = () => {
  const [theaterReqDto, setTheaterReqDto] = useState({
    name: "",
    location: "",
    phone: "",
    theaterImage: "",
  });

  if (isAdmin() === false) {
    alert("접근 불가");
    return null;
  }

  const handleInput = (e) => {
    setTheaterReqDto({ ...theaterReqDto, [e.target.name]: e.target.value });
  };

  const handleImgInput = (e) => {
    let file = e.target.files[0];
    if (!file.type.match("image.*")) {
      alert("이미지 파일이 아닙니다.");
      return;
    }

    let reader = new FileReader();
    reader.onload = (e) => {
      let imgPrv = document.querySelector("#image_preview");
      imgPrv.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(file);

    setTheaterReqDto({ ...theaterReqDto, theaterImage: file });
  };

  return (
    <>
      <h1>극장등록 페이지</h1>
      <div style={{ width: "1200px", marginLeft: "50px" }}>
        <form
          method="POST"
          action="http://localhost:8080/theater"
          encType="multipart/form-data"
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>극장 이름</th>
                <th>극장 위치</th>
                <th>극장 연락처</th>
                <th>극장 사진</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="theater_tbody">
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={theaterReqDto.name}
                    required={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="location"
                    onChange={handleInput}
                    value={theaterReqDto.location}
                    required={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleInput}
                    value={theaterReqDto.phone}
                    required={true}
                  />
                </td>
                <td>
                  <img
                    alt="이미지"
                    id="image_preview"
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "gray",
                    }}
                  />
                  <input
                    type="file"
                    name="theaterImage"
                    accept="image/*"
                    onChange={handleImgInput}
                    required={true}
                  />
                </td>
                <td>
                  <button>등록하기</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    </>
  );
};

export default TheaterRegister;

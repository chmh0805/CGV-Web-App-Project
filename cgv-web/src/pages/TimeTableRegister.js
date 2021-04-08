import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { isAdmin } from "../utils/AuthUtil";
const TimeTableRegister = () => {
  const [halls, sethalls] = useState({
    hall: [],
  });

  const [movieTimeTableReqDto, setTimeTableReqDto] = useState({
    movieId: "",
    startTime: "",
    date: "",
    theaterId: "",
    hallId: "",
  });
  const [movieTimeTableRespDto, setTimeTableRespDto] = useState({
    movie: [],
    theater: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/timetable", {})
      .then((res) => {
        let statusCode = res.data.statusCode;
        let movies = res.data.data.movie;
        let theaters = res.data.data.theater;

        if (statusCode === 1) {
          setTimeTableRespDto({
            movie: movies,
            theater: theaters,
          });
        }
      })
      .catch((err) => {});
  }, []);

  const handleMovieChange = (e) => {
    setTimeTableReqDto({ ...movieTimeTableReqDto, movieId: e.target.value });
  };

  const handleTheaterChange = (e) => {
    sethalls({ hall: movieTimeTableRespDto.theater[e.target.value - 1].halls });
    setTimeTableReqDto({ ...movieTimeTableReqDto, theaterId: e.target.value });
  };
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (e) => {
    let formattedDate =
      e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
    setTimeTableReqDto({ ...movieTimeTableReqDto, date: formattedDate });
    return setStartDate(e);
  };
  const handleTimeChange = (e) => {
    setTimeTableReqDto({
      ...movieTimeTableReqDto,
      [e.target.name]: e.target.value,
    });
  };
  const handleHallChange = (e) => {
    console.log(e.target.value);
    setTimeTableReqDto({ ...movieTimeTableReqDto, hallId: e.target.value });
  };
  if (isAdmin() === false) {
    alert("접근 불가");
    return null;
  }
  return (
    <>
      <h1>타임테이블 등록 페이지</h1>
      <div style={{ width: "1200px", marginLeft: "50px" }}>
        <form method="POST" action="http://localhost:8080/timetable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>영화 제목</th>
                <th>영화 시작 시간</th>
                <th>영화 상영 날짜</th>
                <th>영화관</th>
                <th>상영관</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="theater_tbody">
              <tr>
                <td>
                  <select onChange={handleMovieChange} name="movieId" required>
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    {movieTimeTableRespDto.movie.map((item) => (
                      <option value={item.docId}>{item.title}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="time"
                    name="startTime"
                    min="09:00"
                    onChange={handleTimeChange}
                    required
                  />
                </td>
                <td>
                  <DatePicker
                    name="date"
                    closeOnScroll={true}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    selected={startDate}
                    onChange={(date) => handleDateChange(date)}
                    required
                    // onChange={date => setStartDate(date)}
                  />
                </td>
                <td>
                  <select
                    onChange={handleTheaterChange}
                    name="theaterId"
                    required
                  >
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    {movieTimeTableRespDto.theater.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select onChange={handleHallChange} name="hallId" required>
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    {halls.hall.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
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

export default TimeTableRegister;

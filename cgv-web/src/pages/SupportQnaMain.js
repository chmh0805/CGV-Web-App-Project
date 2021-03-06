import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import imgMiso from "../images/desc_miso.png";
import SupportAsidesBox from "../components/SupportAsidesBox";
import { deleteCookie, getCookie, isLogined, setCookie } from "../utils/JWT";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setFrequentlyCgvs, setInfo, setQnas, setTicketings } from "../store";
import { useSelector } from "react-redux";

const SupportMainContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
  min-height: 899px;
  padding-bottom: 100px;
`;

const NavSection = styled.div`
  background-color: #f1f0e5;
  width: auto;
  height: 30px;
  border-bottom: 1px solid #cacac0;
`;

const NavSectionItemBox = styled.div`
  width: 980px;
  padding-top: 5px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavSectionHome = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;

const NavSectionArrow = styled.span`
  color: #999999;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 15px;
  margin-right: 15px;
`;

const NavSectionSpan = styled.span`
  font-size: 13px;
`;

const SupportSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const MainCustomerTop = styled.div`
  width: 100%;
  height: auto;
`;

const MainCustomerTopH2 = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  color: #666;
  font-weight: 600;
  margin-bottom: 0px;
`;

const MainCustomerTopP = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
`;

const QnaTableBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 30px;
  line-height: 1.2;
  color: #666;
  border-top: 1px solid #b8b6aa;
`;

const QnaTableTitleBox = styled.div`
  width: 100%;
  padding: 0 10px 0 10px;
  height: 30px;
  background-color: #edebe1;
  color: #666;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RedStarEm = styled.em`
  font-style: normal;
  font-weight: 1000;
  color: red;
  font-size: 16px;
  padding-top: 10px;
`;

const QnaTableRowBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  border-bottom: 1px solid #d6d4ca;
`;

const QnaTableContentTitle = styled.div`
  width: 80px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  padding-left: 10px;
`;

const QnaTableContentLongBody = styled.div`
  width: 720px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  padding-left: 5px;
`;

const QnaTableContentShortBody = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  padding-left: 5px;
`;

const MisoBox = styled.div`
  width: 100%;
  height: 84px;
  background: url(${imgMiso}) no-repeat 0 0 #f6f1dc;
  margin: 24px 0 0 0;
  padding: 0 0 0 118px;
  color: #666;
`;

const MisoBoxText1 = styled.p`
  width: 682px;
  color: #000;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 0 4px 0;
  margin-bottom: 5px;
`;

const MisoBoxEm = styled.em`
  color: #bc3c3c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const MisoBoxText2 = styled.p`
  width: 682px;
  height: 36px;
  font-size: 13px;
  color: #7f7b6b;
  line-height: 1.4;
  font-weight: 400;
`;

const QnaTableContentInput = styled.input`
  width: 672px;
  margin: 0;
  vertical-align: middle;
  height: 25px;
  line-height: 22px;
  padding-left: 10px;
  border: 1px solid #b5b5b5;
  background-color: #fdfcf0;
`;

const QnaTableContentTextarea = styled.textarea`
  height: 198px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 10px;
  width: 672px;
  border: 1px solid #b5b5b5;
  background-color: #fdfcf0;
  resize: vertical;
  line-height: 1.7;
  font-size: 13px;
  color: #666;
  overflow: auto;
  overflow-x: hidden;
  vertical-align: top;
`;

const BottomButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 27px;
  background: #e71a0f;
  border: 2px solid #e71a0f;
  border-radius: 5px;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  position: relative;
`;

const SupportQnaMain = (props) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const { info } = useSelector((store) => store);
  const [qnaSaveReqDto, setQnaSaveReqDto] = useState({
    title: "",
    content: "",
  });
  const dispatcher = useDispatch();

  const goToLogin = () => {
    props.history.push("/login");
  };

  if (!isLogined()) {
    goToLogin();
  }

  setCookie("now-space", "support-qna");

  const handleInput = (e) => {
    setQnaSaveReqDto({ ...qnaSaveReqDto, [e.target.name]: e.target.value });
  };

  const userData = async () => {
    await axios
      .get("http://localhost:8080/user", {
        headers: {
          Authorization: getCookie("cgvJWT"),
        },
      })
      .then((res) => {
        let statusCode = res.data.statusCode;
        let data = res.data.data;
        if (statusCode === 1) {
          const names = {
            name: data.name,
            username: data.username,
            nickname: data.nickname,
            email: "****" + data.email.substring(data.email.indexOf("@")),
            phone: data.phone.slice(0, 9) + "****",
          };
          dispatcher(setInfo(names));
          dispatcher(setFrequentlyCgvs(data.frequentlyCgvs));
          dispatcher(setTicketings(data.ticketings));
          dispatcher(setQnas(data.qnas));
        }
      })
      .catch((err) => {
        console.log(err);
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("???????????? ?????? ??????. ????????????????????????.");
        window.location.replace("/login");
      });
  };

  if (isLoaded) {
    setIsLoaded(false);
    userData();
  }

  const submitSaveDto = () => {
    if (qnaSaveReqDto.title === "") {
      alert("????????? ??????????????????.");
      return;
    }

    if (qnaSaveReqDto.content === "") {
      alert("????????? ??????????????????.");
      return;
    }

    fetch("http://localhost:8080/qna", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: getCookie("cgvJWT"),
      }),
      body: JSON.stringify(qnaSaveReqDto),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.statusCode === 1) {
          alert("?????? ??????");
          window.location.replace("/user/mycgv/myqna");
        }
      })
      .catch((err) => {
        console.log(err);
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("???????????? ?????? ??????. ????????????????????????.");
        window.location.replace("/login");
      });
  };

  return (
    <SupportMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan>????????????</NavSectionSpan>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            ????????? ??????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <SupportAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <MainCustomerTop>
            <MainCustomerTopH2>????????? ??????</MainCustomerTopH2>
            <MainCustomerTopP>
              ???????????? ???????????? ????????? ????????? ?????? ???????????????.
              <br />
              ?????????????????? ??????????????? ??????????????? ????????? ???????????? ??????
              ??????????????????.
            </MainCustomerTopP>
          </MainCustomerTop>
          <QnaTableBox>
            <QnaTableTitleBox>
              ?????????(<RedStarEm>*</RedStarEm>) ????????? ?????? ?????? ???????????????.
            </QnaTableTitleBox>
            <QnaTableRowBox>
              <QnaTableContentTitle>??????</QnaTableContentTitle>
              <QnaTableContentLongBody>{info.username}</QnaTableContentLongBody>
            </QnaTableRowBox>
            <QnaTableRowBox>
              <QnaTableContentTitle>????????????</QnaTableContentTitle>
              <QnaTableContentShortBody>{info.phone}</QnaTableContentShortBody>
              <QnaTableContentTitle>?????????</QnaTableContentTitle>
              <QnaTableContentShortBody>{info.email}</QnaTableContentShortBody>
            </QnaTableRowBox>
            <div style={{ height: "100px" }}>
              <MisoBox>
                <MisoBoxText1>
                  ???????????? ????????? ???????????? ?????????
                  <MisoBoxEm>&nbsp;?????? ???????????? ?????? ??? ??? ??????</MisoBoxEm>???
                  ??? ????????????.
                </MisoBoxText1>
                <MisoBoxText2>
                  CJ??? ????????? ????????????(??????, ??????, ??????, ????????? ???)????????????
                  ????????????????????? ???????????? ??????
                  <br />
                  ?????? ?????? ?????? ??????????????? ????????? ?????????????????? ??? ?????????,
                  ????????? ?????? ?????? ????????? ??? ??? ????????????.
                </MisoBoxText2>
              </MisoBox>
            </div>
            <QnaTableRowBox>
              <QnaTableContentTitle>
                ??????&nbsp;<RedStarEm>*</RedStarEm>
              </QnaTableContentTitle>
              <QnaTableContentLongBody>
                <QnaTableContentInput
                  name="title"
                  value={qnaSaveReqDto.title}
                  onChange={handleInput}
                />
              </QnaTableContentLongBody>
            </QnaTableRowBox>
            <QnaTableRowBox
              style={{
                height: "auto",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <QnaTableContentTitle>
                ??????&nbsp;<RedStarEm>*</RedStarEm>
              </QnaTableContentTitle>
              <QnaTableContentLongBody>
                <QnaTableContentTextarea
                  name="content"
                  value={qnaSaveReqDto.content}
                  onChange={handleInput}
                />
              </QnaTableContentLongBody>
            </QnaTableRowBox>
          </QnaTableBox>
          <BottomButtonBox>
            <SubmitButton
              onClick={() => {
                submitSaveDto();
              }}
            >
              ????????????
            </SubmitButton>
          </BottomButtonBox>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportQnaMain;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconNewWindow from "../images/icon_newwindow.gif";

const MainAsidesBox = styled.div`
  width: 160px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const AsidesBoxLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const AsidesHeadSpecialItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #fdfcf0;
  background-color: #e71a0f;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;

const AsidesHeadItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #222;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  border-top: 1px solid #bbb9b1;

  &:hover {
    color: #fdfcf0;
    background-color: #e71a0f;
  }
`;

const AsidesBodyItem = styled.div`
  width: auto;
  padding: 15px 0px 15px 30px;
  font-size: 100%;
  vertical-align: baseline;
  word-break: break-all;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  font-size: 12px;

  &:hover {
    color: #e71a0f;
  }
`;

const AsidesWatchedMovieBox = styled.div`
  width: auto;
  padding-left: 14px;
  color: #fff;
  background: black url(${iconNewWindow}) no-repeat 145px 6px;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const MyCgvAsidesBox = ({ nowSpace }) => {
  if (nowSpace === "mycgv-home") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadSpecialItem>MY CGV HOME</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadItem>기프트샵</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadItem>회원정보</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem>1:1 문의</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  } else if (nowSpace === "mycgv-reserve") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadSpecialItem>나의 예매내역</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadItem>기프트샵</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadItem>회원정보</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem>1:1 문의</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  } else if (nowSpace === "mycgv-movieticket-register") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadSpecialItem style={{ fontSize: "15px" }}>
            관람권/할인쿠폰 관리
          </AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem style={{ color: "#e71a0f", fontWeight: "1000" }}>
            CGV 영화관람권
          </AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadItem>기프트샵</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadItem>회원정보</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem>1:1 문의</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  } else if (nowSpace === "mycgv-giftcon") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadSpecialItem>기프트샵</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem style={{ color: "#e71a0f", fontWeight: "1000" }}>
            내 기프트콘
          </AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadItem>회원정보</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem>1:1 문의</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  } else if (nowSpace === "mycgv-myqna") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadItem>기프트샵</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadItem>회원정보</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadSpecialItem>나의 문의내역</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem style={{ color: "#e71a0f", fontWeight: "1000" }}>
            1:1 문의
          </AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  } else if (nowSpace === "signout") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/user/mycgv">
          <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/reserve">
          <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
          <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesHeadItem>기프트샵</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/giftcon">
          <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink>
          <AsidesBodyItem>결제내역</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesHeadSpecialItem>회원정보</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/info">
          <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/signout">
          <AsidesBodyItem style={{ color: "#e71a0f", fontWeight: "1000" }}>
            회원탈퇴
          </AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/mycgv/myqna">
          <AsidesBodyItem>1:1 문의</AsidesBodyItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/user/movielog/watched">
          <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
        </AsidesBoxLink>
        <Link>
          <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
        </Link>
      </MainAsidesBox>
    );
  }
};

export default MyCgvAsidesBox;

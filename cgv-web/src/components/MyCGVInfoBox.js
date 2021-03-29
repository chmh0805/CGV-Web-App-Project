import React from "react";
import styled from "styled-components";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import { useSelector } from "react-redux";

const InfoSection = styled.section`
  width: auto;
  height: 450px;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const InfoSectionContainer = styled.div`
  width: 980px;
  height: auto;
  background-image: url("${bgMyCGVInfo}");
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 30px 40px 30px 58px;
`;

const InfoSectionTopItemBox = styled.div`
  display: flex;
  align-items: center;
`;

const InfoTopImg = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  border: 4px solid #7b6746;
`;

const InfoTopItemBox = styled.div`
  width: 400px;
  height: auto;
  margin-left: 30px;
`;

const InfoTopItem1 = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #8c7651;
  margin-bottom: 15px;
`;

const InfoTopStrong = styled.strong`
  font-size: 29px;
  line-height: 32px;
  margin-right: 8px;
  color: #342929;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 600;
`;

const InfoTopItemEm = styled.em`
  font-size: 14px;
  line-height: 14px;
  display: inline-block;
  margin-right: 8px;
  color: #342929;
  font-family: verdana, sans-serif;
  font-style: normal;
  font-weight: 500;
`;

const InfoTopItem2 = styled.div`
  width: auto;
  height: 53px;
`;

const InfoSectionBottomItemBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;

const InfoBottomItem1 = styled.div`
  width: 250px;
  height: 155px;
  padding-right: 30px;
  border-right: 1px solid #8c7651;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 2px;
  column-gap: 2px;
`;

const InfoBottomItem1ItemBox = styled.div`
  border: 2px solid #7b6746;
  padding: 2px;
`;

const InfoBottomItem1Item = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #7b6746;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  cursor: pointer;
  word-break: break-all;
  color: #342929;
  font-weight: 600;
  font-size: 11px;
  line-height: 39px;
`;

const InfoBottomItemButton = styled.button`
  width: 100%;
  height: 100%;
  background: #3b3425 url(${iconSetting}) no-repeat 86px 14px;
  padding-left: 9px;
  border: 2px solid #7b6746;
  outline: 0px;
  line-height: 1.2;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  color: #dac190;
  font-size: 11px;
  text-align: left;
`;

const MyCGVInfoBox = () => {
  const { info, frequentlyCgvs } = useSelector((store) => store);
  const frequentlyCgvsArray = [
    {
      id: 0,
      theater: {},
    },
    {
      id: 0,
      theater: {},
    },
    {
      id: 0,
      theater: {},
    },
    {
      id: 0,
      theater: {},
    },
    {
      id: 0,
      theater: {},
    },
  ];
  for (var i = 0; i < frequentlyCgvs.length; i++) {
    frequentlyCgvsArray[i] = frequentlyCgvs[i];
  }
  return (
    <InfoSection>
      <InfoSectionContainer>
        <InfoSectionTopItemBox>
          <InfoTopImg src={defaultProfileImg} />
          <InfoTopItemBox>
            <InfoTopItem1>
              <InfoTopStrong>{info.name}님</InfoTopStrong>
              <InfoTopItemEm>{info.username}</InfoTopItemEm>
              <InfoTopItemEm style={{ marginRight: "0px" }}>
                닉네임 :&nbsp;
              </InfoTopItemEm>
              <InfoTopItemEm>{info.nickname}</InfoTopItemEm>
            </InfoTopItem1>
            <InfoTopItem2></InfoTopItem2>
          </InfoTopItemBox>
        </InfoSectionTopItemBox>
        <InfoSectionBottomItemBox>
          <InfoBottomItem1>
            <InfoBottomItem1ItemBox>
              <InfoBottomItem1Item>
                {frequentlyCgvsArray[0].theater.name}
              </InfoBottomItem1Item>
            </InfoBottomItem1ItemBox>
            <InfoBottomItem1ItemBox>
              <InfoBottomItem1Item>
                {frequentlyCgvsArray[1].theater.name}
              </InfoBottomItem1Item>
            </InfoBottomItem1ItemBox>
            <InfoBottomItem1ItemBox>
              <InfoBottomItem1Item>
                {frequentlyCgvsArray[2].theater.name}
              </InfoBottomItem1Item>
            </InfoBottomItem1ItemBox>
            <InfoBottomItem1ItemBox>
              <InfoBottomItem1Item>
                {frequentlyCgvsArray[3].theater.name}
              </InfoBottomItem1Item>
            </InfoBottomItem1ItemBox>
            <InfoBottomItem1ItemBox>
              <InfoBottomItem1Item>
                {frequentlyCgvsArray[4].theater.name}
              </InfoBottomItem1Item>
            </InfoBottomItem1ItemBox>
            <InfoBottomItem1ItemBox style={{ border: "0px", padding: "0px" }}>
              <InfoBottomItemButton>
                자주가는 CGV
                <br />
                설정하기
              </InfoBottomItemButton>
            </InfoBottomItem1ItemBox>
          </InfoBottomItem1>
        </InfoSectionBottomItemBox>
      </InfoSectionContainer>
    </InfoSection>
  );
};

export default MyCGVInfoBox;

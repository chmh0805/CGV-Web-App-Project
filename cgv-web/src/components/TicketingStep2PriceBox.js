import React from "react";
import styled from "styled-components";

const TheaterInfoRow = styled.div`
  height: 20px;
  color: #cccccc;
  font-size: 12px;
  margin-top: 3px;
`;

const TheaterInfoHead = styled.span`
  width: 40px;
  padding-left: 10px;
`;

const TheaterInfoContent = styled.span`
  width: 135px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
  font-weight: bolder;
`;

const TicketingStep2PriceBox = ({
  normalPeopleCount,
  youngPeopleCount,
  oldPeopleCount,
  setTotalPrice,
}) => {
  let totalPrice = 0;
  if (normalPeopleCount !== 0) {
    totalPrice += 13000 * normalPeopleCount;
  }
  if (youngPeopleCount !== 0) {
    totalPrice += 10000 * youngPeopleCount;
  }
  if (oldPeopleCount !== 0) {
    totalPrice += 5000 * oldPeopleCount;
  }
  setTotalPrice(totalPrice);

  if (
    youngPeopleCount !== 0 &&
    normalPeopleCount === 0 &&
    oldPeopleCount === 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>청소년</TheaterInfoHead>
          <TheaterInfoContent>10,000원 x{youngPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount !== 0 &&
    normalPeopleCount !== 0 &&
    oldPeopleCount === 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>일반</TheaterInfoHead>
          <TheaterInfoContent>13,000원 x{normalPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow>
          <TheaterInfoHead>청소년</TheaterInfoHead>
          <TheaterInfoContent>10,000원 x{youngPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount !== 0 &&
    normalPeopleCount !== 0 &&
    oldPeopleCount !== 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>일반</TheaterInfoHead>
          <TheaterInfoContent>13,000원 x{normalPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow>
          <TheaterInfoHead>청소년</TheaterInfoHead>
          <TheaterInfoContent>10,000원 x{youngPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow>
          <TheaterInfoHead>우대</TheaterInfoHead>
          <TheaterInfoContent>5,000원 x{oldPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount === 0 &&
    normalPeopleCount !== 0 &&
    oldPeopleCount === 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>일반</TheaterInfoHead>
          <TheaterInfoContent>13,000원 x{normalPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount === 0 &&
    normalPeopleCount !== 0 &&
    oldPeopleCount !== 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>일반</TheaterInfoHead>
          <TheaterInfoContent>13,000원 x{normalPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow>
          <TheaterInfoHead>우대</TheaterInfoHead>
          <TheaterInfoContent>5,000원 x{oldPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount === 0 &&
    normalPeopleCount === 0 &&
    oldPeopleCount !== 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>우대</TheaterInfoHead>
          <TheaterInfoContent>5,000원 x{oldPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "5px" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else if (
    youngPeopleCount !== 0 &&
    normalPeopleCount === 0 &&
    oldPeopleCount !== 0
  ) {
    return (
      <>
        <TheaterInfoRow>
          <TheaterInfoHead>청소년</TheaterInfoHead>
          <TheaterInfoContent>10,000원 x{normalPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow>
          <TheaterInfoHead>우대</TheaterInfoHead>
          <TheaterInfoContent>5,000원 x{oldPeopleCount}</TheaterInfoContent>
        </TheaterInfoRow>
        <TheaterInfoRow style={{ marginTop: "0" }}>
          <TheaterInfoHead>총금액</TheaterInfoHead>
          <TheaterInfoContent style={{ color: "red" }}>
            {totalPrice}원
          </TheaterInfoContent>
        </TheaterInfoRow>
      </>
    );
  } else {
    return (
      <>
        <TheaterInfoRow></TheaterInfoRow>
      </>
    );
  }
};

export default TicketingStep2PriceBox;

export function ticketNormal(seatId, timeTableId, userId) {
  let data = {
    personType: 1,
    seatId: seatId,
    timeTableId: timeTableId,
    userId: userId,
  };

  fetch("http://localhost:8080/ticketing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode !== 1) {
        console.log(res);
      }
    });
}

export function ticketYoung(seatId, timeTableId, userId) {
  let data = {
    personType: 0,
    seatId: seatId,
    timeTableId: timeTableId,
    userId: userId,
  };

  fetch("http://localhost:8080/ticketing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode !== 1) {
        console.log(res);
      }
    });
}

export function ticketOld(seatId, timeTableId, userId) {
  let data = {
    personType: 2,
    seatId: seatId,
    timeTableId: timeTableId,
    userId: userId,
  };

  fetch("http://localhost:8080/ticketing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode !== 1) {
        console.log(res);
      }
    });
}

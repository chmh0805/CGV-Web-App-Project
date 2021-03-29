export const setInfo = (userInfo) => ({
  type: "CHANGE",
  payload: userInfo,
});

export const setFrequentlyCgvs = (frequentlyCgvs) => ({
  type: "FREQUENT",
  payload: frequentlyCgvs,
});

export const setTicketings = (ticketings) => ({
  type: "TICKETING",
  payload: ticketings,
});

export const setQnas = (qnas) => ({
  type: "QNA",
  payload: qnas,
});

const initstate = {
  info: {
    username: "아이디",
    name: "이름",
    nickname: "닉네임",
  },
  frequentlyCgvs: [
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
  ],
  ticketings: [],
  qnas: [],
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, info: action.payload };
    case "FREQUENT":
      return { ...state, frequentlyCgvs: action.payload };
    case "TICKETING":
      return { ...state, ticketings: action.payload };
    case "QNA":
      return { ...state, qnas: action.payload };
    default:
      return state;
  }
};

export default reducer;

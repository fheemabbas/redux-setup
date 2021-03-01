const initialState = {
  data: [],
  error: null,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LIST_ERROR":
      return {
        ...state,
        error: {
          data: action.payload && action.payload.data,
        },
      };
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

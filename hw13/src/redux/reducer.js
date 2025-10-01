const initialState = {
  users: [
    { id: 1, name: "Kate Lee"},
    { id: 2, name: "John Miller"},
    { id: 3, name: "Micheal Jenner"},
    { id: 4, name: "Luisa Hoch"}
  ],
  filter: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER' :
      return {
        ...state,
        filter: action.payload
      }
      default:
        return state
  }
}

export default reducer
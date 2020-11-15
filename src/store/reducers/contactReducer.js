const initialState = {
  contacts: [],
  contact: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return {
        ...state,
        contacts: action.payload.contacts.data,
      };
    case "GET_CONTACT":
      return {
        ...state,
        contact: action.payload.contact.data,
      };
    
    default:
      return state;
  }
};

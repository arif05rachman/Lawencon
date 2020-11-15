const URL = "https://simple-contact-crud.herokuapp.com/contact"
export const getContacts = () => {
  return async (dispatch) => {
    const res = await fetch(
      URL
    );
    const data = await res.json();
    dispatch({
      type: "GET_CONTACTS",
      payload: {
        contacts: data,
      },
    });
  };
};

export const getContact = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `${URL}/${id}`
    );
    const data = await res.json();
    dispatch({
      type: "GET_CONTACT",
      payload: {
        contact: data,
      },
    });
  };
};

export const addContact = (addData) => {
  return async (dispatch) => {
    const res = await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(addData)
    });
    const data = await res.json();
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        contact: data,
      },
    });
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    const res = await fetch(`${URL}/`+id, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch({
      type: "DELETE_CONTACT",
      payload: {
        contact: data,
      },
    });
  };
};

export const editContact = (id, editData) => {
  const dataEdit = JSON.stringify(editData)
  return async (dispatch) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: dataEdit,
    });
    const data = await res.json();
    dispatch({
      type: "EDIT_CONTACT",
      payload: {
        contact: data,
      },
    });
  };
};
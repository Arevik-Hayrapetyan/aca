import { API_URL } from "./constants.js";
export async function getData() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      mode: "cors",
      headers: {},
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e.message);
  }
}

export async function createEvent(title, date, completed = false, notified = false) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        title,
        date,
        completed,
        notified
      }),
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e.message);
  }
}
export async function editEvent(title, date,  id,completed) {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ title, date, completed }),
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

export async function deleteEvent(id) {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

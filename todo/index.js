import { API_URL } from "./constants.js";
import { getData, createEvent, editEvent, deleteEvent } from "./helpers.js";

const dataSection = document.querySelector(".section-data");
const submitBtn = document.querySelector(".button");
const meetingTitle = document.querySelector("#meeting-title");
const meetingTime = document.querySelector("#meeting-time");
const renderData = async () => {
  const data = await getData();
  console.log(data);
  dataSection.innerHTML = data
    ?.map((event) => {
      return `  <div id=${event.id}>
      <input class="title" value=${event.title} />
      <input
      class="time"
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value=${event.date}
      min="2022-27-05T00:00"
    />
      <button id=${event.id} class="editBtn">Edit</button>
      <button id=${event.id} class="deleteBtn">Delete</button>
    </div>`;
    })
    .join("");
  document.querySelectorAll(".editBtn").forEach((item) => {
    item.addEventListener("click", () => {
      const foundDateTime = document.getElementById(item.id);
      const meetingTime = foundDateTime.querySelector(".time").value;
      const meetingTitle = foundDateTime.querySelector(".title").value;
      console.log(meetingTime, meetingTitle);
      editEvent(meetingTitle, meetingTime, item.id);
      alert("Successfully updated ");
    });
  });
  document.querySelectorAll(".deleteBtn").forEach((item) => {
    item.addEventListener("click", () => {
      deleteEvent(item.id);
    });
  });
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createEvent(meetingTitle.value, meetingTime.value);
});

renderData();

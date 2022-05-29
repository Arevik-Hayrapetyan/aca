import { API_URL } from "./constants.js";
import { getData, createEvent, editEvent, deleteEvent } from "./helpers.js";

const dataSection = document.querySelector(".section-data");
const submitBtn = document.querySelector(".button");
const meetingTitle = document.querySelector("#meeting-title");
const meetingTime = document.querySelector("#meeting-time");
const done = document.querySelector(".done")

const renderData = async () => {
  const data = await getData();
  console.log(data);
  dataSection.innerHTML = data
    ?.map((event) => {
      console.log("event.completed", event.completed, )
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
    <div class="notified-container">
    <label for="completed">Complited</label>
    <input  type="checkbox" id="completed"/>
    </div>
    <div>
       <button id=${event.id} class="editBtn">Submit Changes</button>
       <button id=${event.id} class="deleteBtn">Delete</button>
    </div>
    </div>`;
    })
    .join("");
  document.querySelectorAll(".editBtn").forEach((item) => {
    item.addEventListener("click", () => {
      const foundDateTime = document.getElementById(item.id);
      const meetingTime = foundDateTime.querySelector(".time").value;
      const meetingTitle = foundDateTime.querySelector(".title").value;
      console.dir(document.querySelector("#completed"))
      const completed = foundDateTime.querySelector("#completed").checked;

      console.log(
        meetingTitle,
        meetingTime,
        item.id,
        completed,
        "aaaaaaaaaaaaaaaaaaaaaa"
      );
      editEvent(meetingTitle, meetingTime, item.id, completed);
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


  // const dateObj = new Date();
  // const month = dateObj.getUTCMonth() + 1; //months from 1-12
  // const day = dateObj.getUTCDate();
  // const year = dateObj.getUTCFullYear();
  // console.log(month, day, year);
  const allDate = [];
  const data = await getData();
 data.forEach(item => {
   console.log(item.date.split('T')[0], new Date().toISOString().split('T')[0])
  if(!item.notified && item.date.split('T')[0] === new Date().toISOString().split('T')[0]){
    allDate.push(item)
  }
 })
 console.log("allDate", allDate)
 function notifyForThisMinute() {

  setTimeout(notifyForThisMinute, (61 - new Date().getSeconds()) * 1000);
}
notifyForThisMinute();



const getData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  document.querySelector(".header_licenses").innerText = data.page_title;
  renderHeaderLeft(data.plans);
  renderNavbar(data.tabs);
};

function renderHeaderLeft(data) {
  const licenses = document.querySelectorAll(".box");
  data.forEach((item, index) => {
    licenses[index].querySelector("p").innerText = item.name;
    if (!item.active) licenses[index].classList.add("opacity");
  });
}
function renderNavbar(data) {
  const navLists = document.querySelectorAll(".list-item");
  console.log(navLists);
  data.forEach((item, index) => {
    navLists[index].innerText = item.title;
    if (Object.entries(item.data).length) {
    }
  });
}
// {
//   "systems": [
//     {
//       "system_name": "James-Main-Mackbook",
//       "id": 91520,
//       "created_date": "01 Jan 2019",
//       "active_licenses": 2
//     },
//     {
//       "system_name": "James-Laptop",
//       "id": 91518,
//       "created_date": "15 Jan 2020",
//       "active_licenses": 1
//     }
//   ],
//   "subsystems": [
//     {
//       "system_id": 91520,
//       "licenses": "Lightworks Pro",
//       "expires": "Never",
//       "cost": "30.00"
//     },
//     {
//       "system_id": 91520,
//       "licenses": "QScan Max",
//       "expires": "29 Aug 2021",
//       "cost": "26.00"
//     },
//     {
//       "system_id": 91518,
//       "licenses": "Lightworks Pro",
//       "expires": "Never",
//       "cost": "30.00"
//     },
//     {
//       "system_id": 91518,
//       "licenses": "QScan Max",
//       "expires": "29 Jul 2021",
//       "cost": "78.00"
//     }
//   ]
// }
window.addEventListener("load", getData());

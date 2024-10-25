/*vazifa*/

////vazifa musiqani soatlarini togirlash
const input = document.querySelector("#input");
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const audioEl = document.querySelector(".audio");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");

play.addEventListener("click", () => {
  audioEl.play();
});
pause.addEventListener("click", () => {
  audioEl.pause();
});

input.addEventListener("input", () => {
  audioEl.volume = input.value / 100;
});
// audioEl.currentTime = "0";
audioEl.addEventListener("timeupdate", () => {
  currentTime.textContent = audioEl.currentTime.toFixed(0);
  duration.textContent = `
  ${
    (audioEl.duration / 60).toFixed(0) > 0
      ? "0" + (audioEl.duration / 60).toFixed(0)
      : "00"
  }
:
${(audioEl.duration % 60).toFixed(0)}
  `;
  currentTime.currentTime = `
  ${
    currentTime.currentTime < 60
      ? "1" + audioEl.currentTime
      : "0" + audioEl.currentTime
  }`;
});

/* UY ISHI  */

//// 1- MASALA
////Biror sahifada bo'sh <div> elementi mavjud bo'lsin. JavaScript orqali yangi birparagraf (<p> ) yarating va uni sahifadagi bo'sh div ichiga joylashtiring. Paragraf matni o'zingiz xohlagan biror narsani o'z ichiga olishi mumkin.

// const content = document.querySelector("#content");

// const paragraf = document.createElement("p");
// paragraf.textContent = "Mening ismim Muhammadqodir";
// content.appendChild(paragraf);

//// 2- MASALA
////Sahifada biror tugma (<button> ) va paragraf bo'lsin. Tugma bosilganda, paragrafning matni o'zgartirilishi kerak.

// const button = document.querySelector("#changeText");
// const text = document.querySelector("#text");

// button.addEventListener("click", () => {
//   text.textContent = "Bu matnni o'zgartirdim !!!!!!!";
// });

//// 3- MASALA
/////Bir nechta tugmalar yarating, har bir tugma bosilganda sahifadagi rasm (<img> ) boshqa rasmga almashtiriladi.

// const image = document.querySelector("#image");
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");

// button1.addEventListener("click", () => {
//   image.src = `https://picsum.photos/id/2/1200`;
// });
// button2.addEventListener("click", () => {
//   image.src = `https://picsum.photos/id/3/1200`;
// });

//// 4- MASALA
/////JavaScript orqali sahifadagi elementning stilini o'zgartirish uchun amaliyot. Tugmani bosganda, matn rangi va shrift hajmi o'zgarishi kerak.

// const button = document.querySelector("#styleButton");
// const styledText = document.querySelector("#styledText");

// button.addEventListener("click", () => {
//   styledText.style.color = "blue";
//   styledText.style.fontSize = "28px";
// });

//// 5- MASALA
////Sahifada bo'sh <ul> elementi bo'lsin. JavaScript orqali foydalanuvchi tomonidan kiritilgan ma'lumotni yangi <li> element sifatida qo'shish.

// const addItemButton = document.querySelector("#addItem");
// const itemInput = document.querySelector("#item");
// const list = document.querySelector("#list");

// addItemButton.addEventListener("click", () => {
//   const itemText = itemInput.value.trim();
//   if (itemText !== "") {
//     const li = document.createElement("li");
//     li.textContent = itemText;
//     list.appendChild(li);
//     itemInput.value = "";
//   }
// });

//// 6-  MASALA
/////Sahifadagi biror paragrafni yashirish va ko'rsatish uchun tugma qo'shing. Tugma bosilganda paragrafni yashiradi yoki ko'rsatadi.

// const showButton = document.getElementById("showButton");
// const hideButton = document.getElementById("hideButton");
// const toggleText = document.getElementById("toggleText");

// showButton.addEventListener("click", () => {
//   toggleText.style.display = "block";
// });

// hideButton.addEventListener("click", () => {
//   toggleText.style.display = "none";
// });

//// 8  MASALA
////Sahifada real vaqtni (soat, daqiqa, soniya) ko'rsatib turadigan element yarating va har bir soniya yangilanib tursin.

// const now = new Date();
// const hours = String(now.getHours()).padStart(2, "0");
// const minutes = String(now.getMinutes()).padStart(2, "0");
// const seconds = String(now.getSeconds()).padStart(2, "0");

// const timeString = `${hours}:${minutes}:${seconds}`;

// const clockElement = document.getElementById("clock");
// clockElement.textContent = timeString;

//// 9  MASALA
////Tugmani bosganda sahifa fon rangi tasodifiy ravishda o'zgarib turadi.

// const colorButton = document.querySelector("#colorButton");

// colorButton.addEventListener("click", () => {
//   let randomColor = "#";
//   for (let i = 0; i < 6; i++) {
//     const randomX = Math.floor(Math.random() * 16).toString(16);
//     randomColor += randomX;
//   }
//   document.body.style.backgroundColor = randomColor;
// });

//// 10 MASALA
////To-do ro'yxatiga yangi element qo'shish, qilingan ishlarni belgilash va ularustiga chiziq tortish funksiyalarini qo'shing

// const taskInput = document.querySelector("#taskInput");
// const addTaskButton = document.querySelector("#addTask");
// const taskList = document.querySelector("#taskList");

// addTaskButton.addEventListener("click", () => {
//   const itemText = taskInput.value.trim();
//   if (itemText !== "") {
//     const li = document.createElement("li");
//     li.textContent = itemText;

//     li.addEventListener("click", () => {
//       li.classList.toggle("completed");
//     });

//     taskList.appendChild(li);
//     taskInput.value = "";
//   }
// });

// addItemButton.addEventListener("click", () => {
//   const itemText = itemInput.value.trim();
//   if (itemText !== "") {
//     const li = document.createElement("li");
//     li.textContent = itemText;
//     list.appendChild(li);
//     itemInput.value = "";
//   }
// });

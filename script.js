// Menampilkan tanggal saat ini
window.onload = () => {
  const currentDate = document.getElementById("currentDate");
  currentDate.innerText = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Variabel untuk elemen DOM
const toDoInput = document.getElementById("toDoInput");
const priorityLevel = document.getElementById("priorityLevel");
const submitButton = document.getElementById("submitButton");
const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");
const deleteButton = document.getElementById("deleteButton");

// Fungsi untuk mendapatkan waktu saat ini
function getCurrentDate() {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

// Fungsi untuk memberikan warna ketika memilih level priority
// function getPriorityStars(priority) {
//   switch (priority) {
//     case "low":
//       return "⭐";
//     case "medium":
//       return "⭐⭐";
//     case "high":
//       return "⭐⭐⭐";
//   }
// }
function getPriorityStars(priority) {
  if (priority === "low") {
    return "⭐";
  } else if (priority === "medium") {
    return "⭐⭐";
  } else if (priority === "high") {
    return "⭐⭐⭐";
  }
}

// Fungsi untuk menambahkan to-do
submitButton.addEventListener("click", () => {
  const taskText = toDoInput.value;
  const priority = priorityLevel.value.trim();
  const dateWrite = getCurrentDate();

  //validasi level priority
  if (priority === "") {
    alert("Silakan pilih level prioritas sebelum menambahkan tugas!");
    return;
  }

  // input to-do
  if (taskText.trim()) {
    const li = document.createElement("li");
    li.innerHTML = `<div class="kanan">
    <input type="checkbox" class="checkbox"><div class="isi-list">
    <div class="taskText">${taskText}</div>
    <div class="date">${dateWrite}</div>
    </div>
    </div>
    <button class="delete-item">&times;</button>
    `;
    // memberikan nilai priority
    const starsSpan = document.createElement("span");
    starsSpan.textContent = getPriorityStars(priority);
    starsSpan.style.marginLeft = "5px";

    li.querySelector(".date").appendChild(starsSpan);

    li.querySelector(".checkbox").addEventListener("change", (e) => {
      if (e.target.checked) {
        li.classList.add("completed");
        doneList.appendChild(li);
      } else {
        li.classList.remove("completed");
        toDoList.appendChild(li);
      }
    });
    li.querySelector(".delete-item").addEventListener("click", () => {
      li.remove();
    });
    toDoList.appendChild(li);
    toDoInput.value = "";
    priorityLevel.value = "";
  }
});

// Fungsi untuk menghapus semua to-do
deleteButton.addEventListener("click", () => {
  toDoList.innerHTML = "";
  doneList.innerHTML = "";
});

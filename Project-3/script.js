const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector("form");
const taskTitle = document.querySelector("#task-title");
const taskDesc = document.querySelector("#task-description");
const taskDueDate = document.querySelector("#task-due-date");
const formTaskAddBtn = document.querySelector("#task-addBtn");
const alltasks = document.querySelector("#all-tasks");
const today = document.querySelector("#today");
const upcoming = document.querySelector("#upcoming");
const mainSec = document.querySelector("main");
const modalDelete = document.querySelector("#modal-delete");
const modalCancel = document.querySelector("#modal-cancel");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("#modalTitle");
const formTitle = document.querySelector("#formTitle");
const error = document.querySelector("#error");

// Array to store task objects
let tasks = [];
let editMode = false;
let taskToEdit = null;

// Retrieve tasks from localStorage
function getDataFromStorage() {
  const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasksFromStorage;

  if (tasks.length > 0) {
    tasks.forEach((task) => addTaskToDOM(task));
  } else {
    displayNoTaskMessage();
  }
}

document.addEventListener("DOMContentLoaded", getDataFromStorage);

// Open add task form
addTaskBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  addTaskForm.style.display = "flex";
  formTaskAddBtn.textContent = "Add Task";
  document.querySelector(".content").classList.add("low-opacity-background");
  taskTitle.focus();
  editMode = false;
});

// Close add task form when clicking outside the form
window.onclick = function (event) {
  if (event.target != addTaskForm && !addTaskForm.contains(event.target)) {
    if (formTaskAddBtn.textContent === "Update Task") {
      taskTitle.value = "";
      taskDesc.value = "";
      taskDueDate.value = "";
    }
    addTaskForm.style.display = "none";
    document
      .querySelector(".content")
      .classList.remove("low-opacity-background");
  }
};

// Add task to DOM and to localStorage
function addTaskToDOM(task) {
  // Get the current date in 'yyyy-mm-dd' format
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const noTaskMsg = document.querySelector(".noTaskMsg");
  if (noTaskMsg) {
    noTaskMsg.remove();
  }

  const taskItem = document.createElement("div");
  taskItem.className = "task";

  const taskItemTitle = document.createElement("p");
  taskItemTitle.className = "taskItem-title";
  taskItemTitle.textContent = task.title;

  const taskItemDesc = document.createElement("p");
  taskItemDesc.className = "taskItem-desc";
  taskItemDesc.textContent = task.desc;

  const taskItemDueDate = document.createElement("p");
  taskItemDueDate.className = "taskItem-dueDate";
  taskItemDueDate.innerHTML = `${
    task.dueDate > formattedDate
      ? `<i class="fa-regular fa-clock" title="Upcoming" style="color: #f5c000;"></i>&nbsp; ${task.dueDate}`
      : `<i class="fa-regular fa-calendar" title="Today" style="color: #03cb2c;"></i>&nbsp; ${task.dueDate}`
  }`;

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.className = "task-editBtn";
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "task-deleteBtn";
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  editBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    addTaskForm.style.display = "flex";
    document.querySelector(".content").classList.add("low-opacity-background");

    taskTitle.value = task.title;
    taskDesc.value = task.desc;
    taskDueDate.value = task.dueDate;
    formTaskAddBtn.textContent = "Update Task";

    editMode = true;
    taskToEdit = task;
  });

  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    modal.style.display = "block";
    modalDelete.addEventListener("click", () => {
      taskItem.remove();
      modal.style.display = "none";
      tasks = tasks.filter((t) => t !== task);
      if (tasks.length < 1) {
        displayNoTaskMessage();
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    modalCancel.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);
  taskItem.appendChild(taskItemTitle);
  taskItem.appendChild(taskItemDesc);
  taskItem.appendChild(taskItemDueDate);
  taskItem.appendChild(buttons);
  mainSec.appendChild(taskItem);
}

// Add new task or update existing task
formTaskAddBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  if (
    taskTitle.value.trim() !== "" &&
    taskDesc.value.trim() !== "" &&
    taskDueDate.value >= formattedDate
  ) {
    if (editMode && taskToEdit) {
      taskToEdit.title = taskTitle.value;
      taskToEdit.desc = taskDesc.value;
      taskToEdit.dueDate = taskDueDate.value;

      localStorage.setItem("tasks", JSON.stringify(tasks));
      mainSec.innerHTML = ""; // Clear existing tasks
      tasks.forEach((task) => addTaskToDOM(task));
    } else {
      const taskDetails = {
        title: taskTitle.value,
        desc: taskDesc.value,
        dueDate: taskDueDate.value,
        istoday: false,
      };

      tasks.push(taskDetails);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      addTaskToDOM(taskDetails);
    }

    addTaskForm.style.display = "none";
    taskTitle.value = "";
    taskDesc.value = "";
    taskDueDate.value = "";
    document
      .querySelector(".content")
      .classList.remove("low-opacity-background");
  } else if (taskDueDate.value < formattedDate && taskDueDate.value !== "") {
    error.style.display = "block";
    error.textContent = "Date cannot be in the past!";
    addTaskForm.style.height = "490px";
    formTaskAddBtn.style.marginTop = "0px";
    clearErrors();
  } else if (
    taskTitle.value.trim() === "" ||
    taskDesc.value.trim() === "" ||
    taskDueDate.value === ""
  ) {
    error.style.display = "block";
    error.textContent = "Please fill out the details!";
    addTaskForm.style.height = "490px";
    formTaskAddBtn.style.marginTop = "0px";
    clearErrors();
  }
});

function clearErrors() {
  taskDueDate.addEventListener("change", () => {
    error.textContent = "";
    error.style.display = "none";
    addTaskForm.style.height = "";
    formTaskAddBtn.style.marginTop = "";
  });
  taskDesc.addEventListener("input", () => {
    error.textContent = "";
    error.style.display = "none";
    addTaskForm.style.height = "";
    formTaskAddBtn.style.marginTop = "";
  });
}

// Handle active button state
function handleActiveBtn() {
  const options = [alltasks, today, upcoming];

  options.forEach((option) => {
    if (option) {
      option.addEventListener("click", function () {
        options.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    }
  });
}

function filterTasks(filterType) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  mainSec.innerHTML = "";

  tasks.forEach((task) => {
    if (filterType === "all") {
      addTaskToDOM(task);
    } else if (filterType === "today" && task.dueDate == formattedDate) {
      addTaskToDOM(task);
    } else if (filterType === "upcoming" && task.dueDate > formattedDate) {
      addTaskToDOM(task);
    }
  });
  if (tasks.length === 0) {
    displayNoTaskMessage();
  }
}

alltasks.addEventListener("click", () => {
  filterTasks("all");
});

today.addEventListener("click", () => {
  filterTasks("today");
});

upcoming.addEventListener("click", () => {
  filterTasks("upcoming");
});

// Display message when no tasks are available
function displayNoTaskMessage() {
  const noTask = document.createElement("p");
  noTask.className = "noTaskMsg";
  noTask.innerHTML = `No tasks to show &nbsp; <i class="fa-regular fa-face-grin-beam-sweat"></i>`;
  document.querySelector(".content").appendChild(noTask);
}

handleActiveBtn();

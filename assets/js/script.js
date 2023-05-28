document.addEventListener("DOMContentLoaded", function() {
  var currentDayEl = document.getElementById("currentDay");
  var currentTime = moment().format("dddd, MMMM Do");
  currentDayEl.textContent = currentTime;

  var timeBlocks = document.getElementsByClassName("time-block");
  var currentHour = moment().hour();

  for (var i = 0; i < timeBlocks.length; i++) {
    var hourEl = timeBlocks[i].querySelector(".hour");
    var hour = parseInt(hourEl.textContent);

    if (hour < currentHour) {
      timeBlocks[i].classList.add("past");
    } else if (hour === currentHour) {
      timeBlocks[i].classList.add("present");
    } else {
      timeBlocks[i].classList.add("future");
    }
  }

  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function() {
      var textArea = this.parentNode.querySelector(".description");
      var eventText = textArea.value;
      localStorage.setItem("event-" + i, eventText);
      console.log("Event saved: " + eventText);
    });
  }

  for (var i = 0; i < saveButtons.length; i++) {
    var savedEvent = localStorage.getItem("event-" + i);
    var textArea = saveButtons[i].parentNode.querySelector(".description");
    textArea.value = savedEvent;
  }
});

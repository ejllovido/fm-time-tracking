let currentWork = document.querySelector('.hrs-work')
let prevWork = document.querySelector('.prev-work')
let currentPlay = document.querySelector('.hrs-play')
let prevPlay = document.querySelector('.prev-play')
let currentStudy = document.querySelector('.hrs-study')
let prevStudy = document.querySelector('.prev-study')
let currentExercise = document.querySelector('.hrs-exercise')
let prevExercise = document.querySelector('.prev-exercise')
let currentSocial = document.querySelector('.hrs-social')
let prevSocial = document.querySelector('.prev-social')
let currentCare = document.querySelector('.hrs-care')
let prevCare = document.querySelector('.prev-care')

let dataFetch

let navDaily = document.querySelector('.daily')
let navWeekly = document.querySelector('.weekly')
let navMonthly = document.querySelector('.monthly')

async function getData() {
  await fetch('data.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      dataFetch = data
    })
    .catch((err) => {
      console.warn(err)
    })
  displayDaily()
}

function addAnimationNewHrs(element) {
  return element.classList.add('hrs', 'new-hrs')
}

function removeAnimationNewHrs(element) {
  return setTimeout(() => {
    element.classList.remove('new-hrs')
  }, 400)
}

function updateCurrent(element, dataFetch, index, date) {
  addAnimationNewHrs(element)
  removeAnimationNewHrs(element)
  return (element.innerHTML = dataFetch[index].timeframes[date].current + 'hrs')
}

function updatePrevious(element, dataFetch, index, date) {
  return (element.innerHTML = dataFetch[index].timeframes[date].previous + 'hrs')
}

function updateButtonColor(element, color) {
  return (element.style.color = color)
}

function displayDaily() {
  for (let i = 0; i < dataFetch.length; i++) {
    switch (dataFetch[i].title) {
      case 'Work':
        updateCurrent(currentWork, dataFetch, i, 'daily')
        updatePrevious(prevWork, dataFetch, i, 'daily')
        break
      case 'Play':
        updateCurrent(currentPlay, dataFetch, i, 'daily')
        updatePrevious(prevPlay, dataFetch, i, 'daily')
        break
      case 'Study':
        updateCurrent(currentStudy, dataFetch, i, 'daily')
        updatePrevious(prevStudy, dataFetch, i, 'daily')
        break
      case 'Exercise':
        updateCurrent(currentExercise, dataFetch, i, 'daily')
        updatePrevious(prevExercise, dataFetch, i, 'daily')
        break
      case 'Social':
        updateCurrent(currentSocial, dataFetch, i, 'daily')
        updatePrevious(prevSocial, dataFetch, i, 'daily')
        break
      default:
        updateCurrent(currentCare, dataFetch, i, 'daily')
        updatePrevious(prevCare, dataFetch, i, 'daily')
    }
  }

  updateButtonColor(navDaily, '#fff')
  updateButtonColor(navWeekly, '#6f76c8')
  updateButtonColor(navMonthly, '#6f76c8')
}

function displayWeekly() {
  for (let i = 0; i < dataFetch.length; i++) {
    switch (dataFetch[i].title) {
      case 'Work':
        updateCurrent(currentWork, dataFetch, i, 'weekly')
        updatePrevious(prevWork, dataFetch, i, 'weekly')
        break
      case 'Play':
        updateCurrent(currentPlay, dataFetch, i, 'weekly')
        updatePrevious(prevPlay, dataFetch, i, 'weekly')
        break
      case 'Study':
        updateCurrent(currentStudy, dataFetch, i, 'weekly')
        updatePrevious(prevStudy, dataFetch, i, 'weekly')
        break
      case 'Exercise':
        updateCurrent(currentExercise, dataFetch, i, 'weekly')
        updatePrevious(prevExercise, dataFetch, i, 'weekly')
        break
      case 'Social':
        updateCurrent(currentSocial, dataFetch, i, 'weekly')
        updatePrevious(prevSocial, dataFetch, i, 'weekly')
        break
      default:
        updateCurrent(currentCare, dataFetch, i, 'weekly')
        updatePrevious(prevCare, dataFetch, i, 'weekly')
    }
  }

  updateButtonColor(navDaily, '#6f76c8')
  updateButtonColor(navWeekly, '#fff')
  updateButtonColor(navMonthly, '#6f76c8')
}

function displayMonthly() {
  for (let i = 0; i < dataFetch.length; i++) {
    switch (dataFetch[i].title) {
      case 'Work':
        updateCurrent(currentWork, dataFetch, i, 'monthly')
        updatePrevious(prevWork, dataFetch, i, 'monthly')
        break
      case 'Play':
        updateCurrent(currentPlay, dataFetch, i, 'monthly')
        updatePrevious(prevPlay, dataFetch, i, 'monthly')
        break
      case 'Study':
        updateCurrent(currentStudy, dataFetch, i, 'monthly')
        updatePrevious(prevStudy, dataFetch, i, 'monthly')
        break
      case 'Exercise':
        updateCurrent(currentExercise, dataFetch, i, 'monthly')
        updatePrevious(prevExercise, dataFetch, i, 'monthly')
        break
      case 'Social':
        updateCurrent(currentSocial, dataFetch, i, 'monthly')
        updatePrevious(prevSocial, dataFetch, i, 'monthly')
        break
      default:
        updateCurrent(currentCare, dataFetch, i, 'monthly')
        updatePrevious(prevCare, dataFetch, i, 'monthly')
    }
  }

  updateButtonColor(navDaily, '#6f76c8')
  updateButtonColor(navWeekly, '#6f76c8')
  updateButtonColor(navMonthly, '#fff')
}

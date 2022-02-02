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

function displayDaily() {
  for (let i = 0; i < dataFetch.length; i++) {
    if (dataFetch[i].title === 'Work') {
      currentWork.classList.add('hrs', 'new-hrs')
      currentWork.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentWork.classList.remove('new-hrs')
      }, 400)
      prevWork.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    } else if (dataFetch[i].title === 'Play') {
      currentPlay.classList.add('hrs', 'new-hrs')
      currentPlay.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentPlay.classList.remove('new-hrs')
      }, 400)
      prevPlay.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    } else if (dataFetch[i].title === 'Study') {
      currentStudy.classList.add('hrs', 'new-hrs')
      currentStudy.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentStudy.classList.remove('new-hrs')
      }, 400)
      prevStudy.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    } else if (dataFetch[i].title === 'Exercise') {
      currentExercise.classList.add('hrs', 'new-hrs')
      currentExercise.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentExercise.classList.remove('new-hrs')
      }, 400)
      prevExercise.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    } else if (dataFetch[i].title === 'Social') {
      currentSocial.classList.add('hrs', 'new-hrs')
      currentSocial.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentSocial.classList.remove('new-hrs')
      }, 400)
      prevSocial.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    } else if (dataFetch[i].title === 'Self Care') {
      currentCare.classList.add('hrs', 'new-hrs')
      currentCare.innerHTML = dataFetch[i].timeframes.daily.current + 'hrs'
      setTimeout(() => {
        currentCare.classList.remove('new-hrs')
      }, 400)
      prevCare.innerHTML = dataFetch[i].timeframes.daily.previous + 'hrs'
    }
  }

  navDaily.style.color = '#fff'
  navWeekly.style.color = '#6f76c8'
  navMonthly.style.color = '#6f76c8'
}

function displayWeekly() {
  for (let i = 0; i < dataFetch.length; i++) {
    if (dataFetch[i].title === 'Work') {
      currentWork.classList.add('hrs', 'new-hrs')
      currentWork.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentWork.classList.remove('new-hrs')
      }, 400)
      prevWork.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Play') {
      currentPlay.classList.add('hrs', 'new-hrs')
      currentPlay.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentPlay.classList.remove('new-hrs')
      }, 400)
      prevPlay.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Study') {
      currentStudy.classList.add('hrs', 'new-hrs')
      currentStudy.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentStudy.classList.remove('new-hrs')
      }, 400)
      prevStudy.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Exercise') {
      currentExercise.classList.add('hrs', 'new-hrs')
      currentExercise.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentExercise.classList.remove('new-hrs')
      }, 400)
      prevExercise.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Social') {
      currentSocial.classList.add('hrs', 'new-hrs')
      currentSocial.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentSocial.classList.remove('new-hrs')
      }, 400)
      prevSocial.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Self Care') {
      currentCare.classList.add('hrs', 'new-hrs')
      currentCare.innerHTML = dataFetch[i].timeframes.weekly.current + 'hrs'
      setTimeout(() => {
        currentCare.classList.remove('new-hrs')
      }, 400)
      prevCare.innerHTML = dataFetch[i].timeframes.weekly.previous + 'hrs'
    }
  }

  navDaily.style.color = '#6f76c8'
  navWeekly.style.color = '#fff'
  navMonthly.style.color = '#6f76c8'
}

function displayMonthly() {
  for (let i = 0; i < dataFetch.length; i++) {
    if (dataFetch[i].title === 'Work') {
      currentWork.classList.add('hrs', 'new-hrs')
      currentWork.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentWork.classList.remove('new-hrs')
      }, 400)
      prevWork.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Play') {
      currentPlay.classList.add('hrs', 'new-hrs')
      currentPlay.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentPlay.classList.remove('new-hrs')
      }, 400)
      prevPlay.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Study') {
      currentStudy.classList.add('hrs', 'new-hrs')
      currentStudy.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentStudy.classList.remove('new-hrs')
      }, 400)
      prevStudy.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Exercise') {
      currentExercise.classList.add('hrs', 'new-hrs')
      currentExercise.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentExercise.classList.remove('new-hrs')
      }, 400)
      prevExercise.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Social') {
      currentSocial.classList.add('hrs', 'new-hrs')
      currentSocial.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentSocial.classList.remove('new-hrs')
      }, 400)
      prevSocial.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    } else if (dataFetch[i].title === 'Self Care') {
      currentCare.classList.add('hrs', 'new-hrs')
      currentCare.innerHTML = dataFetch[i].timeframes.monthly.current + 'hrs'
      setTimeout(() => {
        currentCare.classList.remove('new-hrs')
      }, 400)
      prevCare.innerHTML = dataFetch[i].timeframes.monthly.previous + 'hrs'
    }
  }

  navDaily.style.color = '#6f76c8'
  navWeekly.style.color = '#6f76c8'
  navMonthly.style.color = '#fff'
}

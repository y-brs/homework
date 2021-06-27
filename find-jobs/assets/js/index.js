const showCount = document.querySelector(".showCount"),
      dayNightMode = document.querySelector(".switch"),
      body = document.querySelector("body");

let count = 0;

dayNightMode.addEventListener("click", () => {
  dayNightMode.classList.toggle("day-switch")
  body.classList.toggle("day-mode")
});

document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;

  getJobs().then(jobs => {
    let filteredJobs = filterJobs(jobs, text);
    showCount.innerHTML = count;
    showJobs(filteredJobs);
  });
});

function getJobs() {
  return fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then(data => {
    return data;
  });
};

function filterJobs(jobs, searchText) {
  if(searchText) {
    let filteredJobs = jobs.filter(job => {
      if(job.roleName.toLowerCase().includes(searchText)
        || job.type.toLowerCase().includes(searchText)
        || job.company.toLowerCase().includes(searchText)
        || job.requirements.content.toLowerCase().includes(searchText)) {
          return true;
      } else {
        return false;
      }
    })
    return filteredJobs;
  } else {
    return jobs;
  };
};

function showJobs(jobs) {
  let jobsContainer = document.querySelector(".jobs-container");
  let jobsHTML = "";

  jobs.forEach(job => {
    count++;
    jobsHTML += `
      <div class="job-tile">
        <div class="top">
          <img src="${job.logo}" />
          <span class="material-icons more_horiz">more_horiz</span>
        </div>
        <div class="rolename">
          <span>${job.roleName}</span>
        </div>
        <div class="description">
          <span>${job.requirements.content}</span>
        </div>
        <div class="buttons">
          <div class="button apply-now">
            Apply Now
          </div>
          <div class="button">
            Message
          </div>
        </div>
      </div>
    `
  })

  showCount.innerHTML = count;
  count = 0;
  jobsContainer.innerHTML = jobsHTML;
}


// when the application is loaded
getJobs().then(data => {
  showJobs(data);
});

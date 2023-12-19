
function renderLicenseBadge(license) {
  // adding a badge variable for whatever license is chosen
  let badge = ' '

  if (license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } if (license === 'Apache') {
     badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } if (license === 'Boost') {
   badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else {
     badge =  " "
  }
}


function renderLicenseLink(license) {
  let licenseChoice = ' '
  if (license === 'MIT') {
    licenseChoice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  };
  if (license === 'Apache') {
    licenseChoice = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  };
  if (license === 'Boost') {
    licenseChoice = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else {
    licenseChoice = " "
  };
};


function renderLicenseSection(license) {
  let licenseSection = ' ';
  if (license === "none") {
    licenseSection = ' ';
  } else {
    licenseSection = `#License ${license}`
  }
}

// function to generate markdown for README - I am having sooo much trouble getting this to work


function generateMarkdown(data) {


  return `# ${data.Title}

${renderLicenseBadge(data.license)} 
  

  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ${renderLicenseLink(data.license)}

  #Title \n
  ${data.Title}

  #Description \n
  ${data.Description}

  #Installation \n
  ${data.Installation}

  #Usage \n
  ${data.Usage}

  #Contribution \n
  ${data.Contribution}

  #Tests \n
  ${data.Tests}

  #Questions \n
  - Username - ${data.username}
  - Email - ${data.email}
  
  ${data.Questions}



  
  ${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;



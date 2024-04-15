// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'ISC':
      return 'https://img.shields.io/badge/License-ISC-blue.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'GNU':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'Mozilla':
      return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
    default:
      console.log('No License');
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    default:
      console.log('No License Link');
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'ISC':
      return `This project is licensed under the ${license} - see the [LICENSE.md](LICENSE.md) file for details.`;
    case 'MIT':
      return `This project is licensed under the ${license} - see the [LICENSE.md](LICENSE.md) file for details.`;
    case 'GNU':
      return `This project is licensed under the ${license} - see the [LICENSE.md](LICENSE.md) file for details.`;
    case 'Apache':
      return `This project is licensed under the ${license} - see the [LICENSE.md](LICENSE.md) file for details.`;
    case 'Mozilla':
      return `This project is licensed under the ${license} - see the [LICENSE.md](LICENSE.md) file for details.`;
    default:
      console.log('No Project License');
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ### ${data.description}
  ## Table of Contents
  ### ${data.contents}
  ## Installation
  ### ${data.installation}
  ## Usage
  ### ${data.usage}
  ## License
  ### ${renderLicenseBadge(license), renderLicenseLink(license), renderLicenseSection(license)};
  ## Contributing
  ### ${data.contributing}
  ## Tests
  ### ${data.tests}
  ## Questions
  ### ${data.questions}
`;
}

module.exports = generateMarkdown;

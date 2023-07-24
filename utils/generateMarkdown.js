
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  } else if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
  }
  else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
  }
  else if (license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]'
  }
  else if (license === 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
  }
  else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
  }
  else if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
  } else if (license === 'SIL') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]'
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  } else if (license === 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
  } else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]'
  } else {
    return ''
  }
}

function renderLicenseLink(license) {

  if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'Boost') {
    return '(https://www.boost.org/LICENSE_1_0.txt)'
  }
  else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
  else if (license === 'Creative Commons') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)'
  }
  else if (license === 'Eclipse') {
    return '(https://opensource.org/licenses/EPL-1.0)'
  }
  else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === 'IBM') {
    return '(https://opensource.org/licenses/IPL-1.0)'
  }
  else if (license === 'ISC') {
    return '(https://opensource.org/licenses/ISC)'
  }
  else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Mozilla') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'Perl') {
    return '(https://opensource.org/licenses/Artistic-2.0)'
  }
  else if (license === 'SIL') {
    return '(https://opensource.org/licenses/OFL-1.1)'
  }
  else if (license === 'Unlicense') {
    return '(http://unlicense.org/)'
  }
  else if (license === 'WTFPL') {
    return '(http://www.wtfpl.net/about/)'
  }
  else if (license === 'Zlib') {
    return '(https://opensource.org/licenses/Zlib)'
  }
  else {
    return ''
  }

}

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}

function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}

  ## License
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Main Features](#main-features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Main Features
  ${data.features}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at ${data.email} or visit my [GitHub page](https://github.com/${data.creator})
  
`;
}

module.exports = generateMarkdown;



function generateMarkdown(data) {
  return `

[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)


# Title:
  ${data.projecttitle}

## Description
  ${data.projectdescription}

## Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [Licencse](#licencse)
  * [Contributing](#Contributing)
  * [Tests](#tests)

## Install
  ${data.projectinstall}

## Usage
  ${data.usage}

## Licencse
  ${data.licenses}

## Contributing
  ${data.contribute}

## Tests
  ${data.tests}

# Author:
${data.githubusername}
![alt text](https://github.com/${data.username}.png)
`;
}

module.exports = generateMarkdown;

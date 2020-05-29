

function generateMarkdown(data) {
  return `



# Username:
  ${data.githubusername}

# Title:
  ${data.projecttitle}

## Description
  ${data.projectdescription}

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

`;
}

module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');
const createSvg = require('./lib/createSvg');

const questions = [
    {
        type: 'input',
        message: 'Enter text:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter color:',
        name: 'color',
    },
    {
        type: 'checkbox',
        message: 'Select shape',
        name: 'shape',
        choices: [
            {name: 'circle'},
            {name: 'triangle'},
            {name: 'square'},
        ],
    }
];

function init() {
    inquirer.prompt(questions).then((response) => {
        writeFile(response);
    });
}

function writeFile(data) {
    const svgFile = createSvg(data);

    fs.writeFile(data.text + '.svg', svgFile, (err) =>
    err ? console.error(err) : console.log('Success!'));

}
init();
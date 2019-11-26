#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
    name: chalk.blue("             Marah Andrioli"),
    handle: chalk.cyan("Marah ;)"),
    work: chalk.yellow("Junior web developper at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.magenta("~marahand"),
    github: chalk.gray("https://github.com/") + chalk.magenta("MarAndri"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.magenta("marah-andrioli-887075191"),
    npx: chalk.gray("npx") + " " + chalk.red("marah"),
    labelWork: chalk.white.bold("       Work:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE), {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);
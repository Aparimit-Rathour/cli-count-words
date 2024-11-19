const { Command } = require('commander');
const program = new Command();
const path = require("path")
const fs = require("fs")

function donereading(err,data){
	const words = data.split(" ")
	console.log(words.length)

}

program
	.name("count-words")
	.description("CLI for file actions")
	.version("1.0.0")

program
	.command("count")
	.description("Counts the number of words in a file")
	.argument("<string>","Path to the file")
	.action((str, options) => {
		fs.readFile(str,"utf-8",donereading)
	});

program.parse();
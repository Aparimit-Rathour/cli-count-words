const { program } = require("commander");

program
	.name("count-words")
	.description("CLI for file actions")
	.version("1.0.0")

program
	.command("count")
	.description("Counts the number of words in a file")

program
	.argument("<string>", "string to split")
	.option("--first", "display just the first substring")
	.option("-s, --separator <char>", "separator character", ",")
	.action((str, options) => {
		const limit = options.first ? 1 : undefined;
		console.log(str.split(options.separator, limit));
	});

program.parse();
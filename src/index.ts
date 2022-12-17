#!/usr/bin/env node
import { CommandParser } from "./CommandParser";
import { NestiaSetupWizard } from "./NestiaSetupWizard";
import { NestiaStarter } from "./NestiaStarter";

const USAGE = `Wrong command has been detected. Use like below:

npx nestia [command] [options?]

  1. npx nestia start <directory> ---manager (npm|pnpm|yarn)
    - npx nestia start project
    - npx nestia start project --manager pnpm
  2. npx nestia setup \\
        --compiler (ttypescript|ts-patch) \\
        --manager (npm|pnpm|yarn)
    - npx nestia setup
    - npx nestia setup --compiler ttypescript
    - npx nestia setup --compiler ts-patch
    - npx nestia setup --manager pnpm
  3. npx nestia dependencies --manager (npm|pnpm|yarn)
    - npx nestia dependencies
    - npx nestia dependencies --manager yarn
  4. npx nestia init
  5. npx nestia sdk <input> --out <output>
    - npx nestia sdk # when "nestia.config.ts" be configured
    - npx nestia sdk src/controllers --out src/api
    - npx nestia sdk src/**/*.controller.ts --out src/api
  6. npx nestia swagger <input> --out <output>
    - npx nestia swagger # when "nestia.config.ts" be configured
    - npx nestia swagger src/controllers --out src/api
    - npx nestia swagger src/**/*.controller.ts --out src/api       
`;

function halt(desc: string): never {
    console.error(desc);
    process.exit(-1);
}

async function setup(): Promise<void> {
    const options: Record<string, string> = CommandParser.parse(
        process.argv.slice(3),
    );
    const manager: string = options.manager ?? "npm";
    const compiler: string = options.compiler ?? "ttypescript";

    if (
        (compiler !== "ttypescript" && compiler !== "ts-patch") ||
        (manager !== "npm" && manager !== "pnpm" && manager !== "yarn")
    )
        halt(USAGE);
    else if (compiler === "ttypescript")
        await NestiaSetupWizard.ttypescript(manager);
    else await NestiaSetupWizard.tsPatch(manager);
}

async function main(): Promise<void> {
    const type: string | undefined = process.argv[2];
    const argv: string[] = process.argv.slice(3);

    if (type === "start")
        await NestiaStarter.start((msg) => halt(msg ?? USAGE))(argv);
    else if (type === "setup") await setup();
    else if (
        type === "dependencies" ||
        type === "init" ||
        type === "sdk" ||
        type === "swagger"
    ) {
        try {
            await import("@nestia/sdk");
        } catch {
            halt(
                `@nestia/sdk has not been installed. Run "npx nestia setup" before.`,
            );
        }
        await import("@nestia/sdk/lib/executable/sdk");
    } else halt(USAGE);
}
main().catch((exp) => {
    console.log(exp.message);
    process.exit(-1);
});

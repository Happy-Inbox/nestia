import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ArrayRecursive>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ArrayRecursive> {
            return input;
        }
    }
    return NestiaController;
});
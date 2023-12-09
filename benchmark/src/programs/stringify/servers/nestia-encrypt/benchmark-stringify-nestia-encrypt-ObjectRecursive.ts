import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ObjectRecursive>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ObjectRecursive> {
            return input;
        }
    }
    return NestiaController;
});
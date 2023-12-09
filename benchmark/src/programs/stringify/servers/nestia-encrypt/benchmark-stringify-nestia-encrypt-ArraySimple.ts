import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ArraySimple } from "../../../../structures/pure/ArraySimple";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ArraySimple>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ArraySimple> {
            return input;
        }
    }
    return NestiaController;
});
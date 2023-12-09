import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ObjectSimple>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ObjectSimple> {
            return input;
        }
    }
    return NestiaController;
});
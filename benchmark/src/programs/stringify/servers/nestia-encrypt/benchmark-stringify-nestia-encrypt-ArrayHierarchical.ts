import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayHierarchical } from "../../../../structures/pure/ArrayHierarchical";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ArrayHierarchical>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ArrayHierarchical> {
            return input;
        }
    }
    return NestiaController;
});
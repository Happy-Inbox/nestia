import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ArrayRecursiveUnionExplicit>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ArrayRecursiveUnionExplicit> {
            return input;
        }
    }
    return NestiaController;
});
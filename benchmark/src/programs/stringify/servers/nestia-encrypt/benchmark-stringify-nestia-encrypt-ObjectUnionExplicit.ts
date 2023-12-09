import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ObjectUnionExplicit>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ObjectUnionExplicit> {
            return input;
        }
    }
    return NestiaController;
});
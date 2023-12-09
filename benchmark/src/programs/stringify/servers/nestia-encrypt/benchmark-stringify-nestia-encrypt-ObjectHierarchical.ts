import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { createNestExpressStringifyProgram } from "../createNestExpressStringifyProgram";

createNestExpressStringifyProgram(false)(37_032)((input: Collection<ObjectHierarchical>) => {
    @core.EncryptedController("", {
        key: "a".repeat(16),
        iv: "b".repeat(16),
    })
    class NestiaController {
        @core.EncryptedRoute.Get("stringify")
        public stringify(): Collection<ObjectHierarchical> {
            return input;
        }
    }
    return NestiaController;
});
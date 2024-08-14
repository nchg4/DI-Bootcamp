"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateUnionType_1 = require("./src/validateUnionType");
var var1 = "Hello";
var var2 = 42;
var var3 = true;
console.log((0, validateUnionType_1.validateUnionType)(var1, ["string", "number"]));
console.log((0, validateUnionType_1.validateUnionType)(var2, ["string", "boolean"]));
console.log((0, validateUnionType_1.validateUnionType)(var3, ["boolean", "object"]));

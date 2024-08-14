"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnionType = validateUnionType;
function validateUnionType(value, allowedTypes) {
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}

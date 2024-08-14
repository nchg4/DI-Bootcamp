export function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (const type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
export function generateRandomString() {
    const rand = Math.random().toString(16).substr(2, 8);
    return rand;
}

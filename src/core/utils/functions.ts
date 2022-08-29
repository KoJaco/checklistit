export function generateRandomString() {
    const rand = Math.random().toString(16).substr(2, 8);
    return rand;
}

export const arrayToObject = (array: Array<any>) =>
    array.reduce((obj, item) => {
        obj[item._id] = item;
        return obj;
    }, {});

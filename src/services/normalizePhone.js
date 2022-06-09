export function normalizePhone(phone) {
    return phone.split(/\)|\(|-|\s/).join('');
}
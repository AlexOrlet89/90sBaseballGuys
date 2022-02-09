export function findByID(id, guys) {
    return guys.find((item) => item.id === id);
}
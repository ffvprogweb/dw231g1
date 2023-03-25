export function arrumaId(id: string) {
    id = id.replace(/\s+/g, '-');
    id = id.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    id = id.toLowerCase()
    return id
}
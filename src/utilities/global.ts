export const cloneDeep = (object: any) => {
    return JSON.parse(JSON.stringify(object));
}

export const toSnakeCase = (text: string) => {
    return removeAccents(text).replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}


export const removeAccents = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
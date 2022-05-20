
function insert(tableName, columnValuePairs) {
    //create an iteration for colpairs
    //for each key store into string separated by comma
    //for each value store into string separated by comma
    //after iteration, create return string
    let keyString = "";
    let valString = "";
    let count = 0;
    const keyLength = Object.keys(columnValuePairs).length
    for (const key in columnValuePairs) {
        count++
        if (count < keyLength) {
            keyString += key + ", "
            if (typeof columnValuePairs[key] === "string") {
                valString += `"` + columnValuePairs[key] + `"` + ", "
            } else {
                valString += columnValuePairs[key] + ", "
            }
        } else {
            keyString += key
            if (typeof columnValuePairs[key] === "string") {
                valString += `"` + columnValuePairs[key] + `"` + ", "
            } else {
                valString += columnValuePairs[key]
            }
        }
    }

    const result = `INSERT INTO ${table} (${keyString}) VALUES (${valString});`
    return result
}
// ===============================================================================
function insert(tableName, columnValuePairs) {
    let keys = '';
    let values = '';
    for (let i in columnValuePairs) {
        keys = keys + i + ', ';
        values = values + columnValuePairs[i] + ', ';
    }
    // trimming the whitespace and comma
    keys = keys.slice(0, keys.length - 2);
    values = values.slice(0, values.length - 2);
    return `INSERT INTO ${tableName} (${keys}) VALUES (${values})`
}
// containerId：一个正整数，用于标识关联的货物集装箱。/ 
// destination：一个非空字串（去除空白后），表示货物的目标目的地。
// weight：一个正数，表示货物的重量。
// unit：一个字串，描述货物 weight 属性的单位（要么是千克的 "kg"，要么是磅的 "lb"）。
// hazmat：一个布尔值，表示是否需要危险物品处理。

function normalizeUnits(manifest) {
    const newManifest = {...manifest};
    if (newManifest.unit === "lb") {
        newManifest.weight = newManifest.weight * 0.45;
        newManifest.unit = "kg";
    } 
    return newManifest;
}

function validateManifest(manifest) {
    const newManifest = {};
    if (!Object.hasOwn(manifest, "containerId")) {
        newManifest.containerId = "Missing";
    } else if (!Number.isInteger(manifest.containerId)|| manifest.containerId <= 0 ) {
        newManifest.containerId = "Invalid";
    } 
    if (!Object.hasOwn(manifest, "destination")) {
        newManifest.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        newManifest.destination = "Invalid";
    }
    if (!Object.hasOwn(manifest, "weight")) {
        newManifest.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
        newManifest.weight = "Invalid";
    }  
    if (!Object.hasOwn(manifest, "unit")) {
        newManifest.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        newManifest.unit = "Invalid";
    }
    if (!Object.hasOwn(manifest, "hazmat")) {
        newManifest.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        newManifest.hazmat = "Invalid";
    }
    return newManifest;   
}

function processManifest(manifest) {
    if (Object.keys(validateManifest(manifest)).length > 0) {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validateManifest(manifest));
    } else {
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    }
}
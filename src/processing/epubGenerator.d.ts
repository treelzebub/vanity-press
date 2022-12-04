import { Epub } from "../model/Epub";

/**
 * Return type is a Promise from https://github.com/cyrilis/epub-gen/blob/master/lib/index.js#L3
 * 
 * Usage from the readme:
 * new Epub(option, output).promise.then(
 *    () => console.log("Success!"),
 *    err => console.error("Failed because ", err)
 * );
 */
export const epubFromModel: (model: Epub) => Promise<any>;
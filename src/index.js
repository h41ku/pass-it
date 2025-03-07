const isDefined = x => x !== undefined
const isString = x => typeof x === 'string'
const isTypedArray = x => (x instanceof Int8Array
    || x instanceof Uint8Array
    || x instanceof Int16Array
    || x instanceof Uint16Array
    || x instanceof Int32Array
    || x instanceof Uint32Array
    || x instanceof BigInt64Array
    || x instanceof BigUint64Array)

export default (thing, options = {}) => {
    const {
        download,
        target,
        type
    } = (options || {})
    if (isString(thing)
        || isTypedArray(thing)
        || thing instanceof ArrayBuffer
        || thing instanceof DataView) {
        thing = new Blob([ thing ], isDefined(type) ? { type } : {})
    }
    const url = URL.createObjectURL(thing)
    const anchor = document.createElement('a')
    anchor.setAttribute('href', url)
    if (download) {
        const value = isString(download)
            ? download
            : (thing instanceof File
                ? thing.name
                : true
              )
        anchor.setAttribute('download', value)
    }
    if (target) {
        anchor.setAttribute('target', target)
    }
    anchor.click()
    return () => {
        URL.revokeObjectURL(url)
    }
}

export type TypedArray = Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | BigInt64Array
    | BigUint64Array;

export type Options = {
    download: string | boolean | undefined,
    target: string | undefined,
    type: string | undefined
};

export type releaseFn = () => void;

export declare function passIt(
    thing: File | Blob | ArrayBuffer | DataView | TypedArray | string,
    options: Options | undefined
): releaseFn;

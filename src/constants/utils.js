const REGEXP_IF_19 = "(13519(([01][0-9][0-9])|([2][01][0-9])|([2][2][01])))";
const REGEXP_STI_19 = "(18219(([0][0-9][0-9])|([1][0][0-9])|([1][1][0-8])))";
const REGEXP_IF_20 = "(13520(([0][0-9][0-9])|([1][0-5][0-9])|([1][6][0-7])))";
const REGEXP_STI_20 = "(18220(([0][0-9][0-9])|([1][0][0-9])|([1][1][0])))";

export const REGEXP_NIM = `^(${REGEXP_IF_19}|${REGEXP_STI_19}|${REGEXP_IF_20}|${REGEXP_STI_20})$`;

export const MAX_FILE_SIZE_KB = 2 * 1024 * 1024;
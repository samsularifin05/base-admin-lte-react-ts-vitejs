export const encryptascii = (str: string): string => {
  const key: string = import.meta.env.VITE_BE;

  const dataKey: Record<number, string> = {};
  for (let i = 0; i < key.length; i++) {
    dataKey[i] = key.charAt(i);
  }

  let strEnc = "";
  let nkey = 0;
  const jml = str.length;

  for (let i = 0; i < jml; i++) {
    strEnc =
      strEnc + hexEncode(str.charCodeAt(i) + dataKey[nkey].charCodeAt(0));

    if (nkey === Object.keys(dataKey).length - 1) {
      nkey = 0;
    }
    nkey = nkey + 1;
  }
  return strEnc.toUpperCase();
};

export const decryptascii = (str: string) => {
  if (str) {
    const key: string = import.meta.env.VITE_BE;
    const dataKey: Record<number, string> = {};
    for (let i = 0; i < key.length; i++) {
      dataKey[i] = key.charAt(i);
    }

    let strDec = "";
    let nkey = 0;
    const jml = str.length;
    let i = 0;
    while (i < jml) {
      strDec =
        strDec + chr(hexdec(str.substr(i, 2)) - dataKey[nkey].charCodeAt(0));
      if (nkey === Object.keys(dataKey).length - 1) {
        nkey = 0;
      }
      nkey = nkey + 1;
      i = i + 2;
    }
    return strDec;
  }
};

const hexEncode = (str: number): string => {
  let result = "";
  result = str.toString(16);
  return result;
};

const hexdec = (hex: string): number => {
  const str: number = parseInt(hex, 16);
  return str;
};

const chr = (asci: number): string => {
  const str = String.fromCharCode(asci);
  return str;
};

export const doEncrypt = (dataBeforeCopy: any, ignore: string[] = []): any => {
  if (!Number(import.meta.env.VITE_ENCRYPTION_MODE)) {
    return dataBeforeCopy;
  }
  if (!dataBeforeCopy) {
    return dataBeforeCopy;
  }
  if (typeof dataBeforeCopy === "object" && !(dataBeforeCopy instanceof Date)) {
    const data = Array.isArray(dataBeforeCopy)
      ? [...dataBeforeCopy]
      : { ...dataBeforeCopy };
    Object.keys(data).map((x: string) => {
      const result = ignore.find((find: string) => find === x);
      if (!result) {
        if (Array.isArray(data[x])) {
          data[x] = data[x].map((y: any) => {
            if (typeof y === "string") {
              return encryptascii(y);
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(data[x] instanceof Date)
            ) {
              return doEncrypt(y, ignore);
            }
            return false;
          });
        } else {
          if (typeof data[x] === "string" && data[x]) {
            data[x] = encryptascii(data[x]);
          } else if (typeof data[x] === "number" && data[x]) {
            // Call Masking Number
          } else if (
            typeof data[x] === "object" &&
            data[x] &&
            !(dataBeforeCopy instanceof Date)
          ) {
            data[x] = doEncrypt(data[x], ignore);
          }
        }
      }
      return false;
    });
    return data;
  } else if (typeof dataBeforeCopy === "string") {
    const data = encryptascii(dataBeforeCopy);
    return data;
  }
};

export const doDecrypt = (dataBeforeCopy: any, ignore: string[] = []): any => {
  if (!Number(import.meta.env.VITE_ENCRYPTION_MODE)) {
    return dataBeforeCopy;
  }

  if (!dataBeforeCopy) {
    return dataBeforeCopy;
  }

  if (typeof dataBeforeCopy === "object" && !(dataBeforeCopy instanceof Date)) {
    const data = Array.isArray(dataBeforeCopy)
      ? [...dataBeforeCopy]
      : { ...dataBeforeCopy };
    Object.keys(data).map((x: string) => {
      const result = ignore.find((find: string) => find === x);
      if (!result) {
        if (Array.isArray(data[x])) {
          data[x] = data[x].map((y: any) => {
            if (typeof y === "string") {
              return decryptascii(y);
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(data[x] instanceof Date)
            ) {
              return doDecrypt(y, ignore);
            }
            return false;
          });
        } else {
          // Real Encrypt
          if (typeof data[x] === "string" && data[x]) {
            data[x] = decryptascii(data[x]);
          } else if (typeof data[x] === "number" && data[x]) {
            // Call Unmasking Number()
          } else if (
            typeof data[x] === "object" &&
            data[x] &&
            !(dataBeforeCopy instanceof Date)
          ) {
            data[x] = doDecrypt(data[x], ignore);
          }
        }
      }
      return false;
    });
    return data;
  } else if (typeof dataBeforeCopy === "string") {
    const data = decryptascii(dataBeforeCopy);
    return data;
  }
};

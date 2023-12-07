import crypto from "crypto";

/**
 * Utility class for the AES-128/256 encryption.
 *
 *   - AES-128/256
 *   - CBC mode
 *   - PKCS#5 Padding
 *   - Base64 Encoding
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace AesPkcs5 {
  /**
   * Encrypt data
   *
   * @param data Target data
   * @param key Key value of the encryption.
   * @param iv Initializer Vector for the encryption
   * @return Encrypted data
   */
  export const encrypt = (
    data: string | Uint8Array,
    key: string,
    iv: string,
  ): Uint8Array => {
    const bytes: number = key.length * 8;
    const cipher: crypto.Cipher = crypto.createCipheriv(
      `AES-${bytes}-CBC`,
      key,
      iv,
    );
    return concat(cipher.update(data), cipher.final());
  };

  /**
   * Decrypt data.
   *
   * @param data Target data
   * @param key Key value of the decryption.
   * @param iv Initializer Vector for the decryption
   * @return Decrypted data.
   */
  export const decrypt = (
    data: Uint8Array,
    key: string,
    iv: string,
  ): Uint8Array => {
    const bytes: number = key.length * 8;
    const decipher: crypto.Decipher = crypto.createDecipheriv(
      `AES-${bytes}-CBC`,
      key,
      iv,
    );
    return concat(decipher.update(data), decipher.final());
  };

  /**
   * @internal
   */
  const concat = (x: Buffer, y: Buffer): Buffer => {
    if (x.length === 0) return y;
    if (y.length === 0) return x;
    return Buffer.concat([x, y]);
  };
}

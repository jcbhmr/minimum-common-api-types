// W3C Web Cryptography Level 2 — https://w3c.github.io/webcrypto/
// Interfaces: Crypto, CryptoKey, SubtleCrypto
// Global properties: crypto

export {};

declare global {
  type AlgorithmIdentifier = Algorithm | string;
  type HashAlgorithmIdentifier = AlgorithmIdentifier;
  type BigInteger = Uint8Array;
  type NamedCurve = string;
  type KeyType = "private" | "public" | "secret";
  type KeyUsage =
    | "decrypt"
    | "deriveBits"
    | "deriveKey"
    | "encrypt"
    | "sign"
    | "unwrapKey"
    | "verify"
    | "wrapKey";
  type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";

  interface Algorithm {
    name: string;
  }

  interface AesCbcParams extends Algorithm {
    iv: BufferSource;
  }

  interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
  }

  interface AesGcmParams extends Algorithm {
    additionalData?: BufferSource;
    iv: BufferSource;
    tagLength?: number;
  }

  interface AesKeyGenParams extends Algorithm {
    length: number;
  }

  interface AesDerivedKeyParams extends Algorithm {
    length: number;
  }

  interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
  }

  interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
  }

  interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: BufferSource;
    salt: BufferSource;
  }

  interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: BufferSource;
  }

  interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
  }

  interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
  }

  interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
  }

  interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
  }

  interface RsaPssParams extends Algorithm {
    saltLength: number;
  }

  interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
  }

  interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
  }

  interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
  }

  interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
  }

  interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
  }

  interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
  }

  interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
  }

  interface CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: KeyUsage[];
  }

  var CryptoKey: {
    prototype: CryptoKey;
    new (): CryptoKey;
  };

  interface KeyAlgorithm {
    name: string;
  }

  interface SubtleCrypto {
    decrypt(
      algorithm: AlgorithmIdentifier | AesCbcParams | AesCtrParams | AesGcmParams | RsaOaepParams,
      key: CryptoKey,
      data: BufferSource,
    ): Promise<ArrayBuffer>;
    deriveBits(
      algorithm:
        | AlgorithmIdentifier
        | EcdhKeyDeriveParams
        | HkdfParams
        | Pbkdf2Params,
      baseKey: CryptoKey,
      length?: number | null,
    ): Promise<ArrayBuffer>;
    deriveKey(
      algorithm:
        | AlgorithmIdentifier
        | EcdhKeyDeriveParams
        | HkdfParams
        | Pbkdf2Params,
      baseKey: CryptoKey,
      derivedKeyType:
        | AlgorithmIdentifier
        | AesDerivedKeyParams
        | HmacImportParams
        | HkdfParams
        | Pbkdf2Params,
      extractable: boolean,
      keyUsages: KeyUsage[],
    ): Promise<CryptoKey>;
    digest(
      algorithm: AlgorithmIdentifier,
      data: BufferSource,
    ): Promise<ArrayBuffer>;
    encrypt(
      algorithm: AlgorithmIdentifier | AesCbcParams | AesCtrParams | AesGcmParams | RsaOaepParams,
      key: CryptoKey,
      data: BufferSource,
    ): Promise<ArrayBuffer>;
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(
      format: Exclude<KeyFormat, "jwk">,
      key: CryptoKey,
    ): Promise<ArrayBuffer>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    generateKey(
      algorithm: RsaHashedKeyGenParams | EcKeyGenParams,
      extractable: boolean,
      keyUsages: ReadonlyArray<KeyUsage>,
    ): Promise<CryptoKeyPair>;
    generateKey(
      algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params,
      extractable: boolean,
      keyUsages: ReadonlyArray<KeyUsage>,
    ): Promise<CryptoKey>;
    generateKey(
      algorithm: AlgorithmIdentifier,
      extractable: boolean,
      keyUsages: KeyUsage[],
    ): Promise<CryptoKeyPair | CryptoKey>;
    importKey(
      format: "jwk",
      keyData: JsonWebKey,
      algorithm:
        | AlgorithmIdentifier
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | AesDerivedKeyParams,
      extractable: boolean,
      keyUsages: ReadonlyArray<KeyUsage>,
    ): Promise<CryptoKey>;
    importKey(
      format: Exclude<KeyFormat, "jwk">,
      keyData: BufferSource,
      algorithm:
        | AlgorithmIdentifier
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | AesDerivedKeyParams,
      extractable: boolean,
      keyUsages: ReadonlyArray<KeyUsage>,
    ): Promise<CryptoKey>;
    sign(
      algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams,
      key: CryptoKey,
      data: BufferSource,
    ): Promise<ArrayBuffer>;
    unwrapKey(
      format: KeyFormat,
      wrappedKey: BufferSource,
      unwrappingKey: CryptoKey,
      unwrapAlgorithm:
        | AlgorithmIdentifier
        | RsaOaepParams
        | AesCbcParams
        | AesCtrParams
        | AesGcmParams,
      unwrappedKeyAlgorithm:
        | AlgorithmIdentifier
        | RsaHashedImportParams
        | EcKeyImportParams
        | HmacImportParams
        | AesDerivedKeyParams,
      extractable: boolean,
      keyUsages: KeyUsage[],
    ): Promise<CryptoKey>;
    verify(
      algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams,
      key: CryptoKey,
      signature: BufferSource,
      data: BufferSource,
    ): Promise<boolean>;
    wrapKey(
      format: KeyFormat,
      key: CryptoKey,
      wrappingKey: CryptoKey,
      wrapAlgorithm:
        | AlgorithmIdentifier
        | RsaOaepParams
        | AesCbcParams
        | AesCtrParams
        | AesGcmParams,
    ): Promise<ArrayBuffer>;
  }

  var SubtleCrypto: {
    prototype: SubtleCrypto;
    new (): SubtleCrypto;
  };

  interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
  }

  var Crypto: {
    prototype: Crypto;
    new (): Crypto;
  };

  var crypto: Crypto;
}

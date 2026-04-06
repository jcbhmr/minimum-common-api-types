export { }

declare global {
    interface Crypto {
        readonly subtle: SubtleCrypto;
        getRandomValues<T extends Exclude<BufferSource, ArrayBuffer>>(array: T): T;
        randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
    }
    var Crypto: {
        prototype: Crypto;
        new(): Crypto;
    };

    interface CryptoKey {
        readonly algorithm: KeyAlgorithm;
        readonly extractable: boolean;
        readonly type: KeyType;
        readonly usages: KeyUsage[];
    }
    var CryptoKey: {
        prototype: CryptoKey;
        new(): CryptoKey;
    };

    interface Algorithm {
        name: string;
    }
    type AlgorithmIdentifier = Algorithm | string;
    interface RsaOaepParams extends Algorithm {
        label?: BufferSource;
    }
    interface AesCtrParams extends Algorithm {
        counter: BufferSource;
        length: number;
    }
    interface AesCbcParams extends Algorithm {
        iv: BufferSource;
    }
    interface EcdhKeyDeriveParams extends Algorithm {
        public: CryptoKey;
    }
    interface AesGcmParams extends Algorithm {
        additionalData?: BufferSource;
        iv: BufferSource;
        tagLength?: number;
    }
    interface HkdfParams extends Algorithm {
        hash: HashAlgorithmIdentifier;
        info: BufferSource;
        salt: BufferSource;
    }
    type HashAlgorithmIdentifier = AlgorithmIdentifier;

    interface SubtleCrypto {
        decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
        deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length?: number | null): Promise<ArrayBuffer>;
        deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
        digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
        encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
        exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
        exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
        exportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
        generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
        generateKey(algorithm: "X25519" | { name: "X25519" }, extractable: boolean, keyUsages: ReadonlyArray<"deriveBits" | "deriveKey">): Promise<CryptoKeyPair>;
        generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
        generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
        generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
        importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
        importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
        sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
        unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
        verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
        wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
    }
    var SubtleCrypto: {
        prototype: SubtleCrypto;
        new(): SubtleCrypto;
    };
}
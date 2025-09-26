# stellar-base — Dilithium2 Integration

> **Warning:** This repository contains a **modified** `stellar-base` module that replaces Stellar's native signature handling with **CRYSTALS-Dilithium2** (post-quantum) signatures.  
> This is an experimental research prototype — **not** compatible with the public Stellar network and **not** for production use.

---

## Summary
This fork of `stellar-base` adapts the core signing and verification paths to use **Dilithium2**. Changes are focused on the signature representation and verification hooks so that transaction/envelope inspectors and serialisers accept and validate Dilithium2 signatures.

Key modifications include:
- New signature-type identifier (e.g. `SIGNATURE_TYPE_DILITHIUM2`) in the module’s signature enum.
- Signature blob handling updated to accept Dilithium2 signature and key lengths.
- Signing and verification functions wired to a Dilithium2 library (pluggable implementation).
- Small compatibility adapters for key serialization/deserialization.

---

## Key & Signature Sizes (Dilithium2 — approximate)
- **Public key:** 1,312 bytes  
- **Private key:** 2,528 bytes  
- **Signature:** 2,420 bytes

> **Comparison:** Ed25519 uses 32-byte public keys and 64-byte signatures. Dilithium2 objects are substantially larger, which affects transaction size, bandwidth, storage, and node resource planning.

---

## Usage / Developer Steps
1. **Review changes** — inspect `src/signature.*` (or equivalent) to see the enum, serializer changes, and new verification call sites.  
2. **Install a Dilithium2 library** — add a vetted implementation (native or WASM) and expose `keygen()`, `sign()`, `verify()` compatible functions.  
3. **Configure signing backend** — the module accepts a signing backend interface; plug your Dilithium2 implementation there.  
4. **Regenerate any bindings** — if your build uses generated code (XDR / types), regenerate to include the new signature type.  
5. **Run tests** — run provided unit/integration tests that cover:
   - Signing a transaction + serializing envelope
   - Deserializing + verifying a Dilithium2 signature
   - Invalid/truncated signature handling

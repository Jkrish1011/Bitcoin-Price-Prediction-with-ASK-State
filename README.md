# Private BTC Price Prediction with ASK State Tracking

## Description

This is a private BTC price prediction application that uses ASK state tracking concepts to guide future price movement predictions while keeping user inputs and model states local-first.

The repository is structured as a mono-repo:

- `bitcoin-rust/` — Rust utilities showcasing Bitcoin transaction building/signing (P2WPKH, PSBT) using the `bitcoin` crate. Useful for wallet/settlement integrations and experimentation.
- `frontend/private-btc-prediction/` — Next.js app that hosts the private prediction UI and client-side state handling.

> Note: While the app is designed around private ASK state tracking, you should review or add your own model/logic for the prediction pipeline as needed.

## Features

- Private, local-first UI for BTC price prediction inputs and ASK-state-style state handling.
- Modern React/Next.js 15 app with TypeScript and Tailwind CSS 4.
- Smooth UI/UX helpers via `gsap` and WebGL visuals via `ogl` (available in the stack).
- Rust Bitcoin demos to help you integrate on-chain workflows:
  - P2WPKH transaction construction and signing (`bitcoin-rust/src/main.rs`).
  - PSBT SegWit creator/updater/signer/finalizer flow (`bitcoin-rust/src/psbt_segwit.rs`).
  - Taproot/PSBT Taproot modules present for extension (`bitcoin-rust/src/psbt_taproot.rs`, `bitcoin-rust/src/taproot.rs` if added).

## Tech Stack

- Frontend
  - Next.js `15.5.0` (`frontend/private-btc-prediction/package.json`)
  - React `19.1.0`, React DOM `19.1.0`
  - TypeScript, Tailwind CSS `^4`
  - GSAP `^3.13.0`, OGL `^1.0.11`

- Rust Utilities
  - `bitcoin = "0.32"`, `miniscript = "12.3.5"`
  - `secp256k1 = "0.29"`, `serde`, `serde_json`, `base64`
  - `tokio` and `reqwest` available for async and HTTP usage

## Repository Structure

```
Bitcoin-Price-Prediction-with-ASK-State/
├─ bitcoin-rust/
│  ├─ src/
│  │  ├─ main.rs            # P2WPKH tx build/sign example
│  │  ├─ psbt_segwit.rs     # PSBT SegWit end-to-end flow
│  │  ├─ psbt_taproot.rs    # (Present) Taproot PSBT helpers (extend as needed)
│  │  └─ taproot.rs         # (If present) Taproot utilities
│  ├─ Cargo.toml
│  └─ Cargo.lock
└─ frontend/
   └─ private-btc-prediction/
      ├─ app/               # Next.js App Router
      ├─ public/
      ├─ package.json
      ├─ next.config.ts
      └─ README.md (this file)
```

## Getting Started

### Prerequisites

- Frontend: Node.js 18+ and pnpm/npm/yarn.
- Rust utilities: Stable Rust toolchain (e.g., via rustup).

### Frontend (Next.js)

1. Install dependencies:
   - npm: `npm install`
   - pnpm: `pnpm install`
   - yarn: `yarn`

2. Run the development server:
   - `npm run dev`

   By default, Next.js serves at `http://localhost:3000`.

3. Build for production:
   - `npm run build`

4. Start the production server:
   - `npm start`

Available scripts (`frontend/private-btc-prediction/package.json`):

```
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

### Rust Bitcoin Utilities

Navigate to `bitcoin-rust/` and run examples:

- P2WPKH transaction example (`src/main.rs`):
  - `cargo run`
  - This constructs and signs a P2WPKH transaction using a dummy UTXO and prints the signed transaction.

- PSBT SegWit example (`src/psbt_segwit.rs`, function `pbst()`):
  - Wire this function into `main.rs` by invoking it (uncomment the call) or add a dedicated binary target.
  - Shows the full PSBT lifecycle (creator, updater, signer, finalizer) and prints the raw transaction hex.

- Taproot/PSBT Taproot modules:
  - Extend `psbt_taproot.rs` or `taproot.rs` (if present) to experiment with Taproot flows.

Key dependencies (`bitcoin-rust/Cargo.toml`):

```
[dependencies]
bitcoin = { version = "0.32", features = ["rand-std", "std"] }
secp256k1 = { version = "0.29", features = ["rand"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
base64 = "0.22"
rand = "0.8"
tokio = { version = "1.0", features = ["full"] }
reqwest = { version = "0.12", features = ["json"] }
miniscript = "12.3.5"
```

## Development Notes

**NOTE: This project is in development and is not ready for production use. Some parts might be incomplete or not working as expected.**

- The frontend is set up for the Next.js App Router (`frontend/private-btc-prediction/app/`). You can add pages, server components, or route handlers as needed.
- Tailwind CSS 4 is available. Ensure the Tailwind setup (e.g., content scanning) aligns with your component locations.
- `gsap` and `ogl` are installed if you want animation and lightweight WebGL effects.
- The Rust examples currently use dummy UTXOs and hardcoded addresses for demonstration. Replace with wallet- or node-provided data for real usage.

## Security & Privacy

- The ASK state tracking approach is intended to keep sensitive inputs local and minimize data leakage.
- If you add any network calls from the frontend, audit them to ensure no sensitive state or prompts are sent to third-party services.
- For Rust utilities, do not broadcast test transactions on mainnet unless you fully understand the implications. Use testnet/regtest where appropriate.

## License

MIT

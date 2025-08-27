use bitcoin::{Network, Address, XOnlyPublicKey};
// use miniscrip::descriptor::Descriptor;
// use miniscript::{policy, ToPublicKey};
// use secp256k1::{Secp256k1, KeyPair, rand::rngs::OsRng};
use secp256k1::{Secp256k1, Keypair};
use rand::rngs::OsRng;


fn main() {
    let secp = Secp256k1::new();
    let mut rng = OsRng;

    // Generate internal, Alice, Bob keys
    let internal_kp = Keypair::new(&secp, &mut rng);
    let alice_kp = Keypair::new(&secp, &mut rng);
    let bob_kp = Keypair::new(&secp, &mut rng);

    let internal_pk = XOnlyPublicKey::from_keypair(&internal_kp).0;
    let alice_pk = XOnlyPublicKey::from_keypair(&alice_kp).0;
    let bob_pk = XOnlyPublicKey::from_keypair(&bob_kp).0;

    println!("Internal PK: {}", internal_pk);
    println!("Alice PK: {}", alice_pk);
    println!("Bob PK: {}", bob_pk);
}

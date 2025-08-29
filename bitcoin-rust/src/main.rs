use bitcoin::{Network, Address, XOnlyPublicKey};
// use miniscrip::descriptor::Descriptor;
// use miniscript::{policy, ToPublicKey};
// use secp256k1::{Secp256k1, KeyPair, rand::rngs::OsRng};
use secp256k1::{Secp256k1, Keypair};
use rand::rngs::OsRng;
use std::str::FromStr;

use miniscript;


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

    let desc = miniscript::Descriptor::<miniscript::bitcoin::PublicKey>::from_str("\
        sh(wsh(or_d(\
        c:pk_k(020e0338c96a8870479f2396c373cc7696ba124e8635d41b0ea581112b67817261),\
        c:pk_k(0250863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352)\
        )))\
    ").unwrap();

    println!("Descriptor: {}", desc);

    // Derive the P2SH address
    assert_eq!(desc.address(miniscript::bitcoin::Network::Bitcoin).unwrap().to_string(), "3CJxbQBfWAe1ZkKiGQNEYrioV73ZwvBWns");

    assert!(desc.sanity_check().is_ok());
    // assert_eq!(desc.max_weight_to_satisfy().unwrap().to_wu(), 288);
    println!("Max weight to satisfy: {}", desc.max_weight_to_satisfy().unwrap().to_wu());

}

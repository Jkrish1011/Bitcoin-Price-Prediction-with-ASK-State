async function main() {
    // Example usage
    const BLOCKSTREAM_API = 'https://blockstream.info/testnet/api';

    // Get address info
    const response = await fetch(`${BLOCKSTREAM_API}/address/tb1q2hw2r8q4cfcp2nwujh3rpe6mc8upgpejucexp2`);
    const addressInfo = await response.json();
    console.log(addressInfo)

    // Get UTXOs
    const utxos = await fetch(`${BLOCKSTREAM_API}/address/tb1q2hw2r8q4cfcp2nwujh3rpe6mc8upgpejucexp2/utxo`);
    const utxosInfo = await utxos.json();
    console.log(utxosInfo)

    // Broadcast transaction
    // const broadcast = await fetch(`${BLOCKSTREAM_API}/tx`, {
    // method: 'POST',
    // body: rawTransactionHex
    // });    
}

main();


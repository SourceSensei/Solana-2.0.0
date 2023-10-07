import { Base58EncodedAddress, createDefaultRpcTransport, createSolanaRpc } from "@solana/web3.js";


async function main() {

    const devnetTransport = createDefaultRpcTransport({
      url: "https://api.devnet.solana.com",
    });

    const devnetRpc = createSolanaRpc({ transport: devnetTransport });
    
    const systemProgramAddress =
      "11111111111111111111111111111111" as Base58EncodedAddress;
    const balanceInLamports = await devnetRpc
      .getBalance(systemProgramAddress)
      .send();
    console.log(
      "Balance of System Program account in Lamports",
      balanceInLamports
    );

}


//
import { assertIsBase58EncodedAddress } from '@solana/web3.js`;

// Imagine a function that fetches an account's balance when a user submits a form.
function handleSubmit() {
    // We know only that what the user typed conforms to the `string` type.
    const address: string = accountAddressInput.value;
    try {
        // If this type assertion function doesn't throw, then
        // Typescript will upcast `address` to `Base58EncodedAddress`.
        assertIsBase58EncodedAddress(address);
        // At this point, `address` is a `Base58EncodedAddress` that can be used with the RPC.
        const balanceInLamports = await rpc.getBalance(address).send();
    } catch (e) {
        // `address` turned out not to be a base58-encoded address
    }
}
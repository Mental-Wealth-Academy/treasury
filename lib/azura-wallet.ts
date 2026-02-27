/**
 * Azura Wallet — Stub for standalone treasury deployment
 * Full implementation lives in the platform repo.
 */

class AzuraWalletManager {
  private static instance: AzuraWalletManager;

  static getInstance(): AzuraWalletManager {
    if (!AzuraWalletManager.instance) {
      AzuraWalletManager.instance = new AzuraWalletManager();
    }
    return AzuraWalletManager.instance;
  }

  async getAddress(): Promise<string> {
    return process.env.AZURA_WALLET_ADDRESS || '0x0000000000000000000000000000000000000000';
  }

  async getWalletAddress(): Promise<string> {
    return this.getAddress();
  }

  async sendUSDC(to: string, amount: string): Promise<{ txHash: string }> {
    throw new Error('Wallet operations require full platform deployment');
  }

  async transfer(to: string, amount: string, asset: string): Promise<{ txHash: string }> {
    throw new Error('Wallet operations require full platform deployment');
  }

  async distributeUSDC(recipients: { address: string; amount: string }[]): Promise<{ txHashes: string[]; failed: string[] }> {
    throw new Error('Wallet operations require full platform deployment');
  }
}

export const azuraWallet = AzuraWalletManager.getInstance();

using System.Collections.Generic;
using System.Threading.Tasks;
using ChainSafe.GamingSDK.EVM.Web3.Core.Evm;
using Nethereum.ABI.EIP712;
using Nethereum.Hex.HexConvertors.Extensions;

namespace Web3Unity.Scripts.Library.Ethers.Signers
{
    public interface ISigner
    {
        Task<string> GetAddress();

        Task<string> SignMessage(string message);

        Task<string> SignTypedData<TStructType>(SerializableDomain domain, Dictionary<string, MemberDescription[]> types, TStructType message);

        // TODO: is this the right thing to do?
        // Task<string> SignMessage(byte[] message) => SignMessage(message.ToHex());
        // This needs to be refactored byte[] should be default data type and message
        // string should be adopted to the byte[]
    }
}
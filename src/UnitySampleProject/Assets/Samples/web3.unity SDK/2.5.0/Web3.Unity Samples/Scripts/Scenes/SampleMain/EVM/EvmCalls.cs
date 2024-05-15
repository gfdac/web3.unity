using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using ChainSafe.Gaming.Evm.Contracts.Extensions;
using ChainSafe.Gaming.MultiCall;
using ChainSafe.Gaming.UnityPackage;
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.BlockchainProcessing.BlockStorage.Entities;
using Nethereum.Contracts.QueryHandlers.MultiCall;
using Nethereum.Hex.HexConvertors.Extensions;
using Nethereum.Hex.HexTypes;
using Nethereum.RPC.Eth.DTOs;
using Nethereum.Util;
using Nethereum.Web3;
using Newtonsoft.Json;
using Scripts.EVM.Token;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;
using TransactionReceipt = ChainSafe.Gaming.Evm.Transactions.TransactionReceipt;

public class EvmCalls : MonoBehaviour
{
    #region Fields

    #region IPFS

    private string apiKey = "YOUR_CHAINSAFE_STORE_API_KEY";
    private string data = "YOUR_DATA";
    private string bucketId = "BUCKET_ID";
    private string path = "/PATH";
    private string filename = "FILENAME.EXT";

    #endregion

    #region Contract Send

    private string methodJoinGame = "joinGame";
    private string methodClaimBingo = "claimBingo";
    private string methodGetCurrentGameId = "getCurrentGameId";
    private string methodGetAlreadyJoinedId = "getAlreadyJoined";
    private string methodGetPricePerCard = "getPricePerCard";
    private string methodGetPlayersCount = "getPlayersCount";
    private string methodGetPlayerNumbers = "getPlayerNumbers";
    
    
    private int[] numbersToBingo = new int[]
    {
        1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 31, 32, 33, 34, 35, 46, 47, 48, 49, 50, 69, 70, 71, 72
    };


    #endregion

    #region Contract Call

    private string methodCall = "getPricePerCard";

    #endregion

    #region Get Send Array

    private string methodArrayGet = "getStore";
    private string methodArraySend = "setStore";
    private string[] stringArraySend =
    {
        "0xFb3aECf08940785D4fB3Ad87cDC6e1Ceb20e9aac",
        "0x92d4040e4f3591e60644aaa483821d1bd87001e3"
    };

    #endregion

    #region Sign Verify Sha3

    private string messageSign = "The right man in the wrong place can make all the difference in the world.";
    private string messageSignVerify = "A man chooses, a slave obeys.";
    private string messageSha = "It’s dangerous to go alone, take this!";

    #endregion

    #region Send Transaction

    private string toAddress = "0xdD4c825203f97984e7867F11eeCc813A036089D1";

    #endregion

    #region Registered Contract

    private string registeredContractName = "CsTestErc20";

    #endregion

    #region ECDSA

    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string ecdsaMessage = "This is a test message";
    private string transactionHash = "0x123456789";
    private string chainId = "11155111";

    #endregion

    #region Multi Call

    private string Erc20Account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";

    #endregion

    #region EventData

    /// <summary>
    /// Class for the event data that we're calling, this must match the solidity event i.e. event AmountIncreased(address indexed wallet, uint256 amount);
    /// </summary>
    [Event("AmountIncreased")]
    private class AmountIncreasedEvent : IEventDTO
    {
        [Parameter("address", "wallet", 1, true)]
        public string wallet { get; set; }

        [Parameter("uint256", "amount", 2, false)]
        public BigInteger amount { get; set; }
    }

    private string eventContract = "0x9832B82746a4316E9E3A5e6c7ea02451bdAC4546";

    #endregion

    #endregion

    /// <summary>
    /// Calls values from a contract
    /// </summary>
    public async void ContractCall(string methodToCall, object[] args)
    {
        Debug.Log("Contract Call called");

        // object[] args =
        // {
        //     // await Web3Accessor.Web3.Signer.GetAddress()
        // };
       
        // var abi = "%YOUR_ABI_IN_JSON_FORMAT%";
        // var address = "0x1d6f31b71e12a1a584ca20853495161c48ba491f";
        // var contract = web3.ContractBuilder.Build(abi, address);
        
        
        var response =
            await Evm.ContractCall(Web3Accessor.Web3, methodToCall, ABI.BingoABI, Contracts.BingoContract, args);
        Debug.Log(response);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), methodToCall);
    }

    public async void TESTAR()
    {
        GetAlreadyJoined();
        
        GetPricePerCard();
        
        GetPlayersCount();
        
        GetPlayerNumbers();
        
        GetLastFiveDrawnNumbers();
        
        GetGameState();
        
        GetCurrentGameId();
        
        Games();
    }
    
    // Get true when the player already joined the Current Bingo
    public async void GetAlreadyJoined()
    {
        object[] args = {};
        ContractCall(methodGetAlreadyJoinedId, args);
    }
    // Get the Price per Card for play the Current Bing
    public async void GetPricePerCard()
    {
        object[] args = {};
        ContractCall(methodGetPricePerCard, args);
    }
    
    // Get the Numbers of Players of Current Bingo
    public async void GetPlayersCount()
    {
        object[] args = {};
        ContractCall(methodGetPlayersCount, args);
    }
    
    // Get The numbers of the Card Player of Current Bingo
    public async void GetPlayerNumbers()
    {
        object[] args = {};
        ContractCall(methodGetPlayerNumbers, args);
    }
    
    // Get the last five drawn numbers
    public async void GetLastFiveDrawnNumbers()
    {
        object[] args = {};
        ContractCall("getLastFiveDrawnNumbers", args);
    }
    
    // Get the Current Bingo actualGame State
    public async void GetGameState()
    {
        object[] args = {};
        ContractCall("getGameState", args);
    }
    
    // Get the Current Bingo GameId 
    public async void GetCurrentGameId()
    {
        object[] args = {};
        ContractCall("getCurrentGameId", args);
    }
    
    // Get the game from gameId of the 'Games' mappings
    public async void Games()
    {
        object[] argsGetCurrentGameId = { };

        var gameId =
            await Evm.ContractCall(Web3Accessor.Web3, methodGetCurrentGameId, ABI.BingoABI, Contracts.BingoContract, argsGetCurrentGameId);
        Debug.Log(gameId);
        var output = SampleOutputUtil.BuildOutputValue(gameId);
        SampleOutputUtil.PrintResult(output, nameof(Evm), methodGetCurrentGameId);
        
        object[] args = {gameId};
        ContractCall("games", args);
    }
    
    /// <summary>
    ///  Joing the Bingo Game And send The Amount to enter the game "0.01"
    /// </summary>
    public async void JoinGame()
    {
        object[] args =
        {
            numbersToBingo
        };
        
        // Valor em Ether
        decimal valorEmEther = 0.01m;
        // Convertendo o valor para Wei
        BigInteger valorEmWei = UnitConversion.Convert.ToWei(valorEmEther, UnitConversion.EthUnit.Ether);
        // Criando a variável HexBigInteger
        HexBigInteger valorHexBigInteger = new HexBigInteger(valorEmWei);

        var response = await Evm.ContractSend(Web3Accessor.Web3, methodJoinGame, ABI.BingoABI, Contracts.BingoContract, args, valorHexBigInteger);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), methodJoinGame);
    }
    
    /// <summary>
    /// Claim for winner 
    /// </summary>
    public async void GetClaim()
    {
        object[] args =
        {
        };
        
        var response = await Evm.ContractSend(Web3Accessor.Web3, methodClaimBingo, ABI.BingoABI, Contracts.BingoContract, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), methodClaimBingo);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    /// <summary>
    /// Gets array values from a contract
    /// </summary>
    public async void GetArray()
    {
        var response = await Evm.GetArray<string>(Web3Accessor.Web3, Contracts.BingoContract, ABI.BingoABI, methodArrayGet);
        var responseString = string.Join(",\n", response.Select((list, i) => $"#{i} {string.Join((string)", ", (IEnumerable<string>)list)}"));
        SampleOutputUtil.PrintResult(responseString, nameof(Evm), nameof(Evm.GetArray));
    }

    /// <summary>
    /// Sends array values to a contract
    /// </summary>
    public async void SendArray()
    {
        var response = await Evm.SendArray(Web3Accessor.Web3, methodArraySend, ABI.BingoABI, Contracts.BingoContract, stringArraySend);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.SendArray));
    }


    /// <summary>
    /// Gets the gas limit for a specific function
    /// </summary>
    public async void GetGasLimit()
    {
        object[] args =
        {
            numbersToBingo
        };
        var gasLimit = await Evm.GetGasLimit(Web3Accessor.Web3, ABI.BingoABI, Contracts.BingoContract, methodJoinGame, args);
        SampleOutputUtil.PrintResult(gasLimit.ToString(), nameof(Evm), nameof(Evm.GetGasLimit));
    }

    /// <summary>
    /// Gets the current gas price
    /// </summary>
    public async void GetGasPrice()
    {
        var gasPrice = await Evm.GetGasPrice(Web3Accessor.Web3);
        SampleOutputUtil.PrintResult(gasPrice.ToString(), nameof(Evm), nameof(Evm.GetGasPrice));
    }

    /// <summary>
    /// Gets an accounts nonce
    /// </summary>
    public async void GetNonce()
    {
        var nonce = await Evm.GetNonce(Web3Accessor.Web3);
        SampleOutputUtil.PrintResult(nonce.ToString(), nameof(Evm), nameof(Evm.GetNonce));
    }

    /// <summary>
    /// Gets a specific transaction's status
    /// </summary>
    public async void GetTransactionStatus()
    {
        var receipt = await Evm.GetTransactionStatus(Web3Accessor.Web3);
        var output = $"Confirmations: {receipt.Confirmations}," +
                     $" Block Number: {receipt.BlockNumber}," +
                     $" Status {receipt.Status}";

        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.GetTransactionStatus));
    }

    /// <summary>
    /// Uses a registered contract
    /// </summary>
    public async void RegisteredContract()
    {
        var balance = await Evm.UseRegisteredContract(Web3Accessor.Web3, registeredContractName, EthMethod.BalanceOf);
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(Evm), nameof(Evm.UseRegisteredContract));
    }

    /// <summary>
    /// Sends a transaction
    /// </summary>
    public async void SendTransaction()
    {
        var transactionHash = await Evm.SendTransaction(Web3Accessor.Web3, toAddress);
        SampleOutputUtil.PrintResult(transactionHash, nameof(Evm), nameof(Evm.SendTransaction));
    }

    /// <summary>
    /// Encrypts a message with SHA3
    /// </summary>
    public void Sha3()
    {
        var hash = Evm.Sha3(messageSha);
        SampleOutputUtil.PrintResult(hash, nameof(Evm), nameof(Evm.Sha3));
    }

    /// <summary>
    /// Signs a message, the result is specific to each user
    /// </summary>
    public async void SignMessage()
    {
        var signedMessage = await Evm.SignMessage(Web3Accessor.Web3, messageSign);
        SampleOutputUtil.PrintResult(signedMessage, nameof(Evm), nameof(Evm.SignMessage));
    }

    /// <summary>
    /// Signs a message and verify account ownership
    /// </summary>
    public async void SignVerify()
    {
        var signatureVerified = await Evm.SignVerify(Web3Accessor.Web3, messageSignVerify);
        var output = signatureVerified ? "Verified" : "Failed to verify";
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.SignVerify));
    }

    /// <summary>
    /// Gets events data from a transaction
    /// </summary>
    public async void EventTxData()
    {
        // Contract write
        var amount = 1;
        object[] args =
        {
            amount
        };
        var contract = Web3Accessor.Web3.ContractBuilder.Build(ABI.BingoABI, eventContract);
        var data = await contract.SendWithReceipt("addTotal", args);
        // Quick pause to deal with chain congestion
        await new WaitForSeconds(2);
        // Event data from receipt
        var logs = data.receipt.Logs.Select(jToken => JsonConvert.DeserializeObject<FilterLog>(jToken.ToString()));
        var eventAbi = EventExtensions.GetEventABI<AmountIncreasedEvent>();
        var eventLogs = logs
            .Select(log => eventAbi.DecodeEvent<AmountIncreasedEvent>(log))
            .Where(l => l != null);

        if (!eventLogs.Any())
        {
            Debug.Log("No event data");
        }
        else
        {
            Debug.Log("Event data found");
            foreach (var eventLog in eventLogs)
            {
                var eventData = eventLog.Event;
                Debug.Log($"Wallet from event data: {eventData.wallet}");
                Debug.Log($"Amount from event data: {eventData.amount}");
            }
        }
    }

    /// <summary>
    /// Signs a transaction via ECDSA
    /// </summary>
    public void EcdsaSignTransaction()
    {
        var result = Evm.EcdsaSignTransaction(ecdsaKey, transactionHash, chainId);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaSignTransaction));
    }

    /// <summary>
    /// Signs a message via ECDSA
    /// </summary>
    public void EcdsaSignMessage()
    {
        var result = Evm.EcdsaSignMessage(ecdsaKey, ecdsaMessage);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaSignMessage));
    }

    /// <summary>
    /// Gets an addres via ECDSA key
    /// </summary>
    public void EcdsaGetAddress()
    {
        var result = Evm.EcdsaGetAddress(ecdsaKey);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaGetAddress));
    }

    /// <summary>
    /// Uploads to IPFS
    /// </summary>
    public async void IPFSUpload()
    {
        var cid = await Evm.Upload(new IpfsUploadRequest
        {
            ApiKey = apiKey,
            Data = data,
            BucketId = bucketId,
            Path = path,
            Filename = filename
        });
        SampleOutputUtil.PrintResult(cid, nameof(IpfsSample), nameof(IpfsSample.Upload));
    }

    /// <summary>
    /// Makes multiple calls
    /// </summary>
    public async void MultiCall()
    {
        var erc20Contract = Web3Accessor.Web3.ContractBuilder.Build(ABI.Erc20, Contracts.Erc20);
        var erc20BalanceOfCalldata = erc20Contract.Calldata(EthMethod.BalanceOf, new object[]
        {
            Erc20Account
        });

        var erc20TotalSupplyCalldata = erc20Contract.Calldata(EthMethod.TotalSupply, new object[]
        {
        });

        var calls = new[]
        {
            new Call3Value()
            {
                Target = Contracts.Erc20,
                AllowFailure = true,
                CallData = erc20BalanceOfCalldata.HexToByteArray(),
            },
            new Call3Value()
            {
                Target = Contracts.Erc20,
                AllowFailure = true,
                CallData = erc20TotalSupplyCalldata.HexToByteArray(),
            }
        };

        var multicallResultResponse = await Web3Accessor.Web3.MultiCall().MultiCallAsync(calls);

        Debug.Log(multicallResultResponse);

        if (multicallResultResponse[0] != null && multicallResultResponse[0].Success)
        {
            var decodedBalanceOf = erc20Contract.Decode(EthMethod.BalanceOf, multicallResultResponse[0].ReturnData.ToHex());
            Debug.Log($"decodedBalanceOf {((BigInteger)decodedBalanceOf[0]).ToString()}");
        }

        if (multicallResultResponse[1] != null && multicallResultResponse[1].Success)
        {
            var decodedTotalSupply = erc20Contract.Decode(EthMethod.TotalSupply, multicallResultResponse[1].ReturnData.ToHex());
            Debug.Log($"decodedTotalSupply {((BigInteger)decodedTotalSupply[0]).ToString()}");
        }
    }
}

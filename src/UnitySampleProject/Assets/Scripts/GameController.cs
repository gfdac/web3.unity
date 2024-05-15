using System;
using BrilliantBingo.Code.Infrastructure.Core;
using BrilliantBingo.Code.Infrastructure.Events.Args;
using BrilliantBingo.Code.Infrastructure.Layout;
using BrilliantBingo.Code.Infrastructure.Views;
using UnityEngine;



using System;
using System.Threading.Tasks;
using ChainSafe.Gaming.Evm.JsonRpc;
using ChainSafe.Gaming.UnityPackage;
using ChainSafe.Gaming.Web3.Build; // Importante para usar async/await
using ChainSafe.Gaming.Web3.Unity;
using Nethereum.Contracts;
using Scripts.EVM.Token;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;


using System;
using System.Numerics;
using System.Threading.Tasks;
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.Contracts;
using Nethereum.Hex.HexTypes;
using Nethereum.JsonRpc.Client;
using Nethereum.RPC.Eth.DTOs;
using Nethereum.Unity.Rpc;
using Nethereum.Web3;
using UnityEngine;
using UnityEngine.Networking;

using System;
using System.Threading.Tasks;
using Nethereum.Contracts;
using Nethereum.Hex.HexTypes;
using Nethereum.Web3;
using Nethereum.Web3.Accounts.Managed;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

using System;
using System.Threading.Tasks;
using Nethereum.Contracts;
using Nethereum.Hex.HexTypes;
using Nethereum.JsonRpc.Client;
using Nethereum.RPC.Eth.DTOs;
using Nethereum.Web3;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

namespace BrilliantBingo.Code.Scripts
{
    public class GameController : MonoBehaviour
    {
        #region Fields

        // private ChainSafe gamingSDK;
        // private Contract bingoContract;
        
        private Web3 web3;
        
        [SerializeField]
        private float _ballGenerationFrequency = 30f;

        [SerializeField]
        private ReadySteadyGoView _readySteadyGoView;

        #endregion

        #region Methods

        public void Awake()
        {
            _readySteadyGoView.Hide();
            _readySteadyGoView.Go += OnGo;

            CoreGameObjectsLocator.Default.CardsCollection.AllCardsFinishToPlay -= OnAllCardsFinishToPlay;
            CoreGameObjectsLocator.Default.CardsCollection.AllCardsFinishToPlay += OnAllCardsFinishToPlay;
        }

     
        
        
        public async void Start()
        {
            Invoke("ShowDialog", 1f);
            
            // Inicializar o Web3
            const string url = "https://bsc-dataseed1.binance.org"; // Ou outro nó BSC de sua preferência
            // web3 = new Web3(url, new UnityWebRequest()); // Correção na instanciação do Web3

            web3 = new Web3(url); // Corrigido para usar apenas a URL

            // Obter o contrato do Bingo
            var contract = web3.Eth.GetContract(ABI.BingoABI, Contracts.BingoContract);
            // var numberDrawnEvent = contract.GetEvent("NumberDrawn");




            
            // Obter o evento NumberDrawn 
            // var numberDrawnEvent = contract.GetEvent("NumberDrawn"); // Corrigido

            // Iniciar a corrotina para escutar os eventos
            // StartCoroutine(ListenForNumberDrawnEvents(numberDrawnEvent));
            
            
            
            // Iniciar a corrotina para escutar os eventos
            // Obter o evento NumberDrawn com o tipo correto
            var numberDrawnEvent = contract.GetEvent<NumberDrawnEventDTO>();  

            // Iniciar a corrotina para escutar os eventos
            // StartCoroutine(ListenForNumberDrawnEvents(numberDrawnEvent));  
        }



        private IEnumerator ListenForNumberDrawnEvents(Event<NumberDrawnEventDTO> numberDrawnEvent)
        {
            // Criar um filtro para o evento NumberDrawn (dentro da corrotina)
            var filter = new NewFilterInput
            {
                Address = new string[] { Contracts.BingoContract },
                FromBlock = BlockParameter.CreateLatest(),
                ToBlock = BlockParameter.CreateLatest()
            };

            //Armazenar o último filtro usado
            HexBigInteger filterId = new HexBigInteger(0);

            while (true)
            {
                // Obter os logs do evento (usando GetFilterChanges)
                var filterLogTask = numberDrawnEvent.CreateFilterAsync(filter);
                yield return new WaitUntil(() => filterLogTask.IsCompleted);

                // Verificar se o filterId é nulo
                if (filterLogTask.Result != null)
                {

                    filterId = filterLogTask.Result;

                    // Obter os logs do evento (corrigido para usar GetFilterChangesAsync sem o parâmetro de tipo)
                    var logsTask = numberDrawnEvent.GetFilterChangesAsync(filterId);
                    yield return new WaitUntil(() => logsTask.IsCompleted);
                    var logs = logsTask.Result;

                    // Iterar sobre os logs e processar os eventos
                    foreach (var log in logs)
                    {
                        Debug.Log($"Número sorteado no jogo {log.Event.GameId}: {log.Event.Number}");
                        // ... Lógica para atualizar a interface com o número sorteado
                    }

                    // Aguardar um intervalo de tempo antes de verificar novamente
                    yield return new WaitForSeconds(5); // 5 segundos, por exemplo

                    // Atualizar o filtro para o próximo bloco
                    filter.FromBlock = new BlockParameter(filterId);
                    filter.ToBlock = BlockParameter.CreateLatest();
                }
            }
        }
        
        
        
        
        // Definição do DTO para o evento NumberDrawn
        [Event("NumberDrawn")]
        public class NumberDrawnEventDTO : IEventDTO
        {
            [Parameter("uint256", "gameId", 1, true)]
            public BigInteger GameId { get; set; }

            [Parameter("uint8", "number", 2, false)]
            public byte Number { get; set; }
        }
        
        
        
        
        
        
        
        
        
        private void ShowDialog()
        {
            CoreGameObjectsLocator.Default.DialogManager.ShowSelectCardsCountDialog(OnCountOfCardsSelected);
        }

        private void OnCountOfCardsSelected(BingoCardsLayout layout)
        {
            CoreGameObjectsLocator.Default.CardsFactory.CreateAndLayout(layout);
            CoreGameObjectsLocator.Default.CardsCollection.DisableAllCards();
            _readySteadyGoView.Show();
        }

        private void OnAllCardsFinishToPlay(object sender, AllCardsFinishToPlayEventArgs e)
        {
            Debug.Log("Game is over. Count of win cards: " + e.WinCardsCount);
            CoreGameObjectsLocator.Default.BingoBallsSource.Stop();
        }

        private void OnGo(object sender, EventArgs e)
        {
            CoreGameObjectsLocator.Default.CardsCollection.EnableAllCards();
            CoreGameObjectsLocator.Default.BingoBallsSource.Begin(_ballGenerationFrequency);
        }

        #endregion
    }
}
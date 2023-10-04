using System;

namespace ChainSafe.Gaming.Exchangers
{
    public class OfframpAssetInfo
    {
        public OfframpAssetInfo(string address, string chain, int decimals, string name, string symbol, string type)
        {
            Address = address;
            Chain = chain;
            Decimals = decimals;
            Name = name;
            Symbol = symbol;
            Type = type;
        }

        public OfframpAssetInfo()
        {
        }

        public string Address { get; set; }
        public string Chain { get; set; }

        public int Decimals { get; set; }

        public string Name { get; set; }
        public string Symbol { get; set; }
        public string Type { get; set; }

        public override string ToString()
        {
            return
                $"{nameof(Address)}: {Address}, {nameof(Chain)}: {Chain}, {nameof(Decimals)}: {Decimals}, {nameof(Name)}: {Name}, {nameof(Symbol)}: {Symbol}, {nameof(Type)}: {Type}";
        }
    }

    public class OffRampSaleData
    {
        public string CreatedAt { get; set; }
        public CryptoOffRamp Crypto { get; set; }
        public FiatOffRamp Fiat { get; set; }
        public Guid Id { get; set; }

        public override string ToString()
        {
            return
                $"{nameof(CreatedAt)}: {CreatedAt}, {nameof(Crypto)}: {Crypto}, {nameof(Fiat)}: {Fiat}, {nameof(Id)}: {Id}";
        }

        public class CryptoOffRamp
        {
            public CryptoOffRamp(string amount, OfframpAssetInfo assetInfo)
            {
                Amount = amount;
                AssetInfo = assetInfo;
            }

            public CryptoOffRamp()
            {
            }

            public string Amount { get; set; }
            public OfframpAssetInfo AssetInfo { get; set; }

            public override string ToString()
            {
                return $"{nameof(Amount)}: {Amount}, {nameof(AssetInfo)}: {AssetInfo}";
            }
        }

        public class FiatOffRamp
        {
            public FiatOffRamp(double amount, string currencySymbol)
            {
                Amount = amount;
                CurrencySymbol = currencySymbol;
            }

            public FiatOffRamp()
            {
            }

            public double Amount { get; set; } // Using decimal for currency values in C#
            public string CurrencySymbol { get; set; }

            public override string ToString()
            {
                return $"{nameof(Amount)}: {Amount}, {nameof(CurrencySymbol)}: {CurrencySymbol}";
            }
        }
    }
}
using System;
using System.Collections.Generic;
using UnityEngine;

namespace Web3Unity.Scripts.Library.Ethers.Providers
{
    public abstract class Event
    {
        public bool Once;
        public string Tag;

        protected long _lastBlockNumber;
        protected bool _inflight;

        public Event(string tag, bool once)
        {
            Once = once;
            Tag = tag;

            _lastBlockNumber = -2;
            _inflight = false;
        }

        private List<string> PollableEvents = new()
        {
            "block",
            "network",
            "pending",
            "poll"
        };



        // public EventType Event()
        public string _Event()
        {
            return Type switch
            {
                "tx" => Hash,
                // "filter" => Filter,
                _ => Tag
            };
        }

        public string Type => Tag.Split(":")[0];

        public string Hash
        {
            get
            {
                var comps = Tag.Split(":");
                return comps[0] != "tx" ? null : comps[1];
            }
        }

        public virtual void Apply(object[] args)
        {
            throw new NotImplementedException();
        }

        public bool IsPollable => (Tag.IndexOf(":", StringComparison.Ordinal) >= 0 || PollableEvents.IndexOf(Tag) >= 0);
    }
    public class Event<T> : Event
    {
        public readonly Func<T, object> Listener;

        public Event(string tag, Func<T, object> listener, bool once) : base(tag, once)
        {
            Listener = listener;
        }

        public override void Apply(object[] args)
        {
            Listener((T)args[0]);
        }
    }

    public class Event<T1, T2> : Event
    {
        public readonly Func<T1, T2, object> Listener;

        public Event(string tag, Func<T1, T2, object> listener, bool once) : base(tag, once)
        {
            Listener = listener;
        }

        public override void Apply(object[] args)
        {
            Listener((T1)args[0], (T2)args[1]);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using Zeux.Test.Models;
using Zeux.Test.Server.Models;

namespace Zeux.Test.Repositories
{
    public class FakeContext:BaseFakeContext
    {
        public FakeContext()
        {
            RandomChangeNames();
        }

        private void RandomChangeNames()
        {
            var newNames = new[] { "apple", "banana", "orange" };

            // repeatable test 
            var rand = new Random(400);

            var lastIndex = Assets.Count() - 1;
            var processedElements = new HashSet<int>();
            foreach (var newName in newNames)
            {
                bool added;
                do
                {
                    var index = rand.Next(lastIndex);
                    added = processedElements.Add(index);
                    if (added) { Assets.ElementAt(index).Name = newName;}
                } while (!added);
            }
        }
    }
}

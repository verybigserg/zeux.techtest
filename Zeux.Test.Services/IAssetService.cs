﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Zeux.Test.Models;

namespace Zeux.Test.Services
{
    public interface IAssetService
    {
        Task<IEnumerable<Asset>> Get();
        Task<IEnumerable<Asset>> GetSortedByName();
        Task<IEnumerable<Asset>> Get(string type);
        Task<IEnumerable<Asset>> GetSortedByName(string type);
        Task<IEnumerable<AssetType>> GetTypes();
    }
}
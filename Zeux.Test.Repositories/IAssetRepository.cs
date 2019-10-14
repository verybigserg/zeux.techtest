﻿using System.Linq;
using System.Threading.Tasks;
using Zeux.Test.Models;

namespace Zeux.Test.Repositories
{
    public interface IAssetRepository
    {
        Task<IQueryable<Asset>> Get();
        Task<IQueryable<Asset>> GetSortedByName();
        Task<IQueryable<Asset>> Get(string type);
        Task<IQueryable<Asset>> GetSortedByName(string type);
        Task<IQueryable<AssetType>> GetTypes();
    }
}
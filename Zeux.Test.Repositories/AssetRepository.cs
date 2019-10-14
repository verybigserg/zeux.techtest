using System.Linq;
using System.Threading.Tasks;
using Zeux.Test.Models;

namespace Zeux.Test.Repositories
{
    public class AssetRepository: IAssetRepository
    {
        private readonly FakeContext _context = new FakeContext();

        public async Task<IQueryable<Asset>> Get()
        {
            return await Task.Run(() => _context.Assets);
        }

        public async Task<IQueryable<Asset>> GetSortedByName()
        {
            var list = await Get();
            return await Task.Run(() => list.OrderBy(item => item.Name).AsQueryable());
        }

        public async Task<IQueryable<Asset>> Get(string type)
        {
            return await Task.Run(() => _context.Assets.Where(row => row.Type.Name.ToLower() == type.ToLower()));
        }

        public async Task<IQueryable<Asset>> GetSortedByName(string type)
        {
            var list = await Get(type);
            return await Task.Run(() => list.OrderBy(item => item.Name));
        }

        public async Task<IQueryable<AssetType>> GetTypes()
        {
            return await Task.Run(() => _context.AssetTypes);
        }


    }
}

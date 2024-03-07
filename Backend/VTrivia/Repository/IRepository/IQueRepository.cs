using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IQueRepository
    {
        IEnumerable<Que> GetAll();
        Que Get(string id);

        
        Que Add(Que entity);
        void Remove(int id);

        Que Update(Que entity);
        void RemoveRange(IEnumerable<Que> entities);
    }
}

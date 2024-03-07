using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IGroupRepository
    {
        IEnumerable<Group> GetAll();
        Group Get(int id);

        //IEnumerable<Group> GetGroup(string id);
        Group Add(Group entity);
        void Remove(int id);

        Group Update(Group entity);
        void RemoveRange(IEnumerable<Group> entities);
    }
}

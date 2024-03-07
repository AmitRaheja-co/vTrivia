using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IUserJoinedRepository
    {
        IEnumerable<UserJoined> GetAll();
        UserJoined Get(string id);

        
        UserJoined Add(UserJoined entity);
        void Remove(int id);

        UserJoined Update(UserJoined entity);
        IEnumerable<UserJoined> GetMembers(int grpId);
        void RemoveRange(IEnumerable<UserJoined> entities);
    }
}

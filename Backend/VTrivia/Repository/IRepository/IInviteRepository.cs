using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IInviteRepository
    {
        IEnumerable<Invite> GetAll();
        Invite GetInvite(string id);

        
        Invite Add(Invite entity);
        void Remove(int id);

        Invite Update(Invite entity);
        void RemoveRange(IEnumerable<Invite> entities);
        IEnumerable<Invite> getQuestion(int id);
    }
}

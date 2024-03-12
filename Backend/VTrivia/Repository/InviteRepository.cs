using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class InviteRepository : IInviteRepository
    {
        private IDbConnection db;
        public InviteRepository(IConfiguration configuration) 
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public Invite Add(Invite entity)
        {
            var sql = "INSERT INTO invites (adminId,InvitedUserId,groupId) VALUES(@adminId,@InvitedUserId,@groupId);"
              + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;

        }

        public Invite Get(int id) 
        {
            var sql = "SELECT * FROM invites WHERE Id = @id";
            return db.Query<Invite>(sql, new { id }).Single();
        }

        public Invite GetInvite(string id)
        {
            var sql = "SELECT * FROM invites WHERE InvitedUserId = id";
            return db.Query<Invite>(sql, new { id }).Single();
        }

        public IEnumerable<Invite> GetAll()
        {
            var sql = "SELECT * FROM invites";
            return db.Query<Invite>(sql);
        }

        //public IEnumerable<Invite> getInvitestion(int id)
        //{
        //    var sql = "SELECT * FROM Invites WHERE quizId = @id";
        //    return db.Invitery<Invite>(sql, new { id }).ToList();
        //}

        public IEnumerable<Invite> getQuestion(int id)
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            var sql = "DELETE From invites WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<Invite> entities)
        {
            throw new NotImplementedException();
        }

        public Invite Update(Invite entity)
        {
            throw new NotImplementedException();
        }

    }
}

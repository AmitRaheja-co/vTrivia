using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class UserJoinedRepository : IUserJoinedRepository
    {
        private IDbConnection db;
        public UserJoinedRepository(IConfiguration configuration) 
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public UserJoined Add(UserJoined entity)
        {
            var sql = "INSERT INTO UserJoineds (UserId,GroupId) VALUES(@UserId,@GroupId);"
                         + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;

        }

        public UserJoined Get(int id)
        {
            var sql = "SELECT * FROM UserJoineds WHERE Id = @id";
            return db.Query<UserJoined>(sql, new { id }).Single();
        }

        public UserJoined Get(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserJoined> GetAll()
        {
            var sql = "SELECT * FROM UserJoineds";
            return db.Query<UserJoined>(sql);
        }

        public IEnumerable<UserJoined> GetMembers(int grpId)
        {
            var sql = "SELECT * FROM UserJoineds WHERE GroupId=@grpId";
            return db.Query<UserJoined>(sql, new { grpId }).ToList();
        }

        public void Remove(int id)
        {
            var sql = "DELETE From UserJoineds WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<UserJoined> entities)
        {
            throw new NotImplementedException();
        }

        public UserJoined Update(UserJoined entity)
        {
            throw new NotImplementedException();
        }

    }
}

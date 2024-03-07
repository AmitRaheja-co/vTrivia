using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class AppUserRepository : IAppUserRepository
    {
        private IDbConnection db;
        public AppUserRepository(IConfiguration configuration) 
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public AppUser Add(AppUser entity)
        {
            throw new NotImplementedException();
        }

        public AppUser Get(string id)
        {
            var sql = "SELECT * FROM AspNetUsers WHERE Id = @id";
            return db.Query<AppUser>(sql, new { id }).Single();
        }

        public IEnumerable<AppUser> GetAll()
        {
            var sql = "SELECT * FROM AspNetUsers";
            return db.Query<AppUser>(sql);
        }

        public IEnumerable<AppUser> GetAppUser(IEnumerable<string> userId)
        {
            var sql = @"
            SELECT * 
            FROM AppUsers 
            WHERE Id IN @userIds";
            return db.Query<AppUser>(sql).ToList();
        }

        public void Remove(int id)
        {
            var sql = "DELETE From AspNetUsers WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<AppUser> entities)
        {
            throw new NotImplementedException();
        }

        public AppUser Update(AppUser entity)
        {
            throw new NotImplementedException();
        }
    }
}

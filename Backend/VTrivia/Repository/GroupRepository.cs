using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using VTrivia.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class GroupRepository : IGroupRepository
    {
        private IDbConnection db;
        public GroupRepository(IConfiguration configuration)  
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public Group Add(Group entity)
        {
            var sql = "INSERT INTO Groups (Name,Description,AdminId,TimeStamp) VALUES(@Name,@Description,@AdminId,@TimeStamp);"
             + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;
        }

        public Group Get(int id)
        {
            var sql = "SELECT * FROM Groups WHERE Id = @id";
            return db.Query <Group>(sql, new { id }).Single();
        }

        public IEnumerable<Group> GetAll()
        {
            var sql = "SELECT * FROM Groups";
            return db.Query<Group>(sql);
        }

        public void Remove(int id)
        {
            var sql = "DELETE From Groups WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<Group> entities)
        {
            throw new NotImplementedException();
        }

        public Group Update(Group entity)
        {
            var sql = @"
        UPDATE Groups
        SET Name = @Name,
            Description = @Description,
            AdminId = @AdminId,
            TimeStamp = @TimeStamp,          
        WHERE Id = @Id";

            // Convert the options list to a comma-separated string
           // var optionsString = string.Join(",", entity.AppUsersID);

          db.Execute(sql, entity);  
            return entity;
        }

    }
}

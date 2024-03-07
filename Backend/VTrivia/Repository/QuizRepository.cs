using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class QuizRepository : IQuizRepository
    {
        private IDbConnection db;
        public QuizRepository(IConfiguration configuration)
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public Quiz Add(Quiz entity)
        {
            var sql = "INSERT INTO Quizs (groupId,startTimeStamp,timeWindow,quizDuration) VALUES(@groupId,@startTimeStamp,@timeWindow,@quizDuration);"
              + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;
        }

        public Quiz Get(int id)
        {
            var sql = "SELECT * FROM Quizs WHERE Id = @id";
            return db.Query<Quiz>(sql, new { id }).Single();
        }

        public IEnumerable<Quiz> GetAll()
        {
            var sql = "SELECT * FROM Quizs";
            return db.Query<Quiz>(sql);
        }

        public void Remove(int id)
        {
            var sql = "DELETE From Quizs WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<Quiz> entities)
        {
            throw new NotImplementedException();
        }

        public Quiz Update(Quiz entity)
        {
            throw new NotImplementedException();
        }
    }
}


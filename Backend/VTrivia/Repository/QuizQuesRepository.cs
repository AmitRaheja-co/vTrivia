using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class QuizQuesRepository : IQuizQuesRepository
    {
        private IDbConnection db;
        public QuizQuesRepository(IConfiguration configuration) 
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public QuizQues Add(QuizQues entity)
        {
            var sql = "INSERT INTO  QuizQues (QuizId,QueId) VALUES(@QuizId,@QueId);"
                          + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;

        }

        public QuizQues Get(int id)
        {
            var sql = "SELECT * FROM QuizQues WHERE Id = @id";
            return db.Query<QuizQues>(sql, new { id }).Single();
        }

        public QuizQues Get(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<QuizQues> GetAll()
        {
            var sql = "SELECT * FROM QuizQues";
            return db.Query<QuizQues>(sql);
        }

        public void Remove(int id)
        {
            var sql = "DELETE From QuizQues WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<QuizQues> entities)
        {
            throw new NotImplementedException();
        }

        public QuizQues Update(QuizQues entity)
        {
            throw new NotImplementedException();
        }

    }
}

using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Repository
{
    public class QueRepository : IQueRepository
    {
        private IDbConnection db;
        public QueRepository(IConfiguration configuration) 
        {
            this.db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public Que Add(Que entity)
        {
            var sql = "INSERT INTO Ques (Statement,option1,option2,option3,option4,answer,quizId) VALUES(@Statement,@option1,@option2,@option3,@option4,@answer,@quizId);"
              + "SELECT CAST(SCOPE_IDENTITY() as int);";
            var id = db.Query<int>(sql, entity).Single();
            entity.Id = id;
            return entity;

        }

        public Que Get(int id)
        {
            var sql = "SELECT * FROM Ques WHERE Id = @id";
            return db.Query<Que>(sql, new { id }).Single();
        }

        public Que Get(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Que> GetAll()
        {
            var sql = "SELECT * FROM Ques";
            return db.Query<Que>(sql);
        }

        public IEnumerable<Que> getQuestion(int id)
        {
            var sql = "SELECT * FROM Ques WHERE quizId = @id";
            return db.Query<Que>(sql, new { id }).ToList();
        }

        public void Remove(int id)
        {
            var sql = "DELETE From Ques WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void RemoveRange(IEnumerable<Que> entities)
        {
            throw new NotImplementedException();
        }

        public Que Update(Que entity)
        {
            throw new NotImplementedException();
        }

    }
}

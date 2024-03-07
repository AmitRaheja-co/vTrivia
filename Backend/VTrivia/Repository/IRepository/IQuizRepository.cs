using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IQuizRepository
    {
        IEnumerable<Quiz> GetAll();
        Quiz Get(int id);

        //IEnumerable<Quiz> GetQuiz(string id);
        Quiz Add(Quiz entity);
        void Remove(int id);

        Quiz Update(Quiz entity);
        void RemoveRange(IEnumerable<Quiz> entities);
    }
}
using Microsoft.Extensions.Hosting;
using VTrivia.Model;

namespace VTrivia.Repository.IRepository
{
    public interface IQuizQuesRepository
    {
        IEnumerable<QuizQues> GetAll();
        QuizQues Get(string id);

        
        QuizQues Add(QuizQues entity);
        void Remove(int id);

        QuizQues Update(QuizQues entity);
        void RemoveRange(IEnumerable<QuizQues> entities);

        
    }
}

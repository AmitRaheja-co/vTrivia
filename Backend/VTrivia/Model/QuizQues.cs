using System.ComponentModel.DataAnnotations;

namespace VTrivia.Model
{
    public class QuizQues
    {
        [Key]
        public int Id { get; set; }
        public int? QuizId { get; set; }
        public int? QueId { get; set; }
    }
}

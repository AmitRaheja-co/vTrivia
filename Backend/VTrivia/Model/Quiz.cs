using System.ComponentModel.DataAnnotations;

namespace VTrivia.Model
{
    public class Quiz
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int? groupId { get; set; }
        [Required]
        public DateTime startTimeStamp { get; set; }
        [Required]
        public int timeWindow {  get; set; }
        [Required]
        public int quizDuration { get; set; }

       
    }
}

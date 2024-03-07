using System.ComponentModel.DataAnnotations;

namespace VTrivia.Model
{
    public class Que
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Statement { get; set; }
        public string? option1 { get; set; }
        public string? option2 { get; set; }
        public string? option3 { get; set; }
        public string? option4 { get; set; }
        [Required]
        public string answer {  get; set; }
    }
}

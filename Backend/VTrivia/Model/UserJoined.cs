using System.ComponentModel.DataAnnotations;

namespace VTrivia.Model
{
    public class UserJoined
    {
        [Key]
        public int Id { get; set; }
        public string? UserId { get; set; }
        public int? GroupId { get; set; }
    }
}

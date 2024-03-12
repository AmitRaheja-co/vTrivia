using System.ComponentModel.DataAnnotations;

namespace VTrivia.Model
{
    public class Invite
    {
        [Key]
        public int Id { get; set; }
        public string adminId {  get; set; }
        public string InvitedUserId { get; set; }
        public int groupId { get; set; }
    }
}

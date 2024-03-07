using Microsoft.AspNetCore.Identity;

namespace VTrivia.Model
{
    public class AppUser : IdentityUser
    {
        public string? Name {  get; set; }
        public List<int>? groupId { get; set; }

        public AppUser() { 
            groupId = new List<int>();
        }
    }
}

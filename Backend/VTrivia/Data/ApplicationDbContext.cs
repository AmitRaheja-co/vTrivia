using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using VTrivia.Model;

namespace VTrivia.Data
{
    public class ApplicationDbContext:IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {

        }
        DbSet<Quiz> Quizs { get; set; }
        DbSet<AppUser> AppUsers {  get; set; }
        DbSet<Group> Groups { get; set; }
        DbSet<Que> Ques { get; set; }

        DbSet<Invite> invites { get; set; }
        DbSet<UserJoined> UserJoineds { get; set; }
        DbSet<QuizQues> QuizQues { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}

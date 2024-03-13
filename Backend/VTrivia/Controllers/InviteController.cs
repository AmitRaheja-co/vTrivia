using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InviteController : ControllerBase
    {
        private readonly IInviteRepository _inviteRepository;
        private readonly IAppUserRepository _appUserRepository;
        public InviteController(IInviteRepository inviteRepository,IAppUserRepository appUserRepository)
        {
            _inviteRepository = inviteRepository;
            _appUserRepository = appUserRepository;
        }
        [HttpPost]
        public IActionResult AddInvite(Invite invite)
        {
            _inviteRepository.Add(invite);
            return Ok();
        }
        [HttpGet]
        public IActionResult GetInvite(string id)
        {
            List<string> name = new List<string>();
            IEnumerable<Invite> invite = _inviteRepository.GetInvite(id);
            foreach(var item in invite)
            {
                AppUser user = _appUserRepository.Get(item.adminId);
                name.Add(user.UserName);
            }
            return Ok(new {invite,name});
        }
        [HttpDelete]
        public IActionResult DeleteInvite(int id)
        {
            _inviteRepository.Remove(id);
            return Ok("REMOVED");
        }
    }
}

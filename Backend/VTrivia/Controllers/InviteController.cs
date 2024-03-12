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
        public InviteController(IInviteRepository inviteRepository)
        {
            _inviteRepository = inviteRepository;
        }
        [HttpPost]
        public IActionResult AddInvite(Invite invite)
        {
            _inviteRepository.Add(invite);
            return Ok();
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text.RegularExpressions;
using VTrivia.Model;
using VTrivia.Repository.IRepository;
using Group = VTrivia.Model.Group;

namespace VTrivia.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GroupController : ControllerBase
    {
        private readonly IUserJoinedRepository _userJoinedRepository;
        private readonly IQuizQuesRepository _quizQuesRepository;
        private readonly IGroupRepository _groupRepository;
        private readonly IAppUserRepository _appUserRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public GroupController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor,IAppUserRepository appUserRepository, IUserJoinedRepository userJoinedRepository, IQuizQuesRepository quizQuesRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _appUserRepository = appUserRepository;
            _userJoinedRepository = userJoinedRepository;
            _quizQuesRepository = quizQuesRepository;
        }
        [HttpPost]
        //[Authorize]
        public IActionResult Create(Group group)
        {
            //var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            
            group.AdminId = "bda3c583-d865-4a43-bbd4-7fe3d6870a02";
            group.TimeStamp = DateTime.Now;
            _groupRepository.Add(group);
            return Ok(StatusCode(200));
        }
        [HttpGet]
        public IActionResult GetGroups() { 
            var all_groups = _groupRepository.GetAll();
            return Ok(new { all_groups});
        }

        [HttpPost("Join")]
        public IActionResult JoinGroup(int GrpId)
        {
            //var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            UserJoined userJoined = new UserJoined();
            userJoined.UserId = "bda3c583-d865-4a43-bbd4-7fe3d6870a02";
            userJoined.GroupId = GrpId;
            _userJoinedRepository.Add(userJoined);  
            return Ok();

        }
        [HttpGet("GetUser")]
        public IActionResult GetallUsers(int groupId)
        {
            List<AppUser> members = new List<AppUser>();
            
            foreach(var user in _userJoinedRepository.GetMembers(groupId).ToList())
            {

                members.Add(_appUserRepository.Get(user.UserId));
            }
            
            return Ok(members);
        }
    }
}

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
        private readonly IQuizRepository _quizRepository;
        public GroupController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor,IAppUserRepository appUserRepository, IUserJoinedRepository userJoinedRepository, IQuizQuesRepository quizQuesRepository,IQuizRepository quizRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _appUserRepository = appUserRepository;
            _userJoinedRepository = userJoinedRepository;
            _quizQuesRepository = quizQuesRepository;
            _quizRepository = quizRepository;
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
        [Authorize]
        public IActionResult GetGroups() {
            var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userName = _appUserRepository.Get(userId);
            IEnumerable<UserJoined> all_groups_mapping = _userJoinedRepository.GetAll();
            List<Group> groups_joined = new List<Group>();
            List<Group> public_groups = new List<Group>();
            foreach (var item in all_groups_mapping)
            {
                if (item.UserId==userId)
                {
                    Group curr = _groupRepository.Get((int)item.GroupId);
                    groups_joined.Add(curr);                    
                }
                else
                {
                    Group curr = _groupRepository.Get((int)item.GroupId);
                    public_groups.Add(curr);
                }
            }


            return Ok(new { userId,userName,groups_joined,public_groups});
        }
        [Authorize]
        [HttpPost("GetInfo")]
        public IActionResult getInfoOfAGroup(input grp)
        {
            int grpId = grp.grpId;
            var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            Group curr_group = _groupRepository.Get(grpId);
            List<AppUser> members = new List<AppUser>();
            List<AppUser> all = new List<AppUser>();
            all = _appUserRepository.GetAll().ToList();
            foreach (var user in _userJoinedRepository.GetMembers(grpId).ToList())
            {

                members.Add(_appUserRepository.Get(user.UserId));
            }
            List<Quiz> quizzz = new List<Quiz>();
            quizzz = _quizRepository.GetQuizGroup(grpId).ToList();
            return Ok(new {curr_group,members,userId,all});
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

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
        [Authorize]
        public IActionResult Create(Group group)
        {
            var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            UserJoined entity = new UserJoined();
            
            group.AdminId = userId;
            group.TimeStamp = DateTime.Now;
            _groupRepository.Add(group);
            entity.UserId = userId;
            entity.GroupId = group.Id;
            _userJoinedRepository.Add(entity);
            return Ok(group);
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
                Group curr = _groupRepository.Get((int)item.GroupId);
                if (item.UserId == userId)
                {
                    bool chk = false;
                    foreach(var j in groups_joined)
                    {
                        if (j == curr)
                        {
                            chk = true;
                        }
                    }
                    if (!chk)
                    {
                        groups_joined.Add(curr);
                    }
                }
            }
            foreach(var item in all_groups_mapping)
            {
                Group curr = _groupRepository.Get((int)item.GroupId);
                bool chk = false;
                foreach (var i in groups_joined)
                {
                    if (i.Id == curr.Id)
                    {
                        chk = true;
                    }
                }
                if (!chk)
                {
                    bool chk1 = false;
                    foreach (var j in public_groups)
                    {
                        if (j == curr)
                        {
                            chk1 = true;
                        }
                    }
                    if (!chk1)
                    {
                        public_groups.Add(curr);
                    }
                }
            }


            return Ok(new { userId,userName,groups_joined,public_groups});
            //return Ok("bhad me jao");
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
            //all = _appUserRepository.GetAll().ToList();
            Dictionary<string, int> dict = new Dictionary<string, int>();
            foreach (var user in _userJoinedRepository.GetMembers(grpId).ToList())
            {
                
                members.Add(_appUserRepository.Get(user.UserId));
                Console.WriteLine(user.UserId);
                dict[user.UserId] = 1;
            }
            Console.WriteLine("hi");
            foreach(var user in _appUserRepository.GetAll().ToList())
            {
                
                if (!dict.ContainsKey(user.Id))
                {
                    Console.WriteLine(user.Id);
                    all.Add(user);
                }
                else
                {
                    Console.WriteLine(user.Id);
                }
            }
            List<Quiz> quizs = new List<Quiz>();
            quizs = _quizRepository.GetQuizGroup(grpId).ToList();
            return Ok(new {curr_group,members,userId,all,quizs});
        }
        [HttpPost("Join")]
        [Authorize]
        public IActionResult JoinGroup(input grp)
        {
            int GrpId = grp.grpId;
            var userId = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            UserJoined userJoined = new UserJoined();
            userJoined.UserId = userId;
            userJoined.GroupId = GrpId;
            _userJoinedRepository.Add(userJoined);
            //Group grp = _groupRepository.Get(GrpId);
            //return Ok("DONE");
            //return RedirectToAction("getInfoOfAGroup",grp);
            return Ok(grp);
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

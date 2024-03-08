using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Controllers
{
    [Route("[controller]")]
    [ApiController]
    //[Authorize]
    public class QueController : ControllerBase
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IAppUserRepository _appUserRepository;
        private readonly IQueRepository _queRepository;

        private readonly IHttpContextAccessor _httpContextAccessor;
        public QueController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor, IAppUserRepository appUserRepository,IQueRepository queRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _queRepository = queRepository;
            _appUserRepository = appUserRepository;
        }
        [HttpPost]
        public IActionResult Create(Que que)
        {
            Console.WriteLine("HELLO");
            _queRepository.Add(que);
            return Ok(que);
        }
    }
}

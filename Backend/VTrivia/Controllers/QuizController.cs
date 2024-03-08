using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VTrivia.Model;
using VTrivia.Repository.IRepository;

namespace VTrivia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IAppUserRepository _appUserRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IQuizRepository _quizRepository;
        public QuizController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor, IAppUserRepository appUserRepository,IQuizRepository quizRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _appUserRepository = appUserRepository;
            _quizRepository = quizRepository;
        }
        [HttpPost]
        //[Authorize]
        public IActionResult Create(Quiz quiz)
        {
           // Console.WriteLine("DONE");
            _quizRepository.Add(quiz);
            return Ok(new {quiz});
        }
    }
}

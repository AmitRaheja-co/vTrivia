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
        private readonly IQuizQuesRepository _quizQuesRepository;

        private readonly IHttpContextAccessor _httpContextAccessor;
        public QueController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor, IAppUserRepository appUserRepository,IQueRepository queRepository, IQuizQuesRepository quizQuesRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _queRepository = queRepository;
            _appUserRepository = appUserRepository;
            _quizQuesRepository = quizQuesRepository;
        }
        [HttpPost]
        public IActionResult Create(Que que)
        {
            Console.WriteLine("HELLO");
            _queRepository.Add(que);
            QuizQues quizMap = new QuizQues();
            quizMap.QuizId = que.quizId;
            quizMap.QueId = que.Id;
            _quizQuesRepository.Add(quizMap);
            return Ok(que);
        }
    }
}

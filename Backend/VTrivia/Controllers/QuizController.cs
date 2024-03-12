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
        private readonly IQuizQuesRepository _quizQuesRepository;
        private readonly IQueRepository _queRepository;
        public QuizController(IGroupRepository groupRepository, IHttpContextAccessor httpContextAccessor, IAppUserRepository appUserRepository,IQuizRepository quizRepository, IQuizQuesRepository quizQuesRepository,IQueRepository queRepository)
        {
            _groupRepository = groupRepository;
            _httpContextAccessor = httpContextAccessor;
            _appUserRepository = appUserRepository;
            _quizRepository = quizRepository;
            _quizQuesRepository = quizQuesRepository;
            _queRepository = queRepository;
        }
        [HttpPost]
        //[Authorize]
        public IActionResult Create(Quiz quiz)
        {
           // Console.WriteLine("DONE");
            _quizRepository.Add(quiz);
            return Ok(new {quiz});
        }
        [HttpPost("GetQues")]

        public IActionResult GetQuesFromQuizId(input grp)
        {
            var quizId = grp.grpId;
            List<Que> allQuizQues = new List<Que>();
            allQuizQues= _queRepository.getQuestion(quizId).ToList();
            return Ok(allQuizQues);
        }
        [HttpGet]
        public IActionResult GetQuiz(int id)
        {


            Quiz ret = _quizRepository.Get(id);
            return Ok(ret);
        }
    }
}

using AngularTourOfHerosTutorial.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularTourOfHerosTutorial.Controllers
{
    [RoutePrefix("api/heroes")]
    public class HeroesController : ApiController
    {
        private static List<HeroModel> _listOfHeroes = new List<HeroModel>
            {
                new HeroModel { ID = 0,  Name = "Zero the Hero"},
                new HeroModel { ID = 11, Name = "Particle Man" },
                new HeroModel { ID = 12, Name = "Triangle Man" },
                new HeroModel { ID = 13, Name = "Universe Man" },
                new HeroModel { ID = 14, Name = "Smaller Man" },
                new HeroModel { ID = 15, Name = "Person Man" },
                new HeroModel { ID = 16, Name = "Degraded Man" },
                new HeroModel { ID = 17, Name = "Mega Man X" },
                new HeroModel { ID = 18, Name = "Sergant Cooper" },
                new HeroModel { ID = 19, Name = "2B" },
                new HeroModel { ID = 20, Name = "9S" }
            };

        // GET: api/heroes
        [Route("")]
        [HttpGet]
        public IEnumerable<HeroModel> Get()
        {
            return _listOfHeroes;
        }

        // GET: api/heroes/search?searchTerm={searchTerm}
        [Route("search")]
        [HttpGet]
        public IEnumerable<HeroModel> Get([FromUri]string searchTerm)
        {
            var matchingHeroes = _listOfHeroes.Where(h => h.Name.ToUpper().Contains(searchTerm)).ToList();
            return matchingHeroes;
        }

        // GET: api/heroes/{id}
        [Route("{id:int}")]
        [HttpGet]
        public HeroModel Get(int id)
        {
            var selectedHero = _listOfHeroes.Single(h => h.ID == id);
            return selectedHero;
        }

        // POST: api/heroes
        [Route("")]
        [HttpPost]
        public HeroModel Post([FromBody]string heroName)
        {
            var maxHeroId = _listOfHeroes.Max(h => h.ID);
            var newHero = new HeroModel
            {
                ID = maxHeroId + 1,
                Name = heroName
            };

            _listOfHeroes.Add(newHero);
            return newHero;
        }

        // GET: api/heroes/search
        [Route("search/{term}")]
        [HttpPost]
        public IEnumerable<HeroModel> Search(string term)
        {
            var matchingHeroes = _listOfHeroes.Where(h => h.Name.Contains(term)).ToList();
            return matchingHeroes;
        }

        // PUT: api/heroes/{id}
        [Route("{id}")]
        [HttpPut]
        public void Put(int id, [FromBody]HeroModel heroModel)
        {
            var heroToChange = _listOfHeroes.Single(h => h.ID == id);

            heroToChange.ID = heroModel.ID;
            heroToChange.Name = heroModel.Name;
        }

        // DELETE: api/heroes/{id}
        [Route("{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            _listOfHeroes = _listOfHeroes.Where(h => h.ID != id).ToList();
        }
    }
}
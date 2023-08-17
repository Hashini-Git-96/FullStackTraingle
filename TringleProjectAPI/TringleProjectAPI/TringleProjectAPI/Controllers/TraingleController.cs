using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TringleProjectAPI.Data;
using TringleProjectAPI.Models;

namespace TringleProjectAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TraingleController: Controller
    {

        private readonly TraingleDbContext _traingleDbContext;

       
        public TraingleController(TraingleDbContext _traingleDbContext)
        {
            this._traingleDbContext = _traingleDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTraingle()
        {
            var tranigle = await _traingleDbContext.traingles.ToListAsync();
            return Ok(tranigle);

        }

        [HttpPost]
        public async Task<IActionResult> AddTraingle([FromBody] Traingle addTraingleDetails)
        {

            addTraingleDetails.id = Guid.NewGuid();
            await _traingleDbContext.traingles.AddAsync(addTraingleDetails);
            await _traingleDbContext.SaveChangesAsync();
            return Ok(addTraingleDetails);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetTraingle([FromRoute] Guid id)
        {
            var traingle = await _traingleDbContext.traingles.FirstOrDefaultAsync(x => x.id == id);
            if (traingle == null)
            {
                return NotFound();
            }
            return Ok(traingle);

        }


        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateTraingle([FromRoute] Guid id, Traingle updateTraingleRequest)
        {

            var traingle = await _traingleDbContext.traingles.FindAsync(id);
               if (traingle == null)
            {
                return NotFound();
            }
            

            traingle.sideA = updateTraingleRequest.sideA;
            traingle.sideB = updateTraingleRequest.sideB;
            traingle.sideC = updateTraingleRequest.sideC;

            await _traingleDbContext.SaveChangesAsync();
            return Ok(traingle);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteTraingle([FromRoute] Guid id)
        {
            var traingle = await _traingleDbContext.traingles.FindAsync(id);

            if (traingle == null)
            {
                return NotFound();
            }
            _traingleDbContext.traingles.Remove(traingle);
            await _traingleDbContext.SaveChangesAsync();
            return Ok(traingle);

        }

    }
}

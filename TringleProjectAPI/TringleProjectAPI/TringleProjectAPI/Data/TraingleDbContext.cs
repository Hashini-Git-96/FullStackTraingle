using Microsoft.EntityFrameworkCore;
using TringleProjectAPI.Models;

namespace TringleProjectAPI.Data
{
    public class TraingleDbContext: DbContext
    {
        public TraingleDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Traingle> traingles { get; set; }
    }
}


using Microsoft.EntityFrameworkCore;
using airplaneapi.Models;


namespace airplaneapi.Context
{
    public class ApiBdContext : DbContext
    {

        public ApiBdContext(DbContextOptions<ApiBdContext> options) : base(options)
        { }

        public DbSet<Usuario> Usuarios { get; set; }

    }

}
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Models
{
    public class JobsDBContext: DbContext
    {
        public class EntertainmentDbContext : DbContext
        {
            protected override void OnConfiguring(DbContextOptionsBuilder options)
                => options.UseSqlite("Data Source=jobs.db");
            public DbSet<LandingPage> Pages { get; set; }
            public DbSet<DailyJobs> Jobs { get; set; }
 
        }
    }
}

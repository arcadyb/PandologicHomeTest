using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Models
{
    public class JobsDBContext : DbContext
    {
        public JobsDBContext(DbContextOptions options)
            :base(options)
        {

        }
        public JobsDBContext()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=data/jobs.db");
        public DbSet<LandingPage> Pages { get; set; }
        public DbSet<DailyJobs> Jobs { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<LandingPage>().HasData(new LandingPage[]
            {
            // movies
            new LandingPage { Id = 1, Name = "xyz", Url = "https://xyz.com/MainPage"},
            new LandingPage { Id = 2, Name = "yyy", Url = "https://yyy.com/MainPage"},
            });
            modelBuilder.Entity<DailyJobs>().HasData(new DailyJobs[]
             {
                        // movies
                        new DailyJobs { Id = 1,LandingPageId=1, ActiveJobs = 10, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
                        new DailyJobs { Id = 2,LandingPageId=1, ActiveJobs = 22, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
                        new DailyJobs { Id = 3,LandingPageId=1, ActiveJobs = 33, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
                        new DailyJobs { Id = 4,LandingPageId=1, ActiveJobs = 44, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
                        new DailyJobs { Id = 5,LandingPageId=1, ActiveJobs = 55, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
                        new DailyJobs { Id = 6,LandingPageId=1, ActiveJobs = 66, CumulativeViews = 99,CumulativeViewsPredicted  = 111},
             });

            base.OnModelCreating(modelBuilder);
        }
    }
}

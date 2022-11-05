using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Models
{

    public class JobsContextFactory : IDesignTimeDbContextFactory<JobsDBContext>
    {
        public JobsDBContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<JobsDBContext>();
            optionsBuilder.UseSqlite("Data Source=data\\jobs.db");

            return new JobsDBContext(optionsBuilder.Options);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PandologicReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Services
{
    
    public class DataAccessService : IDataAccessService
    {
        private readonly ILogger<DataAccessService> _logger;
        public DataAccessService(
            ILogger<DataAccessService> logger
        )
        {
            _logger = logger;
        }
        public async Task<List<DailyJobs>> GetPageGobs(int pageId)
        {
            try
            {
                using (var db = new JobsDBContext())
                {
                    var ret = await db.Jobs.Where(x => x.LandingPageId == pageId).OrderBy(x => x.Date).ToListAsync();
                    return ret;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
    }
}

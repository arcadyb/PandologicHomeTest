using System.Collections.Generic;

namespace PandologicReact.Models
{
    public class LandingPage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public List<DailyJobs> DailyJobs { get; set; } = new List<DailyJobs>();
    }
}
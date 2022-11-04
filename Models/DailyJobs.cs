using System;

namespace PandologicReact.Models
{
    public class DailyJobs
    {
        public int Id { get; set; }
        public int LandingPage { get; set; }
        public DateTime Date { get; set; }
        public int? ActiveJobs { get; set; }
        public int? CumulativeViews{ get; set; }
        public int? CumulativeViewsPredicted { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Models
{
    public class GChartDataTable
    {
        public List<List<string>> dataTable { set; get; }
        public GChartDataTable()
        {
            dataTable = new List<List<string>>();
            dataTable.Add(new List<string>() { "label1", "1", "2", "4" });
            dataTable.Add(new List<string>() { "label2", "2", "3", "5" });
            dataTable.Add(new List<string>() { "label4", "3", "4", "6" });
            dataTable.Add(new List<string>() { "label5", "4", "5", "7" });
        }
    }
}

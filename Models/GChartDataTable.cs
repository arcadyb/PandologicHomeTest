using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Models
{
    public class GChartDataTable
    {
        public List<List<string>> DataTable { set; get; }
        public GChartDataTable()
        {
            DataTable = new List<List<string>>();
            //DataTable.Add(new List<string>() { "label1", "1", "2", "4" });
            //DataTable.Add(new List<string>() { "label2", "2", "3", "5" });
            //DataTable.Add(new List<string>() { "label4", "3", "4", "6" });
            //DataTable.Add(new List<string>() { "label5", "4", "5", "7" });
        }
    }
}

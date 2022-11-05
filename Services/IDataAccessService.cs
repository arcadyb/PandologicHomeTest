﻿using PandologicReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandologicReact.Services
{
    public interface IDataAccessService
    {
        Task<List<DailyJobs>> GetPageGobs(int pageid);
    }
}

﻿using Fur.DatabaseAccessor.Contexts;
using Fur.DatabaseAccessor.Contexts.Locators;
using Microsoft.EntityFrameworkCore;

namespace Fur.EntityFramework.Core.DbContexts
{
    public class FurSqlServerDbContext : FurDbContextOfT<FurSqlServerDbContext, FurDbContextLocator>
    {
        public FurSqlServerDbContext(DbContextOptions<FurSqlServerDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
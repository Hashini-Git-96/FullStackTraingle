﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TringleProjectAPI.Data;

#nullable disable

namespace TringleProjectAPI.Migrations
{
    [DbContext(typeof(TraingleDbContext))]
    partial class TraingleDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TringleProjectAPI.Models.Traingle", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<double>("sideA")
                        .HasColumnType("float");

                    b.Property<double>("sideB")
                        .HasColumnType("float");

                    b.Property<double>("sideC")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("traingles");
                });
#pragma warning restore 612, 618
        }
    }
}

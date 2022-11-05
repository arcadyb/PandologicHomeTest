using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PandologicReact.Data
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Url = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    LandingPageId = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ActiveJobs = table.Column<int>(type: "INTEGER", nullable: true),
                    CumulativeViews = table.Column<int>(type: "INTEGER", nullable: true),
                    CumulativeViewsPredicted = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Jobs_Pages_LandingPageId",
                        column: x => x.LandingPageId,
                        principalTable: "Pages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Pages",
                columns: new[] { "Id", "Name", "Url" },
                values: new object[] { 1, "xyz", "https://xyz.com/MainPage" });

            migrationBuilder.InsertData(
                table: "Pages",
                columns: new[] { "Id", "Name", "Url" },
                values: new object[] { 2, "yyy", "https://yyy.com/MainPage" });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 1, 10, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 2, 22, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 3, 33, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 4, 44, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 5, 55, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "ActiveJobs", "CumulativeViews", "CumulativeViewsPredicted", "Date", "LandingPageId" },
                values: new object[] { 6, 66, 99, 111, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_LandingPageId",
                table: "Jobs",
                column: "LandingPageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "Pages");
        }
    }
}

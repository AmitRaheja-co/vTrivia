using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTrivia.Migrations
{
    /// <inheritdoc />
    public partial class Updateque : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "quizId",
                table: "Ques",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "quizId",
                table: "Ques");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTrivia.Migrations
{
    /// <inheritdoc />
    public partial class NewlyUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuesID",
                table: "Quizs");

            migrationBuilder.DropColumn(
                name: "AppUsersID",
                table: "Groups");

            migrationBuilder.RenameColumn(
                name: "options",
                table: "Ques",
                newName: "option4");

            migrationBuilder.RenameColumn(
                name: "TiemStamp",
                table: "Groups",
                newName: "TimeStamp");

            migrationBuilder.AddColumn<string>(
                name: "option1",
                table: "Ques",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "option2",
                table: "Ques",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "option3",
                table: "Ques",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "QuizQues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuizId = table.Column<int>(type: "int", nullable: true),
                    QueId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizQues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserJoineds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GroupId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserJoineds", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "QuizQues");

            migrationBuilder.DropTable(
                name: "UserJoineds");

            migrationBuilder.DropColumn(
                name: "option1",
                table: "Ques");

            migrationBuilder.DropColumn(
                name: "option2",
                table: "Ques");

            migrationBuilder.DropColumn(
                name: "option3",
                table: "Ques");

            migrationBuilder.RenameColumn(
                name: "option4",
                table: "Ques",
                newName: "options");

            migrationBuilder.RenameColumn(
                name: "TimeStamp",
                table: "Groups",
                newName: "TiemStamp");

            migrationBuilder.AddColumn<string>(
                name: "QuesID",
                table: "Quizs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUsersID",
                table: "Groups",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}

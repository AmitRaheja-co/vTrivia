using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTrivia.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ques_Quizs_QuizId",
                table: "Ques");

            migrationBuilder.DropTable(
                name: "AppUserGroup");

            migrationBuilder.DropIndex(
                name: "IX_Ques_QuizId",
                table: "Ques");

            migrationBuilder.DropColumn(
                name: "QuizId",
                table: "Ques");

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

            migrationBuilder.AddColumn<string>(
                name: "groupId",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuesID",
                table: "Quizs");

            migrationBuilder.DropColumn(
                name: "AppUsersID",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "groupId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "QuizId",
                table: "Ques",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppUserGroup",
                columns: table => new
                {
                    AppUsersId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    groupsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUserGroup", x => new { x.AppUsersId, x.groupsId });
                    table.ForeignKey(
                        name: "FK_AppUserGroup_AspNetUsers_AppUsersId",
                        column: x => x.AppUsersId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppUserGroup_Groups_groupsId",
                        column: x => x.groupsId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ques_QuizId",
                table: "Ques",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUserGroup_groupsId",
                table: "AppUserGroup",
                column: "groupsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ques_Quizs_QuizId",
                table: "Ques",
                column: "QuizId",
                principalTable: "Quizs",
                principalColumn: "Id");
        }
    }
}

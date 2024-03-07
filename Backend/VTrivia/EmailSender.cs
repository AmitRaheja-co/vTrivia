using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Identity;

namespace VTrivia
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            //var mail = "vTrivia0730@outlook.com";
            //var pw = "Dhruv@123";

            //var client = new SmtpClient("smtp-mail.outlook.com", 587)
            //{
            //    EnableSsl = true,
            //    Credentials = new NetworkCredential(mail, pw)
            //};

            //return client.SendMailAsync(
            //    new MailMessage(
            //        from: mail,
            //        to: email,
            //        subject,
            //        htmlMessage
            //        ));
             return Task.CompletedTask;
        }
    }
}

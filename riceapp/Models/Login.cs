using System.ComponentModel.DataAnnotations;

namespace riceapp.Models
{
    public class Login
    {
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

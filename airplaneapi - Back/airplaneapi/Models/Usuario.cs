using System.ComponentModel.DataAnnotations;

namespace airplaneapi.Models
{
    public class Usuario
    {

        public int UsuarioId { get; set; }

        [Required]
        [StringLength(80)]
        public string Login { get; set; }

        [Required]
        [StringLength(300)]
        public string Nome { get; set; }

        [Required]
        [StringLength(300)]
        public string Senha { get; set; }

    }
}

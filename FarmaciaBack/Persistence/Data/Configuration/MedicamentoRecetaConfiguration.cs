using Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistencia.Data.Configuration
{
    public class Configuration : IEntityTypeConfiguration<>
    {
        public void Configure(EntityTypeBuilder<> builder)
        {
            // Aquí puedes configurar las propiedades de la entidad Marca
            // utilizando el objeto 'builder'.
            builder.ToTable();

            builder.HasKey(e => );
            builder.Property(e => );
        }
    }
}
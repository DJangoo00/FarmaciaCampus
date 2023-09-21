using Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistencia.Data.Configuration
{
    public class MedicamentoCompradoConfiguration : IEntityTypeConfiguration<MedicamentoCompradoConfigurationMedicamentoComprado>
    {
        public void Configure(EntityTypeBuilder<MedicamentoComprado> builder)
        {
            // Aquí puedes configurar las propiedades de la entidad Marca
            // utilizando el objeto 'builder'.
            builder.ToTable("MedicamentoComprado");
        }
    }
}
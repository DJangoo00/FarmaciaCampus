using Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistencia.Data.Configuration
{
    public class MedicamentoConfiguration : IEntityTypeConfiguration<MedicamentoConfigurationMedicamento>
    {
        public void Configure(EntityTypeBuilder<Medicamento> builder)
        {
            // Aquí puedes configurar las propiedades de la entidad Marca
            // utilizando el objeto 'builder'.
            builder.ToTable("Medicamento");
        }
    }
}
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistencia.Data.Configuration
{
    public class RecetaConfiguration : IEntityTypeConfiguration<Receta>
    {
        public void Configure(EntityTypeBuilder<Receta> builder)
        {
            // Aquí puedes configurar las propiedades de la entidad Marca
            // utilizando el objeto 'builder'.
            builder.ToTable("Receta");

            builder.HasKey(e => e.Id);
            builder.Property(e => e.Id);

            builder.Property(e => e.FechaExpedicion)
            .HasColumnName("FechaExpedicion")
            .HasColumnType("date")
            .IsRequired();

            builder.Property(e => e.Descripcion)
            .HasColumnName("Descripcion")
            .HasColumnType("varchar")
            .HasMaxLength(100)
            .IsRequired();

            builder.HasOne(p => p.Persona)
            .WithMany(p => p.Recetas)
            .HasForeignKey(p => p.Paciente_Id);

            builder.HasOne(p => p.Persona)
            .WithMany(p => p.Recetas)
            .HasForeignKey(p => p.DoctorIdFk);

            builder.HasOne(p => p.MedicamentoReceta)
            .WithMany(p => p.Recetas)
            .HasForeignKey(p => p.MedicamentosRecetaIdFk);
        }
    }
}
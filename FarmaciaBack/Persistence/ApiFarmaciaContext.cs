using System.Reflection;
using Domain.Entities;
    using Microsoft.EntityFrameworkCore;

namespace Persistencia
{
    public class DbApiContext : DbContext
        {
            public DbApiContext(DbContextOptions<DbApiContext> options) : base(options)
            {}
            //Main
            
            public DbSet<TipoDocumento> TipoDocumentos { get; set; }
            public DbSet<Telefono> Telefonos { get; set; }
            public DbSet<TipoPersona> TipoPersonas { get; set; }
            public DbSet<Persona> Personas { get; set; }
            public DbSet<Compra> Compras { get; set; }
            public DbSet<Medicamento> Medicamentos { get; set; }
            public DbSet<Receta> Recetas { get; set; }
            public DbSet<MedicamentoComprado> MedicamentoComprados { get; set; }
            public DbSet<FacturaVenta> FacturaVentas { get; set; }
            public DbSet<MedicamentoReceta> MedicamentoRecetas { get; set; }
            public DbSet<MedicamentoVendido> MedicamentoVendidos { get; set; }
            public DbSet<TipoMedicamento> TipoMedicamentos { get; set; }
            
            //JWT
            public DbSet<User> Users { get; set; }
            public DbSet<Rol> Rols { get; set; }
            public DbSet<UserRol> UserRols { get; set; }
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
                modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            }
        }
}














using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

using var context = new AppDbContext();


Console.WriteLine("===== Products with Price > 1000 =====");

var filtered = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();

foreach (var product in filtered)
{
    Console.WriteLine($"{product.Name} - ₹{product.Price}");
}


Console.WriteLine("\n===== Product DTOs =====");

var productDTOs = await context.Products
    .Select(p => new
    {
        p.Name,
        p.Price
    })
    .ToListAsync();

foreach (var item in productDTOs)
{
    Console.WriteLine($"{item.Name} - ₹{item.Price}");
}
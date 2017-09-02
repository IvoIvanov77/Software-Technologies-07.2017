using System.Linq;
using System.Net;
using System.Web.Mvc;
using ShoppingList.Models;

namespace ShoppingList.Controllers
{
    [ValidateInput(false)]
    public class ProductController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new ShoppingListDbContext())
            {
                var products = db.Products.ToList();
                return View(products);
            }

        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Product product)
        {
            if (product == null || !ModelState.IsValid)
            {
                return View(product);
            }

            using (var db = new ShoppingListDbContext())
            {
                db.Products.Add(product);
                db.SaveChanges();
            }

            return RedirectToAction("Index");


        }

        [HttpGet]
        [Route("edit/{id}")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            using (var db = new ShoppingListDbContext())
            {
                Product product = db.Products.Where(p => p.Id == id).FirstOrDefault();
                if (product != null)
                {
                    return View(product);
                }
                return HttpNotFound();

            }

        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int? id, Product productModel)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            using (var db = new ShoppingListDbContext())
            {

                Product product = db.Products.Where(p => p.Id == id)
                    .First();

                if (product == null)
                {
                    return HttpNotFound();
                }

                if (!ModelState.IsValid)
                {
                    return View(productModel);
                }
                product.Name = productModel.Name;
                product.Priority = productModel.Priority;
                product.Quantity = productModel.Quantity;
                product.Status = productModel.Status;

                db.SaveChanges();

                return RedirectToAction("Index");
            }

        }
    }
}
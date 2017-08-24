using System.Linq;
using System.Net;
using System.Web.Mvc;
using IMDB.Models;

namespace IMDB.Controllers
{
    [ValidateInput(false)]
    public class FilmController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new IMDBDbContext())
            {
                var films = db.Films.ToList();
                return View(films);
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
        public ActionResult Create(Film film)
        {
            if (film == null || !ModelState.IsValid)
            {
                return View(film);
            }

            using (var db = new IMDBDbContext())
            {
                db.Films.Add(film);
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
            using (var db = new IMDBDbContext())
            {
                Film film = db.Films.Where(f => f.Id == id).FirstOrDefault();
                if (film != null)
                {
                    return View(film);
                }
                return HttpNotFound();

            }
        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int? id, Film filmModel)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            using (var db = new IMDBDbContext())
            {

                Film film = db.Films.Where(f => f.Id == id)
                    .First();

                if (film == null)
                {
                    return HttpNotFound();
                }

                if (!ModelState.IsValid)
                {
                    return View(filmModel);
                }
                film.Name = filmModel.Name;
                film.Genre = filmModel.Genre;
                film.Director = filmModel.Director;
                film.Year = filmModel.Year;

                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            using (var db = new IMDBDbContext())
            {
                Film film = db.Films.Where(f => f.Id == id).First();
                if (film != null)
                {
                    return View(film);
                }
                return HttpNotFound();
            }
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int? id, Film filmModel)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            using (var db = new IMDBDbContext())
            {

                Film film = db.Films.Where(f => f.Id == id)
                    .First();

                if (film == null)
                {
                    return HttpNotFound();
                }

                db.Films.Remove(film);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }
    }
}
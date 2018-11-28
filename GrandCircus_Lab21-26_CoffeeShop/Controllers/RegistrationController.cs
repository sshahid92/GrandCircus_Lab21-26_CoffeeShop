using GrandCircus_Lab21_26_CoffeeShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GrandCircus_Lab21_26_CoffeeShop.Controllers
{
    public class RegistrationController : Controller
    {
        // GET: Registration
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string firstname, string lastname, string email,
            string phoneNumber, string password)
        {
            var newUser = new User()
            {
                FirstName = firstname,
                LastName = lastname,
                Email = email,
                PhoneNumber = phoneNumber,
                Password = password

            };
            return RedirectToAction("RegistrationComplete", newUser);
        }

        public ActionResult RegistrationComplete(User newUser)
        {            
            return View(newUser);
        }
    }
}
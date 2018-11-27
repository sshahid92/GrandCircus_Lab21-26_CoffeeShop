using System.Web;
using System.Web.Mvc;

namespace GrandCircus_Lab21_26_CoffeeShop
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

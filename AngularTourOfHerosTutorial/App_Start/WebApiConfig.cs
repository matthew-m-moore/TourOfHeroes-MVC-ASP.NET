using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularTourOfHerosTutorial
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "1",
            //    routeTemplate: "api/{controller}/{term}/{action}",
            //    defaults: new { term = RouteParameter.Optional }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "2",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
        }
    }
}

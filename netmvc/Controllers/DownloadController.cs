using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using netmvc.Models;
using netmvc.Services;

namespace netmvc.Controllers
{
    public class DownloadController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IFileService fileService;

        public DownloadController(ILogger<HomeController> logger, IFileService fileService)
        {
            this.fileService = fileService;
            _logger = logger;
        }

        public IActionResult Index()
        {
            this.fileService.Download("Path");
            return Ok("Download Completed");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

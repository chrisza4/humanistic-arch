namespace netmvc.Services
{

    public interface IFileService
    {
        public void Download(string path);
    }

    public class S3FileService : IFileService
    {
        public void Download(string path)
        {
            System.Console.WriteLine("Download to S3");
        }
    }

    public class LocalFileService : IFileService
    {
        public void Download(string path)
        {
            System.Console.WriteLine("Download to Local");
        }
    }
}
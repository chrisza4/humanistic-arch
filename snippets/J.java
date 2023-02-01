class Downloader {
    public void DownloadContent(string path) {
        // Preparation
        FileService fileService;
        if (environment == "production") {
            fileService = new S3FileService();
        } else {
            fileService = new LocalDiskFileService();
        }
        fileService.Download(path);
        // Prepare response
    }
}

// ==========================================================

class Downloader {
    public void DownloadContent(string path) {
        // Preparation
        FileServiceFactory.Create().Download(path);
        // Prepare response
    }
}

class FileServiceFactory {
    public static FileService Create() {
        if (environment == "production") {
            return new S3FileService();
        } else {
            return new LocalDiskFileService();
        }
    }
}

interface ShitDoer {
    public void doIt();
}

class WeirdShitWhenMyComputerIsCrazyDoer implements ShitDoer {
    public void doIt() {
    }
}

class NormalShitDoer implements ShitDoer {
    public void doIt() {
    }
}

class ShitDoerChooser {
    public static ShitDoer GetShitDoer() {
        if (1 == 2) {
            return new WeirdShitWhenMyComputerIsCrazyDoer();
        } else {
            return new NormalShitDoer();
        }
    }
}

class ArbitaryLogic {
    public void doStuff() {
        ShitDoerChooser.GetShitDoer().doIt();
    }
}
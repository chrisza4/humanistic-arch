// Main project

namespace MyProgram
{
    class Main
    {
        public static void Main()
        {
            var m = Factory.CreateModule();
            m.DoSomething();

            // Continue
        }
    }
}

// Delegate Project

namespace MyProgram
{
    public class Factory
    {
        public static void CreateModule()
        {
            return OriginalModule;
        }
    }
}

// Module extended Vendor

namespace Plugins
{
    public class ExtendedModule : SuperVendor.SecretLibrary.Module
    {
        public override void DoSomething()
        {

        }
    }
}
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
public class Excersise
{
    private static string GetPercentageRounds(double percentage)
    {
        if (percentage == 0)
            return "⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪";
        if (percentage > 0.0 && percentage <= 0.1)
            return "🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪";
        if (percentage > 0.1 && percentage <= 0.2)
            return "🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪";
        if (percentage > 0.2 && percentage <= 0.3)
            return "🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪";
        if (percentage > 0.3 && percentage <= 0.4)
            return "🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪";
        if (percentage > 0.4 && percentage <= 0.5)
            return "🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪";
        if (percentage > 0.5 && percentage <= 0.6)
            return "🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪";
        if (percentage > 0.6 && percentage <= 0.7)
            return "🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪";
        if (percentage > 0.7 && percentage <= 0.8)
            return "🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪";
        if (percentage > 0.8 && percentage <= 0.9)
            return "🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪";

        return "🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵";
    }
}
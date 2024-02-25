def get_percentage_round(percentage):
    if percentage == 0:
        return "⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪"
    if percentage > 0.0 and percentage <= 0.1:
        return "🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪"
    if percentage > 0.1 and percentage <= 0.2:
        return "🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪"
    if percentage > 0.2 and percentage <= 0.3:
        return "🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪"
    if percentage > 0.3 and percentage <= 0.4:
        return "🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪"
    if percentage > 0.4 and percentage <= 0.5:
        return "🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪"
    if percentage > 0.5 and percentage <= 0.6:
        return "🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪"
    if percentage > 0.6 and percentage <= 0.7:
        return "🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪"
    if percentage > 0.7 and percentage <= 0.8:
        return "🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪"
    if percentage > 0.8 and percentage <= 0.9:
        return "🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪"

    return "🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵"

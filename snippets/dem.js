function sc_update_plugin_options() {
  update_option("sc_pc_method", $_POST["sc_pc_method"]);
  update_option("sc_percent", $_POST["sc_percent"]);
  update_option("sc_free_km", $_POST["sc_free_km"]);
  update_option("sc_price_km", $_POST["sc_price_km"]);
  update_option("sc_fuel_hkm", $_POST["sc_fuel_hkm"]);
  update_option("sc_fuel_price", $_POST["sc_fuel_price"]);
  update_option("sc_fuel_price_auto", $_POST["sc_fuel_price_auto"]);
  update_option("sc_kind_of_fuel", $_POST["sc_kind_of_fuel"]);
  update_option("sc_km_per_day", $_POST["sc_km_per_day"]);
  update_option("sc_truck_rent_day", $_POST["sc_truck_rent_day"]);
  update_option("sc_truck_liability", $_POST["sc_truck_liability"]);
  update_option("sc_hotel", $_POST["sc_hotel"]);
  update_option("sc_employee", $_POST["sc_employee"]);
  update_option("sc_personal_km", $_POST["sc_personal_km"]);
  update_option("sc_add_express", $_POST["sc_add_express"]);
  update_option("sc_email_adress", $_POST["sc_email_adress"]);
}

function refactor() {
  const keys = [
    "sc_pc_method",
    "sc_percent",
    "sc_free_km",
    "sc_price_km",
    "sc_fuel_hkm",
    "sc_fuel_price",
    "sc_fuel_price_auto",
    "sc_kind_of_fuel",
    "sc_km_per_day",
    "sc_truck_rent_day",
    "sc_truck_liability",
    "sc_hotel",
    "sc_employee",
    "sc_personal_km",
    "sc_add_express",
    "sc_email_adress",
  ];
  for (const key of keys) {
    update_option(key, $_POST[key]);
  }
}

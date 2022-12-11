// function renderLastLogin(user) {
//   const year = user.lastLoginDate.getFullYear();
//   const month = user.lastLoginDate.getMonth() + 1;
//   const day = user.lastLoginDate.getDate();

//   return `${day}/${month}/${year}`;
// }

// function renderToday() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth() + 1;
//   const day = today.getDate();

//   return `${day}/${month}/${year}`;
// }

function abudaby(dateTime) {
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();

  return `${day}/${month}/${year}`;
}

function renderLastLogin(user) {
  return abudaby(user.lastLoginDate);
}

function renderToday() {
  return abudaby(new Date());
}

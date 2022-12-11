async function deleteUser(id) {
  await db.sql("UPDATE users SET deleted = 1 WHERE id = $1", id);
  enQueueForDeletionAfter40Days();
  sendConfirmationEmail();
}

async function recoverUser(id) {
  await db.sql("UPDATE users SET deleted = 0 WHERE id = $1", id);
  sendEmailToFriends();
  sendConfirmationEmail();
}

async function changeDeleteStatus(id, newStatus) {
  await db.sql("UPDATE users SET deleted = $1 WHERE id = $2", id, newStatus);
  if (newStatus === "active") {
    enQueueForDeletionAfter40Days();
  } else {
    sendEmailToFriends();
  }
  sendConfirmationEmail();
}

async function deleteUser(id) {
  await db.sql("UPDATE users SET deleted = 1 WHERE id = $1", id);
}

async function recoverUser(id) {
  await db.sql("UPDATE users SET deleted = 0 WHERE id = $1", id);
}

// =======================

async function changeUserDeleteStatus(id, newStatus) {
  await db.sql("UPDATE users SET deleted = $1 WHERE id = $2", newStatus, id);
}

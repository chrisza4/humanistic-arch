function createInvoice(invoice, owner, IO) {
  // Require IO to operate
  const validationResult = validateInvoice(invoice);
  if (validationResult.err) {
    throw new InvalidInvoiceError(validationResult);
  }
  if (canUserCreateInvoice(owner)) {
    throw new PermissionError(validationResult);
  }
  // Test this by mocking IO and see if IO get the Query Method call
  const result = IO.Database.Query("INSERT");
  return result;
}

function validateInvoice(invoice) {
  // Pure function
}

function canUserCreateInvoice(user) {
  // Pure function
}

// ------------------------------------------ non FP

function createInvoice(invoice, owner) {
  // Require IO to operate
  if (invoice.items.length === 0 /* or more complicated logic */) {
    throw new PermissionError(validationResult);
  }
  if (user.department !== Department.Finance /* or more complicated logic */) {
    throw new PermissionError(validationResult);
  }
  const result = Database.Query("INSERT");
  return result;
}

function validateInvoice(invoice) {
  // Pure function
}

function canUserCreateInvoice(user) {
  // Pure function
}

// ===========================

type MarioState = {
  x: number;
  y: number;
  targetY: number;
  state: "Normal" | "Dead";
};

function Jump(current: MarioState): MarioState {
  return {
    ...current,
    targetY: current.y + 10,
  };
}

function Jump(current: MarioState): MarioState {
  return {
    ...current,
    targetY: current.y + 10,
    state: "Dead",
  };
}

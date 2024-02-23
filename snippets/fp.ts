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

function Jump(current: MarioState): MarioState {
  return {
    ...current,
    targetY: current.y + 10,
  };
}

function DeathScene(current: MarioState): DeathMario {
  return {
    ...current,
    targetY: current.y + 10,
    state: "Dead",
  };
}

type MarioState = {
  x: number;
  y: number;
  targetY: number;
  state: "Normal";
};

type DeathMario = {
  x: number;
  y: number;
  targetY: number;
  state: "Dead";
};

function Simulate() {
  const initialState: MarioState = { x: 0, y: 0, targetY: 0, state: "Normal" };
  const nextState = DeathScene(initialState);
  const nextState2 = Jump(nextState);
}

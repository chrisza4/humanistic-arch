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

// ==================================================

// class User {
//   private username: string;

//   constructor(username: string) {
//     this.username = username;
//   }

//   public setUsername(username: string): User {
//     return new User(username);
//   }
// }

// =============================================

// class User {
//   private username: string;

//   constructor(username: string) {
//     this.username = username;
//   }

//   public setUsername(username: string) {
//     this.username = username;
//   }
// }

class Name {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
class NameWithPrefix {
  private prefix: Prefix;
  private name: Name;
  constructor(name: Name, prefix: Prefix) {
    this.prefix = prefix;
    this.name = name;
  }

  public getFullNameWithPrefix() {
    return `${this.prefix} ${this.name.getFullName()}`;
  }
}

class NameManager {
  public static getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }

  public static getFullNameWithPrefix(
    firstName: string,
    lastName: string,
    prefix: Prefix
  ) {
    return `${prefix} ${this.getFullName(firstName, lastName)}`;
  }
}
class User {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  private firstName: string;
  private lastName: string;
  // And more

  public getFullName(): string {
    return new Name(this.firstName, this.lastName).getFullName();
  }
}

class Employee {
  private firstName: string;
  private lastName: string;
  private prefix: Prefix;

  public getFullNameWithPrefix(): string {
    return new NameWithPrefix(
      new Name(this.firstName, this.lastName),
      "Mr."
    ).getFullNameWithPrefix();
  }
}

const getFullName = (firstName: string) => (lastName: string) => {
  return `${firstName} ${lastName}`;
};

const nameWithPrefix = (fullName: string) => (prefix: Prefix) => {
  return `${prefix} ${fullName}`;
};

// function getFullName(firstName: string, lastName: string): string {
//   return `${firstName} ${lastName}`;
// }
const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (value: T) =>
    fns.reduce((acc, fn) => fn(acc), value);

type Prefix = "Mr." | "Miss" | "Mrs.";

// function nameWithPrefix(prefix: Prefix, fullName: string) {
//   return `${prefix} ${fullName}`;
// }

const getFullNameWithPrefix = pipe(getFullName, nameWithPrefix);
// getFullName()

defmodule User do
  defstruct name: "John", age: 27

  def change_username(user, new_name) do
    %User{user | name: new_name}
  end
end

defmodule Main do
  def main do
    john = %User{}
    jane = User.change_username(john, "Jane")
    IO.inspect(john)
    IO.inspect(jane)
  end
end

Main.main()
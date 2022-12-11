class CreateApprovals < ActiveRecord::Migration[7.0]
  def change
    create_table :approvals do |t|

      t.timestamps
    end
  end
end

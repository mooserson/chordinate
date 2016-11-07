class ChangeTable < ActiveRecord::Migration[5.0]
  def change
    change_column :songs, :title, :string, default: "Untitled"
  end
end

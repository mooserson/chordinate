class CreatePlays < ActiveRecord::Migration[5.0]
  def change
    create_table :plays do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
  end
end

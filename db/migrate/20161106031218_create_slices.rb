class CreateSlices < ActiveRecord::Migration[5.0]
  def change
    create_table :slices do |t|
      t.string :notes
      t.integer :timeSlice, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :slices, :song_id
  end
end

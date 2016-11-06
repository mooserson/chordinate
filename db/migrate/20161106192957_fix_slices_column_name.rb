class FixSlicesColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :slices, :timeSlice, :time_slice
  end
end

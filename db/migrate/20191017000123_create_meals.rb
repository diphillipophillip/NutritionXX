class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :date
      t.string :name
      t.integer :total_calories
      t.integer :calories_from_fat
      t.integer :total_fat
      t.integer :saturated_fat
      t.integer :cholesterol
      t.integer :sodium
      t.integer :potassium
      t.integer :total_carbohydrates 
      t.integer :dietary_fiber
      t.integer :sugar
      t.integer :protein
      t.integer :user_id
      t.timestamps
    end
  end
end

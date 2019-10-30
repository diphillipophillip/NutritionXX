class MealSerializer < ActiveModel::Serializer
  attributes :id, :date, :name, :total_calories, :calories_from_fat, :total_fat, :saturated_fat, :cholesterol, :sodium, :potassium, :total_carbohydrates, :dietary_fiber, :sugar, :protein
  belongs_to :user
end

class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, :length => {:within => 4..9}
    validates :username, uniqueness: true
    has_many :posts
    has_many :meals
end

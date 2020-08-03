# README

[Live Site](http://coinbase-appacademy.herokuapp.com/)

## About

Binance-XChange is inspired by Binance, a digital currency brokerage exchange that provides users a platform to buy, sell, and reserach various digital assets such as: Bitcoin, Ethereum, and Lite Coin. Binance-XChange is a risk-free site allowing users to navigate the site safely navigating through current cryptocurrency pricing. Binance-Xchange users may execute or sell market orders, track currency news and prices over multiple timeframes.

![home](https://github.com/vincengai/Binance-Market/blob/master/app/assets/images/homepage.png)


## Technologies 
* Frontend: Javascript, React, Redux, CSS, HTML5
* Backend: Ruby on Rails, PostgreSQL
* Financial Data: CryptoCompare API
* Misc: Webpack, Jbuilder, Heroku


## Features 

# Custom User Authentication
Created a custom Rails back-end user authentication pattern with a BCrypt ruby gem. Bcrypt internally uses Blowfish encryption. The following is part of the auth pattern from the user model:

``` 
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

def ensure_session_token
  self.session_token ||= self.class.generate_session_token
end
```

# Currency Price Data Visualization 

Coinspace has support for viewing price data in multiple timeframes (daily, weekly, monthly, yearly) for 17 different cryptocurrencies. I used [CryptoCompare](https://min-api.cryptocompare.com/) for all of the currency price, volume, and market cap data. Recharts (Javascript Library) was used to render the charts which can be seen below:

# Current News  

Users can view the latest news (from the cryptocompare API) related to any currency they are viewing. Updated news is fetched on every page refresh.

* Fundementally, the API GET request is done through the frontend.
* Parses through the information before rendering the information. 



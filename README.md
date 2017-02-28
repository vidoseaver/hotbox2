# Hot Reads

## About

Hot reads is the front end of our final assessment at turing. Its ugly but its to
spec basically what it does it show the top 10 "read" links from a backend site where
people have accounts and track links they've read and want to read. I didnt come up with
the idea. I just built it to "spec" in about 12 hours.

## Setup

To run it:

```
git clone git@github.com:vidoseaver/hotbox2.git
cd final-hot-reads
rake db:create
rake db:migrate
rails s
visit http://localhost:3000/
```

To run the tests:
```
rspec
```

Productio links:
* [Hot box](https://mighty-cliffs-80459.herokuapp.com/) (front-end)
* [Lock box](https://warm-dawn-37097.herokuapp.com/) (front-end)


## Info

This app is written in Rails v5.0.0.1. There is a little Javascript and it uses the axios gem for Ajax calls.
The database is postgresql. Tests writtenin rspec-rails. Coverage provided by simplecov.

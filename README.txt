Passport Date web application
=============================

So you want to hack on this web app?

Getting Started
---------------

- Get node.js (v0.12.7+): https://nodejs.org/

- Install ember:
  # npm install -g ember-cli
  # npm install -g phantomjs2
  
- (optional) Install watchman: https://facebook.github.io/watchman/docs/install.html
  
- To install Python packages and set-up: ./bin/python setup.py develop

- Install a PostgreSQL database and set the DSN in development.ini

- To initialize database: ./bin/initialize_pd_db development.ini

- To serve it all up!

 $ pg_ctl start
 $ cd emberpd; ember serve
 $ ./bin/pserve pd/development.ini
 

Have fun, kids!

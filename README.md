
*A repository for a React app using Docker, Amazon Web Service, and Travis CI for CI/CD demonstration*

## Breakdown of Project *(Step by step of creation and progress)*

1. Created React app locally and edited the App.js file to contain a basic description.
    * *Note: this repo is not an example of my skillset regarding Web Development.  It is merely intended to showcase my DevOp skillset.*

1. Created "Dockerfile.dev" for local development, and "Dockerfile" for production builds.

1.  Configured Travis CI to watch for changes on the Master branch.  Watches for pushed commits and for merged pull requests.  

1.  Upon seeing changes, Travis CI accesses the Master branch of this repo - and any merged branches - then accesses "Travis.yml" for settings to compile and test the React project inside the Docker container.

1.  If the tests all pass inside of Travis CI, the built React application is sent automatically to AWS and stored at the following url: http://dockerreactapp-env.eba-2kqdirk2.us-east-2.elasticbeanstalk.com/



## To-Do List ( *complete* )

* ( *complete* ) Have Travis CI watch for merged master files in addition to pushed commits to the master branch.

This is a starter react app with docker

git clone https://github.com/maurajoglekar/maura-app.git
cd into the repo
Run docker deamon
To build the docker image: docker build -t react-app:dev .
docker images
docker run -p 3000:3000 <docker image id>
Go to localhost:3000 in the browser

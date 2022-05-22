docker-compose down
docker-compose up --build -d
docker-compose exec project yarn build
rm -r docs
mv ./project/dist docs
docker-compose down
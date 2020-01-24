Prepare these 7 environment variables ready:
TEST_DB_USERNAME_DEV
TEST_DB_PASSWORD_DEV
TEST_DB_USERNAME_UAT
TEST_DB_PASSWORD_UAT
TEST_DB_USERNAME_PROD
TEST_DB_PASSWORD_PROD
NODE_ENV (development/uat/prod)


to create a database:
cd <root>
db-migrate db:create <db-name>


to create a db migration:

cd <root>
db-migrate create <migration-name>


to migrate db:

cd <root>
db-migrate up -e uat/prod (default environment is $NODE_ENV which is set to development)


to undo 1 db migration:

cd <root>
db-migrate down -e uat/prod (default environment is $NODE_ENV which is set to development)


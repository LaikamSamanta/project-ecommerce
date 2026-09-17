#!/bin/sh
set -e

# Aiven (and most managed MySQL hosts) require SSL. If the CA cert content
# was passed in as an env var, write it to a file so config/database.php's
# MYSQL_ATTR_SSL_CA can point at it.
if [ -n "$MYSQL_SSL_CA_CONTENT" ]; then
    printf '%s' "$MYSQL_SSL_CA_CONTENT" > /tmp/db-ca.pem
    export MYSQL_ATTR_SSL_CA=/tmp/db-ca.pem
fi

php artisan config:clear
php artisan migrate --force

PORT="${PORT:-8080}"
exec php artisan serve --host=0.0.0.0 --port="$PORT"

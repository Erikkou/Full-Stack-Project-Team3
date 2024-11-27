# backend/Dockerfile
FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    nginx \
    && docker-php-ext-install intl pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . .

# Copy environment variables
COPY .env /var/www/.env

# Install Symfony dependencies
RUN composer install

# Set permissions for var directory
RUN mkdir -p var/cache var/log && chown -R www-data:www-data var

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/sites-available/default

# Expose port 80
EXPOSE 80

# Start Nginx and PHP-FPM
CMD mkdir -p var/cache var/log && chown -R www-data:www-data var && service nginx start && php-fpm -F
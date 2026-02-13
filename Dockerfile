FROM ruby:2.7.8

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test

COPY package.json ./
RUN npm install

COPY . .
RUN npx webpack --config webpack.config.js
RUN RAILS_ENV=production SECRET_KEY_BASE=placeholder bundle exec rake assets:precompile

EXPOSE 3000

ENTRYPOINT ["./bin/docker-entrypoint.sh"]
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]

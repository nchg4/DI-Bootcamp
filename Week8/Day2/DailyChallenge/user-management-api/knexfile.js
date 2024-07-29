module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './server/config/migrations'
      },
      seeds: {
        directory: './server/config/seeds'
      }
    }
  };
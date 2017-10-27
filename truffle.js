module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x008491E354540059DD8A06B500112460419D6a34", // default address to use for any transaction Truffle makes during migrations
      network_id: 3,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};

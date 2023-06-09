const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchData: new Date("December 27, 2030"),
  destination: "Kepler-442b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

module.exports = {
  launches,
};

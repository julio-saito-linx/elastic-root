/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'player': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "saitodisse/ruby-nodejs:0.1",
    // Steps to execute before running instances
    provision: [
      "npm install",
      "npm install grunt-cli bower",
      "node_modules/bower/bin/bower --allow-root --config.interactive=false install"
    ],
    workdir: "/azk/#{manifest.dir}/1-player",
    command: "node_modules/grunt-cli/bin/grunt serve",
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      // 1-player.azk.dev
      hostname: "#{system.name}.#{azk.default_domain}"
    },
    envs: {
      // set instances variables
      NODE_ENV: "development",
    },
  },
  'searcher': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "saitodisse/ruby-nodejs:0.1",
    // Steps to execute before running instances
    provision: [
      "npm install",
      "npm install grunt-cli bower",
      "node_modules/bower/bin/bower --allow-root --config.interactive=false install"
    ],
    workdir: "/azk/#{manifest.dir}/2-elastic-mp3-searcher",
    command: "node_modules/grunt-cli/bin/grunt serve",
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      // 2-elastic-mp3-searcher.azk.dev
      hostname: "#{system.name}.#{azk.default_domain}"
    },
    envs: {
      // set instances variables
      NODE_ENV: "development",
    },
  },
  'socketserver': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "dockerfile/nodejs",
    // Steps to execute before running instances
    provision: [
      "npm install",
      "npm install grunt-cli bower",
      "node_modules/bower/bin/bower --allow-root --config.interactive=false install"
    ],
    workdir: "/azk/#{manifest.dir}/3-socketServer",
    command: "node app.js",
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      // 3-socketServer.azk.dev
      hostname: "#{system.name}.#{azk.default_domain}"
    },
    envs: {
      // set instances variables
      NODE_ENV: "development",
    },
  },
  'mp3server': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "dockerfile/nodejs",
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}/4-mp3Server",
    command: "node app.js",
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      // 4-mp3Server.azk.dev
      hostname: "#{system.name}.#{azk.default_domain}"
    },
    envs: {
      // set instances variables
      NODE_ENV: "development"
    },
  },
  'elastic-database': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "dockerfile/elasticsearch",
    // Steps to execute before running instances
    // provision: [
    //   "echo > elasticsearch.yml",
    // ],
    workdir: "/azk/#{manifest.dir}/elastic-database",
    command: "/elasticsearch/bin/elasticsearch -Des.config=/azk/#{manifest.dir}/elastic-database/elasticsearch.yml",
    mounts: {
      '/azk/#{manifest.dir}': path(".")
    },
    ports:{
      portA: "9200:9200/tcp",
      portB: "9300:9300/tcp",
    }
    // scalable: {"default": 1},
    // http: {
    //   hostname: "#{system.name}.#{azk.default_domain}"
    // },
    // envs: {
    //   // set instances variables
    //   NODE_ENV: "development"
    // },
  },
});




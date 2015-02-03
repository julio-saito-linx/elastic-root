/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'player': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: { docker: "saitodisse/ruby-nodejs:0.1" },
    // Steps to execute before running instances
    provision: [
      "npm install",
      "npm install grunt-cli bower",
      "node_modules/bower/bin/bower --allow-root --config.interactive=false install"
    ],
    workdir: "/azk/#{manifest.dir}/1-player",
    command: "node_modules/grunt-cli/bin/grunt serve",
    mounts: {
      '/azk/#{manifest.dir}': path(".")
    },
    scalable: {"default": 1},
    http: {
      // 1-player.dev.azk.io
      domains: ["#{system.name}.#{azk.default_domain}"],
    },
    envs: {
      // set instances variables
      NODE_ENV: "development",
      // LIVE_RELOAD_PORT: "35731"
    },
    ports:{
      portLiveReload: "35731:35731/tcp",
    }
  },
  'searcher': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: { docker: "saitodisse/ruby-nodejs:0.1" },
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
      // 2-elastic-mp3-searcher.dev.azk.io
      domains: ["#{system.name}.#{azk.default_domain}"],
    },
    envs: {
      // set instances variables
      NODE_ENV: "development",
      // LIVE_RELOAD_PORT: "35732"
    },
    ports:{
      portLiveReload: "35732:35732/tcp",
    }
  },
  'socketserver': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: { docker: "node" },
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
      // 3-socketServer.dev.azk.io
      domains: ["#{system.name}.#{azk.default_domain}"],
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
    image: { docker: "node" },
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}/4-mp3Server",
    command: "node app.js",
    mounts: {
      '/azk/#{manifest.dir}'           : path('.'),
      '/azk/mounts/media/julio/Mp3/'   : path('/media/julio/Mp3'),   // ntfs - mounted
      '/azk/mounts/media/julio/2gb/'   : path('/media/julio/2gb'),   // ntfs - mounted
      '/azk/mounts/media/julio/Files/' : path('/media/julio/Files'), // ntfs - mounted
      '/azk/mounts/home/julio/Music'   : path('/home/julio/Music'),  // local
    },
    scalable: {"default": 1},
    http: {
      // 4-mp3Server.dev.azk.io
      domains: ["#{system.name}.#{azk.default_domain}"],
    },
    envs: {
      // set instances variables
      NODE_ENV: "development"
    },
  },

  'elastic-database': {
    image: { docker: "dockerfile/elasticsearch" },
    workdir: "/azk/#{manifest.dir}/elastic-database",
    command: "/elasticsearch/bin/elasticsearch -Des.config=/azk/#{manifest.dir}/elastic-database/elasticsearch.yml",
    mounts: {
      '/azk/#{manifest.dir}': path(".")
    },
    ports:{
      portA: "9200:9200/tcp",
      portB: "9300:9300/tcp",
    }
  },

});




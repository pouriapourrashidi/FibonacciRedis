module.exports = {
    apps : [{
      name: 'Publisher Application',
      script: 'server.js',
      instances: 2,
      autorestart: true,
      exec_mode:"cluster",
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      }},
      {
        name: "Subscriber1",
        script:"subscribers/subscriber_worker1.js",
        instances:1
      },
      {
        name: "Subscriber1",
        script:"subscribers/subscriber_worker1.js",
        instances:1
      }
    ]
  };
  
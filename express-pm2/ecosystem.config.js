//ecosystem.config.js
module.exports = {
    apps: [{
        name: 'express-example',
        script: './bin/www',
        instances: 4,
        exec_mode: 'cluster',
        wait_ready: true,
        listen_timeout: 50000,
        kill_timeout: 5000,
        error_file: 'err.log',
        out_file: 'out.log',
        log_file: 'combined.log',
        time: true
    }]
}
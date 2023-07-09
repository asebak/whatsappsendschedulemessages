var schedule = require('node-schedule');

class Singleton {
    constructor() {
        this.jobs = [];
    }

    addJob(name, date, handler) {
        const job = schedule.scheduleJob(name, date, handler);
        this.jobs.push(job);
    }

    getJob(name) {
        if(!this.jobs || this.jobs.length <= 0) {
            return null;
        }
        return this.jobs.find(job => job?.name === name);
    }
    
    removeJob(name) {
        var job = this.getJob(name);
        if(job) {
            job.cancel();
        }
        if(this.jobs.length <= 0) {
            return;
        }
        this.jobs =  this.jobs.filter(job => job?.name !== name);
    }

    process() {
        console.log('The answer to life, the universe, and everything!');
    }
}

class ScheduleJobHandler {

    constructor() {
        throw new Error('Use ScheduleJobHandler.getInstance()');
    }
    
    static getInstance() {
        if (!ScheduleJobHandler.instance) {
            ScheduleJobHandler.instance = new Singleton();
        }
        return ScheduleJobHandler.instance;
    }


}




module.exports = ScheduleJobHandler
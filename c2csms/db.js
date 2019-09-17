const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParser: true});

require('./services/user.service.server');
require('./services/student.service.server');
require('./services/fees.service.server');
require('./services/performance.service.server');
require('./services/activities.service.server');
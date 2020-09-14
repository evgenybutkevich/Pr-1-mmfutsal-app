const bodyParser = require('body-parser');
const cors = require('cors');

const commonConfig = require('./config/common.json');
const errorHandler = require('./express/middleware/error-handler');
const app = require('./express/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use(errorHandler);

app.listen(commonConfig.port, () => {
    console.log(`Express server listening on port ${commonConfig.port}...`);
});

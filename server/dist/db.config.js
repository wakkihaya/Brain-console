"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const brainwaves_entity_1 = require("./entities/brainwaves.entity");
exports.dbConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test',
    database: 'sample',
    entities: [brainwaves_entity_1.Brainwaves],
    synchronize: false,
};
//# sourceMappingURL=db.config.js.map
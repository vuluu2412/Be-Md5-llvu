import {DataSource} from "typeorm";

export const AppDataSource= new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'case_md5',
    synchronize: true,
    entities: ['dist/src/model/*.js']
})
import winston from 'winston';

let alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.timestamp({
        format:"YY-MM-DD HH:mm:ss"
    }),
    winston.format.printf(
        info => `${info.timestamp}  ${info.level} : ${info.message}`
    )
);
    
const logger = winston.createLogger({
    level: "debug",
    silent: process.env.NODE_ENV === 'test' ? true : false,
    transports: [
        new (winston.transports.Console)({
            format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
        })
    ],
});

export default logger;
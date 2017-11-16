var Debug = (() => {
    if (!process.env.PURE_DEBUG) {
        switch (true) {
        case /DEBUG/.test(process.env.DEBUG):
            break
        case /INFO/.test(process.env.DEBUG):
            process.env.DEBUG = "DEBUG,INFO"
            break
        case /WARN/.test(process.env.DEBUG):
            process.env.DEBUG = "DEBUG,INFO,WARN"
            break
        case /ERROR/.test(process.env.DEBUG):
            process.env.DEBUG = "DEBUG,INFO,WARN,ERROR"
            break
        case /FATAL/.test(process.env.DEBUG):
            process.env.DEBUG = "DEBUG,INFO,WARN,ERROR,FATAL"
            break
        }
    }

    var debugDebug = require("debug")("DEBUG")
    var debugInfo = require("debug")("INFO")
    var debugWarn = require("debug")("WARN")
    var debugError = require("debug")("ERROR")
    var debugFatal = require("debug")("FATAL")

    return {
        debug: (obj) => {
            debugDebug(obj)
        },
        info: (obj) => {
            debugInfo(obj)
        },
        warning: (obj) => {
            debugWarn(obj)
        },
        error: (obj) => {
            debugError(obj)
        },
        fatal: (obj) => {
            debugFatal(obj)
        }
    }
})()

module.exports = Debug


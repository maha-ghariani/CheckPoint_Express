const middleWare = (req, res, next) => {
    const day = new Date().getDay();
    const time = new Date().getHours();
    if ((day >= 1 && day <= 5) || (time >= 9 && time <= 17)) {
        next();
    }
    else {
        res.status(200).send('<h1>we are closed right now!</h1>');
    }
}
module.exports = middleWare;
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get("/setcookie", (req, res) => {
    res.cookie("key", "Seu lindo valor que será encriptado");
    res.send("hmmmmm cookiezinho gostoso, bom demais hein!");
});

app.get("/getcookie", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});


app.get("/setsecurecookie", (req, res) => {
    res.cookie("cookie seguro", "seu lindo cookie seguro & encriptado LTDA", {
        maxAge: 5000, //também poderia ser "expires: new Date('02 22 2022)", o efeito será o mesmo do maxAge.
        secure: true,
        httpOnly: true,
        sameSite: "lax"
    });
    res.send("Hmmmm cookiezinho seguro hein, gostoso demais!");
});

app.get("/deletecookie", (req, res) => {
    res.clearCookie("key");
    res.send("Cookies comidos");
});


app.listen(4000, () => console.log("running on port 4000"));
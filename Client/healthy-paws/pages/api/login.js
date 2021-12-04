import cookie from "cookie";

export default (req, res) => {

    switch (req.method) {
        case 'POST':
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", req.body.token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60,
                    sameSite: "lax",
                    path: "/",
                })
            );
            res.statusCode = 200;
            res.json({ success: true });
            break;
        
        case 'GET':
            res.status(200).json({token: req.cookies.token});
            break;

    }

};
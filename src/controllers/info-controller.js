
const info = (req, res) => {
    return res.status(200).json({ //status & json function returns same res oject
        success: true,
        message: "API is alive",
        error: {},
        data: {}
    })
}


module.exports={
    info
}

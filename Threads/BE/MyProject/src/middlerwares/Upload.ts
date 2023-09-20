import { NextFunction, Request, Response } from "express";
import * as multer from 'multer'

export const Upload = (fileName: string) => {
    const storage = multer.diskStorage({
        destination: function (req, res, callback) {
            callback(null, './uploads')
        },
        filename: function (req, file, callback) {
            const unixSuffix = Date.now()
            callback(null, file.fieldname  + "-" + unixSuffix + ".jpg")
        }
    })

    const uploadFile = multer({storage: storage})

    return (req: Request, res: Response, next: NextFunction) => {
        uploadFile.single(fileName)(req, res, async function(err: any) {
            if (err) {
                return next(err)
            }

            // const file = req.file.filename
            // console.log("ini file name", file);
            if (!req.file) {
                return next()
            }

            res.locals.filename = req.file.filename;
            next();
            // try {
            //     cloudinary.uploader.upload(file.path, (err, result) => {
            //         if (err) {
            //             return res.status(500).json({err: "failed to upload file"})
            //         }
            //         res.locals.filename = result.secure_url
            //         next()
            //     })
            // } catch {
            //     return res.status(500).json({
            //         err: err,
            //         message: "ada error nih"
            //     })
            // }
        })
    }
}
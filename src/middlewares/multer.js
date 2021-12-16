import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, './src/public/img/products'),
  filename: (req, {originalname}, callback) => callback(null, originalname)
})

const upload = multer({storage})

export const uploadImage = (name) => upload.single(name)

export const uploadImages = (name) => upload.array(name)

export const uploadNone = () => upload.none()
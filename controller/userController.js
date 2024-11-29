import { userModel } from "../model/userSchema.js";

export const userData = async (req, res) => {

    try {
        
        const { email, password } = req.body
        
        const emailExits = await userModel.findOne({ email })
        console.log('hi');

        if (!emailExits) {
            return res.status(404).json({ success: false, message: "user not found" })
        }

        const user = await userModel({
            email,
            password
        })

        await user.save()

        return res.status(200).json({ success: true, message: "user login succssfull", user })

    } catch (error) {
        return res.status(500).json({ success: false, message: `not found ${error.message}` })
    }
}

import bcrypt from 'bcrypt'


export const hash =async(plainText , Salt_Round= process.env.SALT , minor='b')=>{
   const Salt_Signature = await bcrypt.genSalt(Number(Salt_Round= process.env.SALT) , minor='b')
   const CipherText = await bcrypt.hash( plainText,Salt_Signature )
   return CipherText

}
export const compare = async (PlainText , hashedText)=>{
    const CipherText = await bcrypt.compare(PlainText , hashedText)
    return CipherText
}
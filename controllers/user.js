export const user = async (req,res)=>{
    try{
        return res.status(200).json("This is working")
    }catch(err){
        return res.status(500).json("Error")
    }
}

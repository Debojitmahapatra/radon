const UrlModel = require("../Models/urlModels");
const shortid = require("shortid");
const validUrl = require("valid-url");
const reurl=/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/


const urlCreate = async function (req, res) {
    const { longUrl } = req.body;
    if (Object.keys(req.body).length == 0) { return res.status(400).send({ status: false, msg: "Bad request- Please enter details in the request Body " }) }
    if (!x(longUrl)) { return res.status(400).send({ status: false, msg: "Please enter your longUrl" }) }

  const baseUrl = "http://localhost:3000"

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).send({status:false,message:'Invalid base url'});
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longUrl)&&reurl.test(longUrl)) {
    try {
      let url = await UrlModel.findOne({ longUrl }).select({longUrl:1,shortUrl:1,urlCode:1,_id:0});

      if (url) {
       return res.status(200).send({status:true,data:url});

      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        deRurl ={
            longUrl:longUrl,
            shortUrl:shortUrl,
            urlCode:urlCode        
        };

        let newUrl=await UrlModel.create(deRurl);
       let finelResult=await UrlModel.findById(newUrl._id).select({longUrl:1,shortUrl:1,urlCode:1,_id:0})
        res.status(200).send({status:true,data:finelResult});
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  } else {
    res.status(400).send({status:false,message:'Invalid long url'});
  }
};

function x(data) {
    if (!data || data == null || data === undefined || data.trim() == 0) return false;
    return true
}
const getUrl= async function (req, res){
    try{
        let url=req.params.urlCode;
        if (!x(url)) return res.status(400).send({status:false,message:"enter valid urlcode"})
        if (!(url.length >= 7 && url.length <= 14)) return res.status(400).send({ status: false, message: "Enter a valid urlcode" })
        let findUrl=await UrlModel.findOne({urlCode:url});
        if(findUrl){
            return res.status(302).redirect(findUrl.longUrl)//.send({status:true,message:`this url redirect to=> ${findUrl.longUrl}`})
        }else{
            return res.status(404).send({status:false,message:'No url found'})
        }    
    }catch(err){
        return res.status(500).send('Server error');
    }
}



module.exports = { urlCreate,getUrl}
